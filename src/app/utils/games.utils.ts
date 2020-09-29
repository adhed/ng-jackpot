import { OTHER_CATEGORIES } from '@app/constants';
import { Game, GameCategory } from '@app/models';

export const getCategoriesFromGames = (games: Game[]): GameCategory[] => {
  const categories = [];

  games.forEach((game) => {
    game.categories.forEach((category) => {
      if (!categories.includes(category) && !categories.includes(GameCategory.Other)) {
        categories.push(getCategoryName(category));
      }
    });
  });

  return categories;
};

export const getCategoryName = (category: GameCategory): GameCategory => {
  return OTHER_CATEGORIES.includes(category) ? GameCategory.Other : category;
};

export const getGamesFromCategory = (games: Game[], activeCategory: GameCategory): Game[] => {
  return games.filter((game) => {
    if (activeCategory === GameCategory.Other) {
      return game.categories.some((gameCategory) => OTHER_CATEGORIES.includes(gameCategory));
    }

    return game.categories.includes(activeCategory);
  });
};
