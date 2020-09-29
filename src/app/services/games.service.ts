import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '@app/constants';
import { Game, GameCategory } from '@app/models';
import { getCategoriesFromGames, getGamesFromCategory } from '@app/utils';
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
    return getGamesFromCategory(this.games, this.activeCategory$.value);
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
        tap(() => this.categories$.next(getCategoriesFromGames(this.games))),
      )
      .subscribe();
  }

  setCategory(category: GameCategory): void {
    this.activeCategory$.next(category);
    this.loadGames();
  }
}
