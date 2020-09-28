import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GameCategory } from '@app/models';
import { GamesService } from '@app/services/games.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  public categories$: Subject<GameCategory[]> = this.gamesService.categories$;

  constructor(private readonly gamesService: GamesService) {}

  public ngOnInit(): void {
    this.gamesService.loadGames();
  }
}
