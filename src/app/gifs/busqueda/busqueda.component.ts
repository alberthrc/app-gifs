import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent {

  @ViewChild('txtbuscar') txtbuscar!:ElementRef <HTMLInputElement>;


  constructor(private GisfService: GifsService ) {}

  buscar( ){
    const valor = this.txtbuscar.nativeElement.value;

    this.GisfService.buscarGifs(valor);

    this.txtbuscar.nativeElement.value = '';
  }



}
