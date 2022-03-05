import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html'
})
export class SiderbarComponent  {

  get historial(){


    return this.GifsService.historial;
  }

  constructor( private GifsService: GifsService){}

  buscar( termino: string){
    this.GifsService.buscarGifs( termino );
  }
}
