import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationPipe } from '../../../shared/duration.pipe';  // Update path if necessary
import { Flight } from '../../models/flight.model';
import { FlightInfoModalComponent } from './flight-info-modal/flight-info-modal.component';

@Component({
  selector: 'app-flight-info',
  standalone: true,
  imports: [CommonModule, DurationPipe, FlightInfoModalComponent],
  templateUrl: './flight-info.component.html',
  styleUrls: ['./flight-info.component.scss']
})
export class FlightInfoComponent {
  @Input() flight: Flight | null = null;
  showModal = false;

  openModal() {
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
  }
}