import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  // card
  @Input()
  gameCover:string = ""
  // card-label
  @Input()
  gameLabel:string = ""
  //card-pricing
  @Input()
  gameType:string = "XPTO | PS4"
  @Input()
  gamePrice:string = "R$ 399,99"

  constructor() { }

  ngOnInit(): void {
  }

}
