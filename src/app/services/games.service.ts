import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL, OTHER_CATEGORIES } from '@app/constants';
import { Game, GameCategory } from '@app/models';
import { BehaviorSubject, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  public activeCategory$: BehaviorSubject<GameCategory> = new BehaviorSubject(null);
  public categories$: Subject<GameCategory[]> = new Subject();
  public visibleGames$: Subject<Game[]> = new Subject();

  private games: Game[];

  private get gamesList(): Game[] {
    return this.activeCategory$.value ? this.filteredGames : this.games;
  }

  private get filteredGames(): Game[] {
    return this.games.filter((game) => {
      if (this.activeCategory$.value === GameCategory.Other) {
        return game.categories.some((gameCategory) => OTHER_CATEGORIES.includes(gameCategory));
      }

      return game.categories.includes(this.activeCategory$.value);
    });
  }

  constructor(private readonly httpClient: HttpClient) {}

  loadGames(): void {
    if (this.games) {
      this.visibleGames$.next(this.gamesList);
    }

    this.httpClient.get(`${API_URL}/games.php`)
      .pipe(
        tap((games) => this.games = games as Game[]),
        tap(() => this.visibleGames$.next(this.gamesList)),
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
        if (!categories.includes(category) && !categories.includes(GameCategory.Other)) {
          categories.push(this.getCategoryName(category));
        }
      });
    });

    return categories;
  }

  private getCategoryName(category: GameCategory): GameCategory {
    return OTHER_CATEGORIES.includes(category) ? GameCategory.Other : category;
  }
}
