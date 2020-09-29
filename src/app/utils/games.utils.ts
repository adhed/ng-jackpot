import { OTHER_CATEGORIES } from '@app/constants';
import { Game, GameCategory, GroupedGames } from '@app/models';

export const getCategoriesFromGames = (groupedGames: GroupedGames): GameCategory[] => {
  return Object.keys(groupedGames) as GameCategory[];
};

export const getCategoryName = (category: GameCategory): GameCategory => {
  return OTHER_CATEGORIES.includes(category) ? GameCategory.Other : category;
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
