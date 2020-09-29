import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { JACKPOT_REFRESH_TIME } from '@app/constants';
import { GameCategory } from '@app/models';
import { JackpotValue } from '@app/models/jackpot';
import { JackpotService } from '@app/services';
import { GamesService } from '@app/services/games.service';
import { BehaviorSubject, Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, OnDestroy {
  public categories$: Subject<GameCategory[]> = this.gamesService.categories$;
  public activeCategory$: Subject<GameCategory> = this.gamesService.activeCategory$;
  public jackpots$: BehaviorSubject<JackpotValue[]> = this.jackpotService.jackpots$;

  private readonly destroy$: Subject<void> = new Subject();

  constructor(
    private readonly gamesService: GamesService,
    private readonly jackpotService: JackpotService,
  ) {}

  public ngOnInit(): void {
    this.gamesService.loadGames();

    timer(0, JACKPOT_REFRESH_TIME)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(() => this.jackpotService.updateJackpots());
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
