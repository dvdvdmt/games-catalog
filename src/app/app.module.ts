import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ApiService } from './shared';
import { routing } from './app.routing';
import { GameCardComponent } from './game-card/game-card.component';
import { LocalStorageService } from './shared/local.storage.service';

// import { createNewHosts, removeNgStyles } from '@angularclass/hmr';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    GameCardComponent
  ],
  providers: [
    ApiService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
