import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

   private API_URL="endpoint.probando"

  constructor(private http: HttpClient ) {}
  public IniciarSesion (Usuario: any ):Observable<any> {

    return this.http.post(this.API_URL, Usuario)
  }
}