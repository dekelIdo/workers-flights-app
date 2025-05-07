import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Worker } from '../models/worker.model';  // Adjust the path as necessary

// const MOCK_WORKERS: Worker[] = [
//   { id: 1, name: 'John Doe' },
//   { id: 2, name: 'Jane Doe' },
//   { id: 3, name: 'Mr. Smith' },
//   { id: 4, name: 'Patrick Stewart' }
// ];

@Injectable({
  providedIn: 'root'
})
export class WorkersService {
  private apiUrl = '/api/workers';

  constructor(private http: HttpClient) {}
  getWorkers(): Observable<Worker[]> {
    return this.http.get<Worker[]>(this.apiUrl).pipe(
      catchError(() => of([]))
    );
  }
}
