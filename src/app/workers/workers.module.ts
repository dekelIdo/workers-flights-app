import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlightInfoComponent } from './components/flight-info/flight-info.component';
import { WorkerFlightsComponent } from './components/worker-flights/worker-flights.component';
import { WorkersListComponent } from './components/workers-list/workers-list.component';
import { WorkersDashboardComponent } from './pages/workers-dashboard/workers-dashboard.component';
import { DatePipe } from '@angular/common';

@NgModule({
  imports: [WorkersListComponent, FlightInfoComponent, WorkerFlightsComponent, CommonModule, RouterModule.forChild([{ path: '', component: WorkersDashboardComponent }]), DatePipe]
})
export class WorkersModule { }
