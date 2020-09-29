import { Game, GameCategory } from '@app/models';
import { getCategoriesFromGames, getGamesFromCategory, getGroupedGamesByCategories } from './games.utils';

describe('Games utils', () => {
  it('should retrieve categories from games', () => {
    const games = {
      [GameCategory.Other]: ['222', '333', '1'],
      [GameCategory.Slots]: ['222', '333', '1'],
    };
    const result = getCategoriesFromGames(games);

    expect(result[0]).toBe(GameCategory.Other);
    expect(result[1]).toBe(GameCategory.Slots);
  });

  it('should find games from given category', () => {
    const gameName1 = '1';
    const gameName2 = '2';
    const gameId1 = 'id1';
    const gameId2 = 'id2';
    const allGames: Game[] = [
      { id: gameId1, name: gameName1, categories: [GameCategory.Classic, GameCategory.Slots], image: '' },
      { id: gameId2, name: gameName2, categories: [GameCategory.Classic, GameCategory.New], image: '' },
      { id: 'game3', name: '3', categories: [GameCategory.New], image: '' }


    ];
    const groupedGames = {
      [GameCategory.Classic]: [gameId1, gameId2],
    };
    const activeCategory = GameCategory.Classic;

    const result = getGamesFromCategory(groupedGames, allGames, activeCategory);

    expect(result.length).toBe(2);
    expect(result[0].name).toBe(gameName1);
    expect(result[1].name).toBe(gameName2);
  });

  it('should group games by categories', () => {
    const gameName1 = '1';
    const gameName2 = '2';
    const gameId1 = 'id1';
    const gameId2 = 'id2';
    const allGames: Game[] = [
      { id: gameId1, name: gameName1, categories: [GameCategory.Classic, GameCategory.Slots], image: '' },
      { id: gameId2, name: gameName2, categories: [GameCategory.Classic, GameCategory.New], image: '' },
      { id: 'game3', name: '3', categories: [GameCategory.New], image: '' }


    ];

    const result = getGroupedGamesByCategories(allGames);
    const classicsGamesIds = result[GameCategory.Classic];

    expect(classicsGamesIds.length).toBe(2);
    expect(classicsGamesIds[0]).toBe(gameId1);
    expect(classicsGamesIds[1]).toBe(gameId2);
  });

  it('should group games from special categories to "Other"', () => {
    const gameName1 = '1';
    const gameName2 = '2';
    const gameId1 = 'id1';
    const gameId2 = 'id2';
    const allGames: Game[] = [
      { id: gameId1, name: gameName1, categories: [GameCategory.Virtual, GameCategory.Slots], image: '' },
      { id: gameId2, name: gameName2, categories: [GameCategory.Ball, GameCategory.New], image: '' },
      { id: 'game3', name: '3', categories: [GameCategory.New], image: '' }


    ];

    const result = getGroupedGamesByCategories(allGames);
    const classicsGamesIds = result[GameCategory.Other];

    expect(classicsGamesIds.length).toBe(2);
    expect(classicsGamesIds[0]).toBe(gameId1);
    expect(classicsGamesIds[1]).toBe(gameId2);
  });
});
