import { 
    TextField, 
    Button, 
    Divider,
    FormControl
} from '@mui/material'
export default function LoginForm() {

    return (
        <>
        <FormControl fullWidth>
            <TextField
                fullWidth
                required
                className='mb-3'
                label="Email"
            />
            <TextField
                fullWidth
                required
                className='mb-3'
                label="Password"
                type="password"
            />
            <Button 
                fullWidth 
                className='pointer-events-auto bg-red-500 text-white hover:bg-red-400 hover:border-0 border-0 h-14 mb-3'
                variant="contained">
                Log In
            </Button>
        </FormControl>
        <Button 
            fullWidth 
            className='pointer-events-auto text-blue-500 mb-3'
            variant="text">
            Forgot password
        </Button>
        <Divider className='mb-5'/>
        <Button 
            fullWidth 
            className='pointer-events-auto bg-green-500 text-white hover:bg-green-400 hover:border-0 border-0 h-14'
            variant="contained">
            Create new account
        </Button>
        </>
    );
}