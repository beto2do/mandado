import LoginForm from '@/components/login/login-form';
import Grid from '@mui/material/Unstable_Grid2';

export default function Page() {
    return (
        <Grid container spacing={2}>
            <Grid xs={12} md={6}>
            </Grid>
            <Grid xs={12} md={6}>
                <LoginForm></LoginForm>
            </Grid>
        </Grid>
    );
}