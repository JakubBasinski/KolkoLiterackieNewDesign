import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import styles from './history.module.scss';
import { HistoryMeeting } from '../meeting/HistoryMeeting';
import { useContext } from 'react';
import DisplayContext from '../../store/display-context';
import { MediaButton } from '../common/MediaButton';

export interface MenuProps {
    className?: string;
}

export const History = ({ className }: MenuProps) => {
    const { fakeMeetingsData } = useContext(DisplayContext);
    const [fakeMeetings, setFakeMeetings] = useState(fakeMeetingsData);

    useEffect(() => {
        setFakeMeetings(fakeMeetingsData);
    }, [fakeMeetingsData]);

    return (
        <motion.div
            className={classNames(styles.root, className)}
            initial={{ x: -window.innerWidth, opacity: 0, display: 'none' }}
            animate={{ x: 0, opacity: 1, transition: { delay: 1, duration: 0.5 }, display: 'flex' }}
            exit={{ x: window.innerWidth, opacity: 0, transition: { duration: 0.5 } }}
        >
            <h1 className={styles.meetingText}>Meeting history</h1>
            <section className={styles.meetingContainer}>
                {fakeMeetings.map((meeting, i) => (
                    <HistoryMeeting key={i} meeting={meeting} />
                ))}
            </section>
            <MediaButton />   
        </motion.div>
    );
};
