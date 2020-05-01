import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { ClientComponent } from './clients/client/client.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'listclients', component: ClientListComponent },
  { path: 'client', component: ClientComponent },
];
