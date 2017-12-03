import { Component } from '@angular/core';

import { ApiService } from './shared';

import '../style/app.css';
import { Game } from './shared/game.model';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  games: Game[] = [];

  constructor(api: ApiService) {
    api.fetchGames().then((games: Game[]) => {
      this.games = games;
    });
  }

  getWishedGames() {
    return this.games.filter(game => game.isWished);
  }

  removeGame(gameId: number) {
    this.games = this.games.map(game => {
      if (game.id === gameId) {
        game.isWished = false;
      }
      return game;
    });
  }

  getTotalPrice() {
    return this.games.reduce(
      (acc, game) => {
        acc += game.isWished ? game.price : 0;
        return acc;
      }, 0);
  }

  clearWishList() {
    this.games = this.games.map(game => {
      if (game.isWished) {
        game.isWished = false;
      }
      return game;
    });
  }

  addToWishList($gameId: number) {
    this.games = this.games.map(game => {
      if (game.id === $gameId) {
        game.isWished = true;
      }
      return game;
    });
  }

  removeFromWishList($gameId: number) {
    this.games = this.games.map(game => {
      if (game.id === $gameId) {
        game.isWished = false;
      }
      return game;
    });
  }
}
