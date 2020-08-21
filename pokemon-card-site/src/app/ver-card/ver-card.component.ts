import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from '../model/Card';
import { CardsService } from '../service/cards.service';

@Component({
  selector: 'app-ver-card',
  templateUrl: './ver-card.component.html',
  styleUrls: ['./ver-card.component.sass']
})
export class VerCardComponent implements OnInit {

  card:Card;
  
  constructor(private cardsService: CardsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    let id = this.route.snapshot.params['id']
    this.cardsService.getCardById(id).subscribe((resp:Card) =>{
      this.card = resp;
    })

    window.scroll(0, 0)
  }

}
