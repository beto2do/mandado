import Tile from '@/models/tile';
import DashboardTile from '@/components/common/dashboard-tile'
import { getDictionary } from '../../../get-dictionary'
import { Locale } from '../../../i18n-config'

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)
  const tiles: Tile[] = dictionary.dashboard.tiles;

  const markupTiles = tiles.map((tile: Tile) => {
    return <DashboardTile key={tile.title} tile={tile}></DashboardTile>;
  });
  return (
      <div className="flex gap-4">
        {markupTiles}
      </div>
  )
}
