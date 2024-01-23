export interface Tile {
  title: string;
  content: string;
  action: string;
  imgUrl: TileImagesName;
  actionUrl: string;
}

export enum TileImages {
  GROCERY = "grocery.jpg",
  SANDWICH = "sandwich.jpg",
  CHICKEN = "chicken.jpg",
  STRAWBERRY = "strawberry.jpg",
}

export type TileImagesName =
  | TileImages.CHICKEN
  | TileImages.GROCERY
  | TileImages.SANDWICH
  | TileImages.STRAWBERRY;
