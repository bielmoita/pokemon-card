import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  // pokemonUrl = '';
  // getAllCards(){
  //   return this.http.get<any[]>(`${this.pokemonUrl}`);
  // }

  constructor(private http: HttpClient) { }

  // CRUD
  getAllCards(){
    return this.http.get('https://api.pokemontcg.io/v1/cards?name=charizard').pipe(
      map((resp:any) => resp.cards)
    )
  }

  getCardById(id:string){
    return this.http.get('https://api.pokemontcg.io/v1/cards/'+id).pipe(
      map((resp:any) => resp.card)
    )

  }



}
