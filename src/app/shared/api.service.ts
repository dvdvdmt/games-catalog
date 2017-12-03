import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  static fetchGames() {
    return fetch('games.json').then(response => {
      return response.json();
    });
  }
}
