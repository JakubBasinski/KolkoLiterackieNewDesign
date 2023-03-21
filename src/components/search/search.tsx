import styles from './search.module.scss';
import classNames from 'classnames';
import { useContext, useState } from 'react';
import DisplayContext from '../../store/display-context';

export interface SearchProps {
    className?: string;
}

export const Search = ({ className }: SearchProps) => {
    const displayCtx = useContext(DisplayContext);

    return (
        <div className={classNames(styles.root, className)}>
            <input
                className={styles.searchInput}
                onChange={(e) => {
                    displayCtx.searchForBook(e.target.value);
                }}
                placeholder="Enter title"
            />
            <button className={styles.searchButton}>Search</button>
        </div>
    );
};
