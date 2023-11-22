import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { RegistroComponent } from './components/registro/registro.component'; 


const routes: Routes = [
  { path: 'inicio-sesion', component: IngresarComponent },
  { path: 'registro', component: RegistroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }