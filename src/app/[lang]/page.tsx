import { Tile } from "@/models";
import { Dashboard } from "@/components/common";
import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  const tiles: Tile[] = dictionary.dashboard.tiles as Tile[];

  return <Dashboard tiles={tiles}></Dashboard>;
}
