import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '@app/constants';
import { Game, GameCategory } from '@app/models';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  public activeCategory$: BehaviorSubject<GameCategory> = new BehaviorSubject(null);
  public categories$: Subject<GameCategory[]> = new Subject();
  public visibleGames$: Subject<Game[]> = new Subject();

  private games: Game[];

  constructor(private readonly httpClient: HttpClient) {}

  loadGames(): void {
    if (this.games) {
      this.visibleGames$.next(this.getFilteredGames());
    }

    this.httpClient.get(`${API_URL}/games.php`)
      .pipe(
        tap((games) => this.games = games as Game[]),
        tap(() => this.visibleGames$.next(this.getFilteredGames())),
        tap(() => this.categories$.next(this.getCategories(this.games))),
      )
      .subscribe();
  }

  setCategory(category: GameCategory): void {
    this.activeCategory$.next(category);
    this.loadGames();
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

  private getFilteredGames(): Game[] {
    return this.activeCategory$.value ? this.games.filter((game) => game.categories.includes(this.activeCategory$.value)) : this.games;
  }
}
