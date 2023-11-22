import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistroComponent } from './components/registro/registro.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';
<<<<<<< HEAD
import { DetallePostComponent } from './components/detalle-post/detalle-post.component';
=======
import { PerfilComponent } from './components/perfil/perfil.component';
import { NotificationComponent } from './components/notification/notification.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 3a4f0f906ba48d5368cc4e6609c45380b3b40204

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent,
    IngresarComponent,
    DetallePostComponent
=======
    RegistroComponent,
    IngresarComponent,
    PerfilComponent,
    NotificationComponent,
    HeaderComponent,   
>>>>>>> 3a4f0f906ba48d5368cc4e6609c45380b3b40204
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
