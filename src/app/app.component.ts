import { Component } from '@angular/core';
import { ProyectoService } from './services/proyecto.service';
import {NgxTypedJsModule} from 'ngx-typed-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolio-app';

  constructor(public proyectoService: ProyectoService){} //hago la inyeccion cuando arranca la aplicacion
}
