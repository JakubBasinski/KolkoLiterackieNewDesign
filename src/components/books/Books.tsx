import styles from './books.module.scss';
import classNames from 'classnames';
import { Search } from '../search/Search';
import { Cards } from '../cards/Cards';
import { motion } from 'framer-motion';
import { MediaButton } from '../common/MediaButton';

export interface BooksProps {
    className?: string;
}

export const Books = ({ className }: BooksProps) => {
    return (
        <motion.div
            className={classNames(styles.root, className)}
            initial={{ x: -window.innerWidth, opacity: 0, display: 'none' }}
            animate={{
                x: 0,
                opacity: 1,
                transition: { delay: 1, duration: 0.75 },
                display: 'flex',
            }}
            exit={{ x: window.innerWidth, opacity: 0, transition: { duration: 0.75 } }}
        >
            <Search />
            <Cards />
            <MediaButton />
        </motion.div>
    );
};
