export interface Tile {
    title: string,
    content: string,
    action: string,
    imgUrl: string,
    actionUrl: string
}

export enum TileImages {
    GROCERY = 'grocery.jpg',
    SANDWICH = 'sandwich.jpg',
    CHICKEN = 'chicken.jpg',
    STRAWBERRY = 'strawberry.jpg',
}