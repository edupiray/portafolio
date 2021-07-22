import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/models/contacto.model';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-form-contacto',
  templateUrl: './form-contacto.component.html',
  styleUrls: ['./form-contacto.component.css']
})
export class FormContactoComponent implements OnInit {

  contacto: Contacto = new Contacto();//objeto de tipo Contacto
  enviado = false; //bandera para ngIf del formulario de la vista form-contacto.component.html

  constructor(private contactoService: ContactoService) { }

  ngOnInit(): void {
  }

  /*-- metodos --*/

  /*guardar contacto en Firebase al enviar formulario*/
  guardarContacto(): void{
    this.contactoService.create(this.contacto).then(() => {
      console.log('Contacto creado con éxito');
      this.enviado = true;
    });
  }

  /*nuevo contacto por si ya se envio uno y se desea enviar otro*/
  newContacto(): void {
    this.enviado = false;
    this.contacto = new Contacto();
  }

}
