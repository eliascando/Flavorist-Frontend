import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Flavorist-Frontend';
  public ingresarMenu: boolean = false;

  constructor() {
    this.ingresarMenu = false;
  }

  public mostrarIngreso(): void {
    this.ingresarMenu = true;
  }

}
