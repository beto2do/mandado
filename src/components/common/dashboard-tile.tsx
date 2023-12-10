import Tile from '@/models/tile';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function DashboardTile({tile}: {tile:Tile}){
    return(
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={tile.imgUrl}
            alt=""
          />
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
          <Button size="small" color="primary" href={tile.actionUrl}>
            {tile.action}
          </Button>
        </CardActions>
      </Card>
    );
}