"use client"
import LoginForm from '@/components/login/login-form';
import Modal from '@/components/common/modal';
import Box from '@mui/material/Box';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function Page() { 
    //TODO implement material modal
    return (
        <Modal>
            <Box sx={style}>
                <LoginForm></LoginForm>
            </Box>
        </Modal>
    );
}