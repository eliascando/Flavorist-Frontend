import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/register/register.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { DetallePostComponent } from './components/detalle-post/detalle-post.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IngresarComponent,
    DetallePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
