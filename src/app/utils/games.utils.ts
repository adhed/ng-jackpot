import { CATEGORIES_PRIORITIES, OTHER_CATEGORIES } from '@app/constants';
import { Game, GameCategory, GroupedGames } from '@app/models';

export const getCategoriesFromGames = (groupedGames: GroupedGames): GameCategory[] => {
  return (Object.keys(groupedGames) as GameCategory[]).sort(sortCategories);
};

export const getGamesFromCategory = (groupedGames: GroupedGames, allGames: Game[], activeCategory: GameCategory): Game[] => {
  return groupedGames[activeCategory]?.map((gameId: string) => allGames.find((game) => game.id === gameId));
};

export const getGroupedGamesByCategories = (allGames: Game[]): GroupedGames => {
  const groupedGames = {};

  allGames.forEach((game) => {
    game.categories.forEach((cat) => {
      if (OTHER_CATEGORIES.includes(cat)) {
        if (groupedGames[GameCategory.Other]) {
          groupedGames[GameCategory.Other] = [...groupedGames[GameCategory.Other], game.id];
          return;
        }

        groupedGames[GameCategory.Other] = [game.id];
        return;
      }

      if (groupedGames[cat]) {
        groupedGames[cat].push(game.id);
        return;
      }

      groupedGames[cat] = [game.id];
    });
  });

  return groupedGames;
};

export const sortCategories = (catA: GameCategory, catB: GameCategory): number => {
  const priorityA = CATEGORIES_PRIORITIES[catA] || 0;
  const priorityB = CATEGORIES_PRIORITIES[catB] || 0;

  if (priorityA > priorityB) {
    return -1;
  }

  if (priorityB > priorityA) {
    return 1;
  }

  return 0;
};

