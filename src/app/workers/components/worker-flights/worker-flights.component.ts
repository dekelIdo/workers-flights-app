import {
  Component,
  Input,
  OnChanges,
  Output,
  EventEmitter,
  SimpleChanges,
  OnDestroy
} from '@angular/core';
import { Flight } from '../../models/flight.model';
import { FlightsService } from '../../services/flights.service';
import { Worker } from '../../models/worker.model';
import { Subscription, timer, switchMap, startWith } from 'rxjs';
import { CommonModule, DatePipe } from '@angular/common';
import { DurationPipe } from '../../../shared/duration.pipe';

@Component({
  selector: 'app-worker-flights',
  standalone: true,
  imports: [CommonModule, DatePipe, DurationPipe],
  templateUrl: './worker-flights.component.html',
  styleUrls: ['./worker-flights.component.scss']
})
export class WorkerFlightsComponent implements OnChanges, OnDestroy {
  @Input() worker!: Worker;
  @Output() flightSelected = new EventEmitter<Flight>();

  flights: Flight[] = [];
  selectedFlight?: Flight;
  private timerSub?: Subscription;

  constructor(private flightsService: FlightsService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['worker']) {
      this.startTimer();
    }
  }

  startTimer() {
    this.timerSub?.unsubscribe();
    this.timerSub = timer(0, 60000)
      .pipe(switchMap(() => this.flightsService.getFlightsByWorker(this.worker.id)))
      .subscribe((data) => {
        this.flights = data.map(flight => ({
          ...flight,
          from_date: typeof flight.from_date === 'string' ? parseDate(flight.from_date) : flight.from_date,
          to_date: typeof flight.to_date === 'string' ? parseDate(flight.to_date) : flight.to_date
        }));
        if (this.flights.length > 0) {
          this.selectedFlight = this.flights[0];
          this.flightSelected.emit(this.flights[0]);
        } else {
          this.selectedFlight = undefined;
        }
      });
  }

  selectFlight(flight: Flight) {
    this.selectedFlight = flight;
    this.flightSelected.emit(flight);
  }

  ngOnDestroy(): void {
    this.timerSub?.unsubscribe();
  }
}

// Helper function to parse dd/MM/yyyy to Date
function parseDate(dateStr: string): Date {
  if (!dateStr) return new Date('');
  const [day, month, year] = dateStr.split('/').map(Number);
  return new Date(year, month - 1, day);
}
