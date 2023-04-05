import React from 'react';
import styles from './animated.module.scss';
import classNames from 'classnames';
import { Route, Routes } from 'react-router-dom';
import { Books } from '../book/Books';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { History } from '../history/History';
import { Login } from '../login/Login';
import { MeetingManagement } from '../meetingManagement/MeetingManagement';
import { WelcomePage } from '../welcomePage/WelcomePage';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Gallery } from '../gallery/Gallery';
import { Snackbar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import AuthorizationContext from '../../store/authorization-contex';
import DisplayContext from '../../store/display-context';

export interface AnimatedPros {
    className?: string;
    handleSetMenu: (e: boolean) => void;
    menuMiniDisplay: boolean;
}

export const AnimatedRoutes = ({ className, handleSetMenu, menuMiniDisplay }: AnimatedPros) => {
     const {isLoggedIn}=useContext(AuthorizationContext);
    console.log('isLoggedIn', isLoggedIn);
    const { isWelcomePage, setWelcomePage, snackbarMessage, isSnackBarOpen, setSnackBarOpen } =
        useContext(DisplayContext);

    useEffect(() => {
        setTimeout(() => {
            setWelcomePage(false);
        }, 7000);
    });

    const handleClose = (reason: any) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackBarOpen(false);
    };

    const action = (
        <div>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
                type="button"
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </div>
    );

    const location = useLocation();

    return (
        <div className={classNames(styles.root, className)}>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    {isWelcomePage && <Route path="/" element={<WelcomePage />} />}
                    <Route path="/books/" element={<Books />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/meetings" element={<MeetingManagement />} />
                    <Route path="/gallery" element={<Gallery />} />
                </Routes>
            </AnimatePresence>

            <Snackbar
                open={isSnackBarOpen}
                autoHideDuration={4000}
                onClose={handleClose}
                message={snackbarMessage}
                action={action}
                anchorOrigin={{
                    horizontal: 'center',
                    vertical: 'bottom',
                }}
            />
        </div>
    );
};
