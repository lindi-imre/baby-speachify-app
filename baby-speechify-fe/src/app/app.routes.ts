import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';

export const routes: Routes = [
  {
    path: 'play',
    loadComponent: () =>
      import('./components/play-page/play-page.component').then(
        (m) => m.PlayPageComponent
      ),
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: '',
    redirectTo: 'play',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'play',
  },
];
