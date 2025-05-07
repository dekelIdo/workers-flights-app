import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorkersListComponent } from './workers/components/workers-list/workers-list.component';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, WorkersListComponent, HttpClientModule] 
})
export class AppComponent {
  title = 'workers-flights-app';
  darkMode = false;

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark-mode', this.darkMode);
  }
}