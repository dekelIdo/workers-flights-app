import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationPipe } from '../../../shared/duration.pipe';  // Update path if necessary

@Component({
  selector: 'app-flight-info',
  standalone: true,
  imports: [CommonModule, DurationPipe],  // Import the pipe here
  templateUrl: './flight-info.component.html',
  styleUrls: ['./flight-info.component.scss']
})
export class FlightInfoComponent {
  @Input() flight: any;  // Ensure proper typing for flight
}