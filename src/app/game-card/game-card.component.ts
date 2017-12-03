import { Component, Input, OnInit } from '@angular/core';

import { Game } from '../shared/game.model';
import './game-card.component.scss';

@Component({
  selector: 'my-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
})
export class GameCardComponent implements OnInit {
  @Input() game: Game;

  constructor() {
  }

  ngOnInit(): void {
  }
}
