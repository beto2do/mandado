import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

export function SkeletonList() {
    //TODO improve style in this skeleton
    const skeleton = [...Array(4)].map((value, index) => {
        return (
            <Typography component="div" key={index} variant="h2">
                <Skeleton />
            </Typography>
        )
    })
    return (skeleton);
}