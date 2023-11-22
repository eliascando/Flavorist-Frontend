import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarComponent } from './components/inicioSesion/ingresar/ingresar.component';
import { RegistroComponent } from './components/inicioSesion/registro/registro.component'; 
import { PerfilComponent } from './components/mainScreen/perfil/perfil.component';
import { FeedComponent } from './components/mainScreen/feed/feed.component';


const routes: Routes = [
  { path: '', redirectTo: '/inicioSesion/ingresar', pathMatch: 'full' },
  { path: 'perfil', component: PerfilComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'inicioSesion',
    children: [
      { path: 'ingresar', component: IngresarComponent },
      { path: 'registro', component: RegistroComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }