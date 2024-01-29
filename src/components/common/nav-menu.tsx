import Box from "@mui/material/Box";
import { MenuLink } from "@/models";
import Link from "next/link";
import { desktopDisplay } from "@/theme";

type NavMenuProps = {
  pages: MenuLink[];
  onClick: () => void;
};

export function NavMenu({ pages, onClick }: NavMenuProps) {
  return (
    <Box className="grow" sx={desktopDisplay}>
      {pages.map((page) => (
        <Link
          className="block text-white my-4 px-2 py-1.5"
          key={page.label}
          onClick={onClick}
          href={page.path}
        >
          {page.label}
        </Link>
      ))}
    </Box>
  );
}
