import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './clients/clients.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clients', component: ClientsComponent },
];
