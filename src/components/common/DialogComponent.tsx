import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from '@mui/material';

interface DialogProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    title: string;
    content: string;
    deleteFunction: () => void;
}

const DialogComponent = (props: DialogProps) => {
    return (
        <Dialog
            open={props.open}
            aria-labelledby="dialog-title"
            sx={{
                '& .MuiDialog-paper': {
                    background: 'rgb(38, 29, 27)',
                    color: 'rgb(146, 144, 144)',
                    padding: '10px',
                    borderRadius: '5px',
                    '@media (max-width: 1020px)': {
                        background: '#272727',
                    }
                    
                },
                '& .MuiDialogContentText-root': { color: 'rgb(146, 144, 144)' },
                '& .MuiDialogTitle-root': { color: 'rgb(146, 144, 144)', fontWeight:'600', textAlign:'center'  },
                '& .MuiButtonBase-root': {
                    color: 'rgb(146, 144, 144)',
                    letterSpacing: 0.5,
                    textTransform: 'none',
                    
                },
                '& .MuiButtonBase-root:hover': {
                    color: 'rgb(146, 144, 144)',
                    textShadow: '2px 2px 4px rgb(0,0,0)',
                    transition: 'all 0.3s ease 0s',
                    transform: 'translateY(-1px)',
                    letterSpacing: 0.5,
                    textTransform: 'none',
                },
            }}
        >
            <DialogTitle id="dialog-title">{props.title}</DialogTitle>
            <DialogContent>
                <DialogContentText id="dialog-description">{props.content}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={(e) => {
                        props.setOpen(false);
                        props.deleteFunction();
                    }}
                    autoFocus
                >
                    Confirm
                </Button>
                <Button
                    onClick={() => {
                        props.setOpen(false);
                        return;
                    }}
                    autoFocus
                >
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DialogComponent;
