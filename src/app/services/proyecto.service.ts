import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyecto } from '../models/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  public proyectos: Proyecto; //atributo de tipo Proyecto

  constructor(private http: HttpClient) {

    this.getProyectos();/*cuando inicia el service llamo al metodo*/

  }

  /*ruta: https://app-portafolio-ang-default-rtdb.firebaseio.com/proyectos*/

  /*-- Metodos --*/

  //obtener todos los proyectos
  getProyectos(){
    return this.http.get('https://app-portafolio-ang-default-rtdb.firebaseio.com/proyectos.json')
      .subscribe((proyectosResp:Proyecto) => {
        this.proyectos = proyectosResp;
        //console.log(this.proyectos); /*muestro en consola*/
      });
  }
}
