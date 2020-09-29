import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Game, GameCategory } from '@app/models';

@Component({
  selector: 'app-game-ribbon',
  templateUrl: './game-ribbon.component.html',
  styleUrls: ['./game-ribbon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameRibbonComponent {
  @Input() public activeCategory: GameCategory;
  @Input() public game: Game;

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
