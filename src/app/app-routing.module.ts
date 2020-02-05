import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RedesComponent } from './redes/redes.component';
import { MentoresComponent } from './mentores/mentores.component';
import { GruposComponent } from './grupos/grupos.component';
import { RegistrosComponent } from './registros/registros.component';
import { AsistentesComponent } from './asistentes/asistentes.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'redes', component: RedesComponent, pathMatch: 'full' },
  { path: 'mentores', component: MentoresComponent, pathMatch: 'full' },
  { path: 'grupos', component: GruposComponent, pathMatch: 'full' },
  { path: 'registros', component: RegistrosComponent, pathMatch: 'full' },
  { path: 'asistentes', component: AsistentesComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
