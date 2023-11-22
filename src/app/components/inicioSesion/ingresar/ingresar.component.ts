import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})

export class IngresarComponent {

    public form: any;
    // public servicio: AuthService;
    public sesion: any = {
      email : 'pepito@correo-com',
      password : '123456'
    }
  
    public iniciarSesion(): void {
      const email = this.form.get('email').value;
      const password = this.form.get('password').value;
      
      this.sesion.email = email;
      this.sesion.password = password;
      console.log(this.sesion);

      console.log(this.router)

      this.router.navigateByUrl('/perfil');

      // this.servicio.IniciarSesion(this.sesion).subscribe(
      //   (response: any) => {
      //     console.log(response);
      //   },
      //   (error: any) => {
      //     console.log(error);
      //   }
      // )
    }

    constructor(private fb: FormBuilder, private servicio: AuthService, private router: Router) {
      this.form = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      })
    }


}
