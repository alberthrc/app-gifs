import { SearchGifsResponse } from './../interface/gifs.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {


  private apiKey: string = 'sdHFDagEeg9ig1v9UoOU23aCEULi5hjP';

  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';

  private _historial: string [] = [];


  // cambiar todo por su tipado

  public resultado: Gif [] = [];

  get historial(){

    return [...this._historial];
  }

  constructor(private http: HttpClient){
    this._historial = JSON.parse(localStorage.getItem('Historial')!) || [];
    this.resultado = JSON.parse(localStorage.getItem('Resultados')!) || [];

    // if( localStorage.getItem('Historial')){
    //   this._historial = JSON.parse( localStorage.getItem('Historial')! );
    // }
  }

  buscarGifs( query:string){

    query = query.trim().toLocaleLowerCase();

    if(query.trim().length === 0){ return}


    if(!this._historial.includes( query )){
      this._historial.unshift( query);
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('Historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
          .set('api_key', this.apiKey)
          .set('limit', '9')
          .set('q', query)


    /* LLamado HTTP */
    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, { params })
            .subscribe( (resp: any) => {
              this.resultado = resp.data;
              localStorage.setItem('Resultados', JSON.stringify(this.resultado));
            })

  }
}
