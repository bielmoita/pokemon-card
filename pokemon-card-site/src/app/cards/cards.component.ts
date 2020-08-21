import { Component, OnInit } from '@angular/core';
import { CardsService } from '../service/cards.service';
import { Card } from '../model/Card';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {
  cards:any;
  listaCards: Card[];

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
     this.findAllCards()
  }

  findAllCards(){
    this.cardsService.getAllCards().subscribe(
      (resp: Card[])=>{
        
        this.listaCards = resp

        console.log(resp)
      });
    }

}

