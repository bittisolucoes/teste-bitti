import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ClientesComponent } from './clientes/clientes.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { BrMaskerModule } from 'br-mask';
import { DatePipe } from '@angular/common'
import { from } from 'rxjs';
import { ClienteService } from './services/cliente.service';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    BrMaskerModule,
  ],
  providers: [
    HttpClient,
    ClienteService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
