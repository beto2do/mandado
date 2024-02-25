import StoreFront from "@mui/icons-material/Storefront";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { mobileDisplay, desktopDisplay } from "@/theme";

export function LogoApp({ mobile = false }) {
  const breakpointStyle = mobile ? mobileDisplay : desktopDisplay;
  const growClass = mobile ? "grow sm:grow md:grow" : "";
  const typographyClasses =
    "mr-4  font-bold tracking-widest text-inherit no-underline";

  return (
    <>
      <StoreFront className={`mr-2`} sx={breakpointStyle} />
      <Typography
        variant="h6"
        noWrap
        sx={breakpointStyle}
        className={growClass}
      >
        <Link className={typographyClasses} href="/">
          Man-dado
        </Link>
      </Typography>
    </>
  );
}
