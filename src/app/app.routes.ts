import { Routes } from '@angular/router';
export const routes: Routes = [
  { path: '', loadChildren: () => import('./workers/workers.module').then(m => m.WorkersModule) },
  { path: '*', redirectTo: '', pathMatch: 'full' },
];
