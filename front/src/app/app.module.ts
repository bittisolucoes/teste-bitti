import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientInputService } from './Shared/client-input.service';

@NgModule({
  declarations: [AppComponent],
  imports: [HttpClientModule, BrowserModule],
  providers: [ClientInputService],
  bootstrap: [AppComponent],
})
export class AppModule {}
