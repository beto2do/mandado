import { Tile } from "@/models";
import { DashboardTile } from "@/components/common";

export function Dashboard({ tiles }:{ tiles: Tile[] }) {

    const markupTiles = tiles.map((tile: Tile) => {
        return (
            <DashboardTile key={tile.title} tile={tile}></DashboardTile>
        );
      });

      return (
      <>
        {markupTiles}
        </>         
    )
}