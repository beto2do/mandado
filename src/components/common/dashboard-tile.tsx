import { Tile } from "@/models";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { CardActionArea, CardActions } from "@mui/material";
import { getImage } from "@/services";
import Image from "next/image";
import Button from "@mui/material/Button";

export async function DashboardTile({ tile }: { tile: Tile }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Image src={await getImage(tile.imgUrl)} alt="" width={345} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {tile.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {tile.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href={tile.actionUrl}>
          <Button color="primary">{tile.action}</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
