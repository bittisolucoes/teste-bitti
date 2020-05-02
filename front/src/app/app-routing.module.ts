import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { ClientsDetailsComponent } from './clients-details/clients-details.component';
import { AddClientsComponent } from './add-clients/add-clients.component';
import { EditClientsComponent } from './edit-clients/edit-clients.component';

const routes: Routes = [
  {
    path: 'clients',
    component: ClientsComponent,
    data: { title: 'Lista de clientes' },
  },
  {
    path: 'clients-details/:id',
    component: ClientsDetailsComponent,
    data: { title: ' Detalhes dos clientes ' },
  },
  {
    path: 'add-clients',
    component: AddClientsComponent,
    data: { title: ' Novo cliente ' },
  },
  {
    path: 'edit-clients/:id',
    component: EditClientsComponent,
    data: { title: 'Editar Clientes' },
  },
  {
    path: '',
    redirectTo: '/clients',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
