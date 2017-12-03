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
}
