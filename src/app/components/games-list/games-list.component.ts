import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Game } from '@app/models';
import { GamesService } from '@app/services/games.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesListComponent implements OnInit {
  public games$: Observable<Game[]>;

  constructor(private readonly gamesService: GamesService) {}

  ngOnInit(): void {
    this.games$ = this.gamesService.getGames();
  }

}
