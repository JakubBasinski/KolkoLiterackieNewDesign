import React from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import styles from './us.module.scss';

export interface MenuProps {
    className?: string;
}

export const AboutUs = ({ className }: MenuProps) => {
    return (
        <motion.div
            className={classNames(styles.root, className)}
            initial={{ x: -window.innerWidth, opacity: 0, display: 'none' }}
            animate={{ x: 0, opacity: 1, transition: { delay: 1, duration: 1 }, display: 'flex' }}
            exit={{ x: window.innerWidth, opacity: 0, transition: { duration: 1 } }}
        >
            <section className={styles.list}>
                <div>Kuba</div>
                <div>Wojtek</div>
                <div>Daniel</div>
                <div>Maciej</div>
                <div>Stachu</div>
            </section>
        </motion.div>
    );
};
