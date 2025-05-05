import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';  // Import the standalone component
import { HttpClientModule } from '@angular/common/http';  // Don't forget to import this too if needed

@NgModule({
  imports: [BrowserModule, HttpClientModule],  // Add necessary modules here
  providers: [],
})
export class AppModule {}
