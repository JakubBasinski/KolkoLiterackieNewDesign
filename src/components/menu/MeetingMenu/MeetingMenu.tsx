import React from 'react';
import styles from './meetingMenu.module.scss';
import classNames from 'classnames';

interface MeetingMenuProps {
    className?: string;
    classes: string | null;
}

const adminOptions = [ 'Add meeting', 'Edit meeting' ]

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
                        onClick={() => {
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
    
        </div>
    );
};
