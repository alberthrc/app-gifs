import { Component } from '@angular/core';
import { Gif } from '../interface/gifs.interface';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html'
})
export class ResultadoComponent{

  get resultados(): Gif[]{
    return this.GifsService.resultado;
  }

  constructor(private GifsService: GifsService) { }



}
