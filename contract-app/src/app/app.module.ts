import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatExpansionModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatTableModule
} from '@angular/material';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RequestContractComponent} from './contracts/request-contract/request-contract.component';
import {ContractsComponent} from './contracts/contracts/contracts.component';
import {LeadsComponent} from './leads/leads/leads.component';
import {AddLeadComponent} from './leads/add-lead/add-lead.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ContractsComponent,
    RequestContractComponent,
    LeadsComponent,
    AddLeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    FormsModule,
    MatListModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
