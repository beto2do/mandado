import StoreFront from "@mui/icons-material/Storefront";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { responsiveView } from "@/models";

export function LogoApp({ mobile = false }) {
  const mobileClasses = mobile ? responsiveView.MOBILE : responsiveView.DESKTOP;
  const growClass = mobile ? "grow sm:grow md:grow" : "";
  const typographyClasses = `mr-4 font-mono font-bold tracking-widest text-inherit no-underline ${mobileClasses} ${growClass}`;

  return (
    <>
      <StoreFront className={`mr-2 ${mobileClasses}`} />
      <Typography variant="h6" noWrap className={typographyClasses}>
        <Link href="/">Man-dado</Link>
      </Typography>
    </>
  );
}
