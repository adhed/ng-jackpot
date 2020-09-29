import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '@app/constants';
import { Game, GameCategory, GroupedGames } from '@app/models';
import { getCategoriesFromGames, getGamesFromCategory, getGroupedGamesByCategories } from '@app/utils';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  public activeCategory$: BehaviorSubject<GameCategory> = new BehaviorSubject(null);
  public categories$: ReplaySubject<GameCategory[]> = new ReplaySubject();
  public visibleGames$: ReplaySubject<Game[]> = new ReplaySubject();

  private allGames: Game[];
  private groupedGames: GroupedGames = {};

  private get visibleGames(): Game[] {
    return this.activeCategory$.value ? this.filteredGames : this.allGames;
  }

  private get filteredGames(): Game[] {
    return getGamesFromCategory(this.groupedGames, this.allGames, this.activeCategory$.value);
  }

  constructor(private readonly httpClient: HttpClient) {}

  loadGames(): void {
    if (this.allGames) {
      this.visibleGames$.next(this.visibleGames);
      return;
    }

    this.httpClient.get(`${API_URL}/games.php`)
      .pipe(
        tap((games) => this.allGames = games as Game[]),
        tap(() => this.groupGamesByCategories()),
        tap(() => this.visibleGames$.next(this.visibleGames)),
        tap(() => this.categories$.next(getCategoriesFromGames(this.groupedGames))),
      )
      .subscribe();
  }

  setCategory(category: GameCategory): void {
    this.activeCategory$.next(category);
    this.loadGames();
  }

  private groupGamesByCategories(): void {
    this.groupedGames = getGroupedGamesByCategories(this.allGames);
  }
}
