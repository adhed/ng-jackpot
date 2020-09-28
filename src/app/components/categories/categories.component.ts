import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GameCategory } from '@app/models';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent {
  @Input() public categories: GameCategory[];
}
