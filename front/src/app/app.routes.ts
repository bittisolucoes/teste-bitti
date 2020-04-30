import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientInputComponent } from './clients-list/client-input/client-input.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clients', component: ClientsListComponent },
  { path: 'newclient', component: ClientInputComponent },
];
