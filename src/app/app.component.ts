import { Component, OnInit } from '@angular/core';

import { ApiService } from './shared';

import '../style/app.css';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string;

  constructor(private api: ApiService) {
    this.title = this.api.title;
  }

  ngOnInit(): void {
    console.log('loading games... 1 2 3');
  }
}
