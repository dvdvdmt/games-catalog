import { Injectable } from '@angular/core';
import { Game } from './game.model';

@Injectable()
export class LocalStorageService {
  STORE_KEY = 'games';

  setData(games: Game[]) {
    localStorage.setItem(this.STORE_KEY, JSON.stringify(games));
  }

  getData() {
    const games = localStorage.getItem(this.STORE_KEY);
    return games && JSON.parse(games);
  }
}
