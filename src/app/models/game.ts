export interface Game {
  categories: GameCategory[];
  name: string;
  image: string;
  id: string;
}

export enum GameCategory {
  Ball = 'ball',
  Blackjack = 'blackjack',
  Classic = 'classic',
  Fun = 'fun',
  New = 'new',
  Poker = 'poker',
  Roulette = 'roulette',
  Slots = 'slots',
  Top = 'top',
  Virtual = 'virtual',
  Other = 'other',
}

export interface GroupedGames {
  [key: string]: string[];
}
