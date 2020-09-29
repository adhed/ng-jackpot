import { CategoryLabel, CategoryPriority, GameCategory } from '@app/models';

export const OTHER_CATEGORIES = [GameCategory.Fun, GameCategory.Ball, GameCategory.Virtual];

export const CATEGORIES_PRIORITIES: CategoryPriority = {
  [GameCategory.Top]: 3,
  [GameCategory.New]: 2,
  [GameCategory.Slots]: 1,
};

export const CATEGORIES_SPECIAL_LABELS: CategoryLabel = {
  [GameCategory.Top]: 'Top Games',
  [GameCategory.New]: 'New Games',
};
