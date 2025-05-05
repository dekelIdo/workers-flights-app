import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flight } from '../models/flight.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FlightsService {
private apiUrl = '/api/flights'; 
  constructor(private http: HttpClient) {}

  getFlightsByWorker(workerId: number): Observable<Flight[]> {
    return this.http.get<Flight[]>(`${this.apiUrl}/${workerId}`);
  }
}
