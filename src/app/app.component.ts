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
  title: string;
  games: Game[] = [
    {
      'id': 0,
      'name': 'Baird Garza',
      'price': 1974,
      'posterUrl': 'http://lorempixel.com/300/400/animals/',
      'isWished': false
    },
    {
      'id': 1,
      'name': 'Christa Hess',
      'price': 185,
      'posterUrl': 'http://lorempixel.com/300/400/business/',
      'isWished': false
    },
    {
      'id': 2,
      'name': 'Larson Chase',
      'price': 2830,
      'posterUrl': 'http://lorempixel.com/300/400/business/',
      'isWished': false
    },
    {
      'id': 3,
      'name': 'Sandy Pena',
      'price': 686,
      'posterUrl': 'http://lorempixel.com/300/400/animals/',
      'isWished': false
    },
    {
      'id': 4,
      'name': 'Fanny Merrill',
      'price': 1141,
      'posterUrl': 'http://lorempixel.com/300/400/sports/',
      'isWished': false
    },
    {
      'id': 5,
      'name': 'Lauren Marquez',
      'price': 2677,
      'posterUrl': 'http://lorempixel.com/300/400/fashion/',
      'isWished': true
    },
    {
      'id': 6,
      'name': 'Baker Bernard',
      'price': 2779,
      'posterUrl': 'http://lorempixel.com/300/400/sports/',
      'isWished': true
    },
    {
      'id': 7,
      'name': 'Martinez Decker',
      'price': 1696,
      'posterUrl': 'http://lorempixel.com/300/400/city/',
      'isWished': true
    },
    {
      'id': 8,
      'name': 'Bridgette Keith',
      'price': 2982,
      'posterUrl': 'http://lorempixel.com/300/400/abstract/',
      'isWished': true
    },
    {
      'id': 9,
      'name': 'Molina Macdonald',
      'price': 2314,
      'posterUrl': 'http://lorempixel.com/300/400/nightlife/',
      'isWished': true
    }
  ];

  constructor(private api: ApiService) {
    this.title = this.api.title;
  }

  ngOnInit(): void {
    console.log('loading games... 1 2 3');
  }
}
