import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Worker } from '../models/worker.model';  // Adjust the path as necessary

@Injectable({
  providedIn: 'root' // This makes sure the service is available app-wide
})
export class WorkersService {
  private apiUrl = '/api/workers';

  constructor(private http: HttpClient) {}

  // This method returns the observable
  getWorkers(): Observable<Worker[]> {
    return this.http.get<Worker[]>(this.apiUrl);
  }
}
