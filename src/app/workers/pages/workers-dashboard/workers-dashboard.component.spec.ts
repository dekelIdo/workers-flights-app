import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersDashboardComponent } from './workers-dashboard.component';

describe('WorkersDashboardComponent', () => {
  let component: WorkersDashboardComponent;
  let fixture: ComponentFixture<WorkersDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkersDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkersDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
