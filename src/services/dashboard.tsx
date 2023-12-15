import { Tile } from '@/models'

export function getTiles(): Tile[] {
    const tiles: Tile[] = [
        {
          title: 'Shop your Grocery',
          content: 'Track your grocery list when your at the super market.',
          action: 'Go super market',
          imgUrl: '/eggs.jpg',
          actionUrl: '/shop'
        },
        {
          title: 'See meals',
          content: 'Take a look what you want to cook today.',
          action: 'Let\'s cook',
          imgUrl: '/eggs.jpg',
          actionUrl: '/meal'
        },
        {
          title: 'Kitken',
          content: 'Is your kitken empty? double check what you have in your pantry.',
          action: 'Look at your pantry',
          imgUrl: '/eggs.jpg',
          actionUrl: '/pantry'
        },
      ];

    return tiles;
}