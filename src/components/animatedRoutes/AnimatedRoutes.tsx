import React from 'react';
import styles from './animated.module.scss';
import classNames from 'classnames';
import { Route, Routes } from 'react-router-dom';
import { Container } from '../container/container';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { History } from '../history/History';
import { Login } from '../login/Login';
import { MeetingManagement } from '../MeetingManagement/MeetingManagement';
import { WelcomePage } from '../welcomePage/WelcomePage';
import { useEffect } from 'react';
import { useContext } from 'react';
import DisplayContext from '../../store/display-context';
import { Gallery } from '../gallery/Gallery';

export interface AnimatedPros {
    className?: string;
}

export const AnimatedRoutes = ({ className }: AnimatedPros) => {
    const { isWelcomePage, setWelcomePage } = useContext(DisplayContext);

    useEffect(() => {
        setTimeout(() => {
            setWelcomePage(false);
        }, 7000);
    });

    const location = useLocation();
    return (
        <div className={classNames(styles.root, className)}>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    {false && <Route path="/" element={<WelcomePage />} />}
                    <Route path="/books/" element={<Container />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/meetings/:action?/:id?" element={<MeetingManagement />} />
                    <Route path="/gallery/" element={<Gallery />} />
                </Routes>
            </AnimatePresence>

        </div>
    );
};
