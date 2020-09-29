import { GameCategory } from '@app/models';
import { getCategoriesFromGames } from './games.utils';

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

});
