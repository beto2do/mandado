import { Tile } from '@/models';
import { DashboardTile } from '@/components/common'
import { getDictionary } from '../../../get-dictionary'
import { Locale } from '../../../i18n-config'

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)
  const tiles: Tile[] = dictionary.dashboard.tiles as Tile[];

  const markupTiles = tiles.map((tile: Tile) => {
    return <DashboardTile key={tile.title} tile={tile}></DashboardTile>;
  });
  return (
      <div className="flex gap-4">
        {markupTiles}
      </div>
  )
}
