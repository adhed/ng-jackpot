export interface Game {
  categories: GameCategory[];
  name: string;
  image: string;
  id: string;
}

export enum GameCategory {
  Top = 'top',
  Slots = 'slots',
  New = 'new',
  Poker = 'poker'
}
