import { Tile } from "@/models";
import { DashboardTile } from "@/components/common";
import Grid from "@mui/material/Grid";

export function Dashboard({ tiles }: { tiles: Tile[] }) {
  const markupTiles = tiles.map((tile: Tile, index) => (
    <Grid item xs={12} md={6} lg={4} key={index}>
      <DashboardTile key={tile.title} tile={tile}></DashboardTile>
    </Grid>
  ));

  //TODO fix warning in the console.
  return (
    <Grid container spacing={2}>
      {markupTiles}
    </Grid>
  );
}
