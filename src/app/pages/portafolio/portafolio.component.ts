import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto.model';
import { ModalService } from 'src/app/services/modal.service';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor(public proyectoService: ProyectoService,
              public modalService: ModalService) { }

  ngOnInit(): void {
  }

  abrirModal(proyecto: Proyecto){
    //console.log("evento click");
    this.modalService.abrirModal(proyecto);
  }

}
