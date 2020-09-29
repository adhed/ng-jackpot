import { ChangeDetectionStrategy, Component, HostListener, Input } from '@angular/core';
import { JACKPOT_CURRENCY } from '@app/constants';
import { Game, GameCategory } from '@app/models';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent  {
  @Input() public activeCategory: GameCategory;
  @Input() public game: Game;
  @Input() public jackpot: number;

  public readonly jackpotCurrency = JACKPOT_CURRENCY;

  public get shouldAddNewRibbon(): boolean {
    return this.shouldShowRibbon(GameCategory.New);
  }

  public get shouldAddTopRibbon(): boolean {
    return this.shouldShowRibbon(GameCategory.Top);
  }

  private shouldShowRibbon(categoryType: GameCategory): boolean {
    return (!this.activeCategory || this.activeCategory !== categoryType) && this.game.categories.includes(categoryType);
  }
}
