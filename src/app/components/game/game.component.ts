import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Game } from '@app/models';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent  {
  @Input() public game: Game;
}
