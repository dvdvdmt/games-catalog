import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  fetchGames() {
    return fetch('games.json').then(response => {
      return response.json();
    });
  }
}
