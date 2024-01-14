import { ReactElement, JSXElementConstructor } from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};

type CustomModalProps = {
    open: boolean, 
    onClose: ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void) | undefined, 
    children: ReactElement<any, string | JSXElementConstructor<any>> 
}

export function CustomModal({open, onClose, children}: CustomModalProps) {
    return (
        <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box 
            className="overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            sx={{ ...style, width: 500 }}>
                {children}
            </Box>
        </Modal>
    )
}