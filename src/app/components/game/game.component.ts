import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { JACKPOT_CURRENCY } from '@app/constants';
import { Game } from '@app/models';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent  {
  @Input() public game: Game;
  @Input() public jackpot: number;

  public readonly jackpotCurrency = JACKPOT_CURRENCY;
}
