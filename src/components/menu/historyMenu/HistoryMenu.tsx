import styles from './historyMenu.module.scss';
import classNames from 'classnames';
import React, { useContext } from 'react';
import { sortHistory } from '../utils';
import DisplayContext from '../../../store/display-context';


export interface MenuProps {
    className?: string;
    classes: string | null;
}

export const HistoryMenu = ({ className, classes }: MenuProps) => {
    const displayCtx = useContext(DisplayContext);
    return (
        <div className={classNames(styles.root, className)}>
            <span className={classes === 'historyClass' ? styles.title : styles.titleOut}>
                Sort By
            </span>
            <ul className={styles.list}>
                {sortHistory.map((item, i) => (
                    <li
                        className={
                            classes === 'historyClass' ? styles.listItem : styles.listItemOut
                        }
                        key={i}
                        onClick={() => {
                            displayCtx.editHistoryData(item);
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
            {/* <span className={classes === 'booksClass' ? styles.title : styles.titleOut}>Genre</span>
            <hr className={classes === 'booksClass' ? styles.sortByLine : styles.sortByLineOut} />
            <ul className={styles.list}>
                {genre.sort().map((item, i) => (
                    <li
                        className={classes === 'booksClass' ? styles.listItem : styles.listItemOut}
                        key={i}
                    >
                        {item}
                    </li>
                ))}
            </ul> */}
        </div>
    );
};
