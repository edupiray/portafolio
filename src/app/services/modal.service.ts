
import { Injectable } from '@angular/core';
import { Proyecto } from '../models/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  public ventanaModal = false; //atributo bandera
  public proyecto: Proyecto; //atributo de tipo Proyecto

  constructor() { }

  /*Metodos*/

  abrirModal(proyecto: Proyecto){ //abrir modal
    this.proyecto = proyecto;
    this.ventanaModal = true;
    //console.log("Abrir modal");
  }

  cerrarModal(){ //cerrar modal
    this.ventanaModal = false;
  }
}
