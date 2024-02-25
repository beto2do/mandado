"use server";
import { TileImages, TileImagesName } from "@/models";

//get image when the name is dynamic
export async function getImage(imageName: TileImagesName) {
  switch (imageName) {
    case TileImages.GROCERY:
      return await import(`../../public/${TileImages.GROCERY}`);
    case TileImages.SANDWICH:
      return await import(`../../public/${TileImages.SANDWICH}`);
    case TileImages.CHICKEN:
      return await import(`../../public/${TileImages.CHICKEN}`);
    default:
      return await import(`../../public/${TileImages.STRAWBERRY}`);
  }
}
