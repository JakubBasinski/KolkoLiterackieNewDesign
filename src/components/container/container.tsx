import styles from './container.module.scss';
import classNames from 'classnames';
import { Search } from '../search/search';
import { Cards } from '../cards/cards';
import { motion } from 'framer-motion';
import { Card } from '../card/card';
import { useState } from 'react';

export interface ContainerProps {
    className?: string;
}

export const Container = ({ className }: ContainerProps) => {
    return (
        <motion.div
            className={classNames(styles.root, className)}
            initial={{ x: -window.innerWidth, opacity: 0, display: 'none' }}
            animate={{ x: 0, opacity: 1, transition: { delay: 1, duration: 0.75 }, display: 'flex' }}
            exit={{ x: window.innerWidth, opacity: 0, transition: { duration: 0.75 } }}
        >
            <Search />
            <Cards />
        </motion.div>
    );
};
