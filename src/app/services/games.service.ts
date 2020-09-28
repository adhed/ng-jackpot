import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '@app/constants';
import { Game, GameCategory } from '@app/models';
import { Observable, of, Subject } from 'rxjs';
import { pipeFromArray } from 'rxjs/internal/util/pipe';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  public selectedCategory: GameCategory = null;
  public categories$: Subject<GameCategory[]> = new Subject();

  private games: Game[];

  constructor(private readonly httpClient: HttpClient) {}

  getGames(): Observable<any> {
    if (this.games) {
      return of(this.games);
    }

    return this.httpClient.get(`${API_URL}/games.php`)
      .pipe(
        tap((games) => this.games = games as Game[]),
        tap((games) => this.categories$.next(this.getCategories(games))),
      );
  }

  private getCategories(games: Game[]): GameCategory[] {
    const categories = [];

    games.forEach((game) => {
      game.categories.forEach((category) => {
        if (!categories.includes(category)) {
          categories.push(category);
        }
      });
    });

    return categories;
  }
}
