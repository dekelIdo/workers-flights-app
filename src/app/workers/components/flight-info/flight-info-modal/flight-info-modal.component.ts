import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Flight } from '../../../models/flight.model';
import { DurationPipe } from '../../../../shared/duration.pipe';

@Component({
  selector: 'app-flight-info-modal',
  standalone: true,
  imports: [CommonModule, DurationPipe],
  templateUrl: './flight-info-modal.component.html',
  styleUrls: ['./flight-info-modal.component.scss']
})
export class FlightInfoModalComponent {
  @Input() flight: Flight | null = null;
  @Output() close = new EventEmitter<void>();
}
