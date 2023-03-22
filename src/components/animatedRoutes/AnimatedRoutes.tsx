import React from 'react';
import styles from './animated.module.scss';
import classNames from 'classnames';
import { Route, Routes } from 'react-router-dom';
import { Container } from '../container/container';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Comments from '../comments/Comments';
import { History } from '../history/History';
import { Login } from '../login/Login';
import { MeetingManagement } from '../MeetingManagement/MeetingManagement';
export interface AnimatedPros {
    className?: string;
}

export const AnimatedRoutes = ({ className }: AnimatedPros) => {
    const location = useLocation();
    return (
        <div className={classNames(styles.root, className)}>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path="/books/" element={<Container />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/meetings" element={<MeetingManagement />} />
                </Routes>
            </AnimatePresence>
        </div>
    );
};
