import React from 'react';
import styles from './meetingMenu.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

interface MeetingMenuProps {
    className?: string;
    classes: string | null;
}

const adminOptions = ['Add meeting', 'Edit meetings'];

export const MeetingMenu = ({ className, classes }: MeetingMenuProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <ul className={styles.list}>
                {adminOptions.map((item, i) => (
                    <li
                        className={
                            classes === 'meetingClass' ? styles.listItem : styles.listItemOut
                        }
                        key={i}
                        onClick={() => {}}
                    >
                        <Link to={`/meetings/${item.split(' ')[0].toLocaleLowerCase()}`}>
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
