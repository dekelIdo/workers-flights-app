import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'workers', pathMatch: 'full' },
  { path: 'workers', loadChildren: () => import('./workers/workers.module').then(m => m.WorkersModule) }
];
