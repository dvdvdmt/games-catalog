import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Game } from '../shared/game.model';
import './game-card.component.scss';

@Component({
  selector: 'my-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
})
export class GameCardComponent implements OnInit {
  @Input() game: Game;
  @Output() onAdd = new EventEmitter<number>();
  @Output() onRemove = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  add(game: Game) {
    this.onAdd.emit(game.id);
  }

  remove(game: Game) {
    this.onRemove.emit(game.id);
  }
}
