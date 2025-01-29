import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { RedirectComponent } from './pages/redirect/redirect.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'redirect/:shortUrlPath', component: RedirectComponent },
  { path: '**', component: NotFoundComponent },
];
