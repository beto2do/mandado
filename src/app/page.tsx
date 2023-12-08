import Tile from '../models/tile';
import { getTiles } from '../services/dashboard';
import DashboardTile from '../components/common/dashboard-tile'

export default function Home() {

  const tiles: Tile[] = getTiles();

  const markupTiles = tiles.map((tile: Tile) => {
    return <DashboardTile tile={tile}></DashboardTile>;
  });
  return (
      <div className="flex gap-4">
        {markupTiles}
      </div>
  )
}
