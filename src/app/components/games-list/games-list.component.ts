import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Game } from '@app/models';
import { GamesService } from '@app/services/games.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesListComponent {
  public games$: Subject<Game[]> = this.gamesService.visibleGames$;

  constructor(private readonly gamesService: GamesService) {}
}
