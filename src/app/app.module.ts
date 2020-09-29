import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { GameComponent } from './components/game/game.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { GameLabelComponent } from './components/game-label/game-label.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GamesListComponent,
    GameComponent,
    CategoriesComponent,
    GameLabelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
