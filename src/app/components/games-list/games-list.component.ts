import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Game } from '@app/models';
import { JackpotValue } from '@app/models/jackpot';
import { GamesService } from '@app/services/games.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesListComponent {
  @Input() public jackpots: JackpotValue[] = [];

  public readonly games$: Subject<Game[]> = this.gamesService.visibleGames$;

  constructor(private readonly gamesService: GamesService) {}

  public getGameJackpot(game: Game): number {
    return this.jackpots.find((jackpot) => jackpot.game === game.id)?.amount || 0;
  }
}
