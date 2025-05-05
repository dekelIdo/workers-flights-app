import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'workers', pathMatch: 'full' },
    { path: 'workers', loadChildren: () => import('./workers/workers.module').then(m => m.WorkersModule) }
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
