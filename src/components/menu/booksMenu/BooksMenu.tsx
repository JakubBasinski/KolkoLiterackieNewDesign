import styles from './booksMenu.module.scss';
import classNames from 'classnames';
import React, { useContext } from 'react';
import { sortBy } from '../utils';
import DisplayContext from '../../../store/display-context';

export interface MenuProps {
    className?: string;
    classes: string | null;
}

export const BooksMenu = (({ className, classes }: MenuProps) => {
    const displayCtx = useContext(DisplayContext);
    return (
        <div className={classNames(styles.root, className)}>
            <span className={classes === 'booksClass' ? styles.title : styles.titleOut}>
                Sort By
            </span>
            <ul className={styles.list}>
                {sortBy.map((item, i) => (
                    <li
                        className={classes === 'booksClass' ? styles.listItem : styles.listItemOut}
                        key={i}
                        onClick={() => {
                            displayCtx.editBooksData(item);
                    
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
});
