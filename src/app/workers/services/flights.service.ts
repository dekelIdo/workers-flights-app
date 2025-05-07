import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Flight } from '../models/flight.model';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const MOCK_FLIGHTS: Flight[] = [
  { num: 123, from: 'JFK', from_date: new Date(), to: 'LAX', to_date: new Date(), duration: 360, plane: 'Boeing 737', from_gate: 'A1', to_gate: 'B2' },
  { num: 456, from: 'LHR', from_date: new Date(), to: 'CDG', to_date: new Date(), duration: 75, plane: 'Airbus A320', from_gate: 'C3', to_gate: 'D4' }
];

@Injectable({ providedIn: 'root' })
export class FlightsService {
  private apiUrl = '/api/flights';
  constructor(private http: HttpClient) {}

  getFlightsByWorker(workerId: number): Observable<Flight[]> {
    if (!isDevMode()) {
      console.log('mock flitghts');
      return of(MOCK_FLIGHTS);
    }
    return this.http.get<Flight[]>(`${this.apiUrl}/${workerId}`).pipe(
      catchError(() => of(MOCK_FLIGHTS))
    );
  }
}