import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CATEGORIES_SPECIAL_LABELS } from '@app/constants';
import { GameCategory } from '@app/models';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent {
  @Input() public categories: GameCategory[];
  @Input() public activeCategory: GameCategory;

  constructor(private readonly router: Router) {}

  public onCategoryClick(category: GameCategory): void {
    this.router.navigateByUrl(this.getCategoryLink(category), { skipLocationChange: false });
  }

  public getCategoryLink(category: GameCategory): string {
    return `/category/${category}`;
  }

  public isActiveCategory(category: GameCategory): boolean {
    return category === this.activeCategory;
  }

  public getCategoryLabel(category: GameCategory): string {
    return CATEGORIES_SPECIAL_LABELS[category] || category;
  }
}
