import { Component } from '@angular/core';
import { Worker } from '../../models/worker.model';
import { Flight } from '../../models/flight.model';
import { WorkersListComponent } from '../../components/workers-list/workers-list.component';
import { WorkerFlightsComponent } from '../../components/worker-flights/worker-flights.component';
import { FlightInfoComponent } from '../../components/flight-info/flight-info.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workers-dashboard',
  standalone: true,
  imports: [WorkersListComponent, WorkerFlightsComponent, FlightInfoComponent, CommonModule],
  templateUrl: './workers-dashboard.component.html',
  styleUrls: ['./workers-dashboard.component.scss']
})
export class WorkersDashboardComponent {
  selectedWorker?: Worker;
  selectedFlight?: Flight;

  onWorkerSelect(worker: Worker) {
    this.selectedWorker = worker;
    this.selectedFlight = undefined; // Reset
  }

  onFlightSelect(flight: Flight) {
    this.selectedFlight = flight;
  }
}
