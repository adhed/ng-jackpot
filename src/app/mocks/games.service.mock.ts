import { Game, GameCategory } from '@app/models';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

export class GamesServiceMock {

  public activeCategory$: BehaviorSubject<GameCategory> = new BehaviorSubject(null);
  public categories$: ReplaySubject<GameCategory[]> = new ReplaySubject();
  public visibleGames$: ReplaySubject<Game[]> = new ReplaySubject();

  loadGames(): void {}
  setCategory(): void {}
}
