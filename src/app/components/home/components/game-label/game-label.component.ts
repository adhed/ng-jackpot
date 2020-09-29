import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-label',
  templateUrl: './game-label.component.html',
  styleUrls: ['./game-label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameLabelComponent {
  @Input() public label: string;
}
