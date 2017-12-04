import { Injectable } from '@angular/core';
import { LocalStorageService } from './local.storage.service';

@Injectable()
export class ApiService {

  constructor(private storage: LocalStorageService) {
  }

  fetchGames() {
    const games = this.storage.getData();
    if (games) {
      return Promise.resolve(games);
    }
    return fetch('games.json').then(response => {
      return response.json();
    });
  }
}
