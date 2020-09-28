import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GameCategory } from '@app/models';
import { GamesService } from '@app/services/games.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  public categories$: Observable<GameCategory[]>;

  constructor(private readonly gamesService: GamesService) {}

  public ngOnInit(): void {
    this.categories$ = this.gamesService.categories$;
  }
}
