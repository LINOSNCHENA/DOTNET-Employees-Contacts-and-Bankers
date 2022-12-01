import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdmistratorComponent } from './admistrator/admistrator.component';
import { AdminsService } from './services/admins.service';

@NgModule({
  declarations: [
    AppComponent,
    AdmistratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    BrowserModule,
  ],
  providers: [ AdminsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
