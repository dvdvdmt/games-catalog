import { Component, OnInit } from '@angular/core';

import { ApiService } from './shared';

import '../style/app.css';
import { Game } from './shared/game.model';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  games: Game[] = [];

  constructor(private api: ApiService) {
    this.api.fetchGames().then((games: Game[]) => {
      this.games = games;
    });
  }

  ngOnInit(): void {
    console.log('loading games... 1 2 3');
  }
}
