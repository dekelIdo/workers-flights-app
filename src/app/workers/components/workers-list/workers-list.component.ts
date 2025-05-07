import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WorkersService } from '../../services/workers.service';
import { Worker } from '../../models/worker.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class WorkersListComponent implements OnInit {
  workers: Worker[] = [];
  @Input() selectedWorker?: Worker;
  @Output() workerSelected = new EventEmitter<Worker>();

  constructor(private readonly workersService: WorkersService) {}

  ngOnInit(): void {
    this.workersService.getWorkers().subscribe({
      next: (data) => { this.workers = data; },
      error: (err) => { console.error('Error fetching workers:', err); }
    });
  }

  selectWorker(worker: Worker): void {
    this.workerSelected.emit(worker);
  }

  trackByWorkerId(index: number, worker: Worker): number {
    return worker.id;
  }

  getAvatarUrl(name: string): string {
    // Use DiceBear Avatars API for a unique face avatar
    return `https://api.dicebear.com/7.x/fun-emoji/svg?seed=${encodeURIComponent(name)}`;
  }
}
