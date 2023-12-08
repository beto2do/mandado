import Tile from '../models/tile'

export function getTiles(): Tile[] {
    const tiles: Tile[] = [
        {
          name: 'Shop Grocery',
          url: '/shop'
        },
        {
          name: 'See meals',
          url: '/meal'
        },
        {
          name: 'Look at your pantry',
          url: '/pantry'
        },
      ];

    return tiles;
}