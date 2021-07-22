import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Contacto } from '../models/contacto.model';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private rtdbPath = '/contacto'; /*ruta al nodo de la colección*/
  contactos: AngularFireList<Contacto>; /*lista de contactos*/


  constructor(private rtdb: AngularFireDatabase) {
     this.contactos = rtdb.list(this.rtdbPath);
  }

  /*-- Metodos --*/

  /*obtener todos los contactos*/
  getAll(): AngularFireList<Contacto> {
    return this.contactos;
  }

  /*crear nuevo contacto*/
  create(contacto: Contacto): any {
    return this.contactos.push(contacto);
  }
}
