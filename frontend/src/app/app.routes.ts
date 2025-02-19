import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { RedirectComponent } from './pages/redirect/redirect.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'r/:shortUrlPath', component: RedirectComponent },
  // {
  //   path: ':shortUrlPath',
  //   redirectTo: 'redirect/:shortUrlPath',
  //   pathMatch: 'full',
  // },
  { path: '**', component: NotFoundComponent },
];
