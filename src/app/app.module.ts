import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule, MatMenuModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavMenuComponent, FooterComponent } from './_components';

import { HomeComponent } from './home/home.component';
import { RedesComponent } from './redes/redes.component';
import { MentoresComponent } from './mentores/mentores.component';
import { GruposComponent } from './grupos/grupos.component';
import { RegistrosComponent } from './registros/registros.component';
import { AsistentesComponent } from './asistentes/asistentes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    RedesComponent,
    MentoresComponent,
    GruposComponent,
    RegistrosComponent,
    HomeComponent,
    FooterComponent,
    AsistentesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    NgSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
