import { HonorValue, Suit } from '../type';
import { getWinDecompositions } from '../win-check';
import { chow, createPlayer, createTile, exposedKong } from './utils';

console.debug(
  getWinDecompositions(
    createPlayer(
      [createTile(Suit.Wan, 5, 1), createTile(Suit.Wan, 5, 4), createTile(Suit.Wan, 6, 5), createTile(Suit.Wan, 7, 2)],
      [
        exposedKong([createTile(Suit.Feng, HonorValue.Bai, 6), createTile(Suit.Feng, HonorValue.Bai, 6)]),
        exposedKong([
          createTile(Suit.Wan, 1, 7),
          createTile(Suit.Wan, 1, 8),
          createTile(Suit.Wan, 1, 9),
          createTile(Suit.Wan, 1, 10),
        ]),
        exposedKong([
          createTile(Suit.Tiao, 2, 11),
          createTile(Suit.Tiao, 2, 12),
          createTile(Suit.Tiao, 2, 13),
          createTile(Suit.Tiao, 2, 14),
        ]),
        chow([createTile(Suit.Tiao, 5, 15), createTile(Suit.Tiao, 6, 16), createTile(Suit.Tiao, 7, 17)]),
        chow([createTile(Suit.Tiao, 6, 18), createTile(Suit.Tiao, 7, 19), createTile(Suit.Tiao, 8, 20)]),
      ],
    ),
    createTile(Suit.Wan, 7, 3),
    createTile(Suit.Wan, 7, 99),
  ),
);
