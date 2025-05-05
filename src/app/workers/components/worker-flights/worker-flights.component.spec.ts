import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerFlightsComponent } from './worker-flights.component';

describe('WorkerFlightsComponent', () => {
  let component: WorkerFlightsComponent;
  let fixture: ComponentFixture<WorkerFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkerFlightsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkerFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
