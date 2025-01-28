import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { RedirectComponent } from './pages/redirect/redirect.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'redirect/:shortUrlPath', component: RedirectComponent },
];
