import styles from './search.module.scss';
import classNames from 'classnames';
import { useState } from 'react';


export interface SearchProps {
    className?: string;
}

export const Search = ({ className }: SearchProps) => {
    const [query, setQuery] = useState('');
    return (
        <div className={classNames(styles.root, className)}>
            <input
                className={styles.searchInput}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter title"
            />
            <button className={styles.searchButton}>Search</button>
        </div>
    );
};
