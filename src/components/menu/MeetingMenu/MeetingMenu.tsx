import React, { useContext } from 'react';
import styles from './meetingMenu.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import DisplayContext from '../../../store/display-context';

interface MeetingMenuProps {
    className?: string;
    classes: string | null;
}

const adminOptions = ['Add meeting', 'Edit meeting'];

export const MeetingMenu = ({ className, classes }: MeetingMenuProps) => {
    const {setMeetingModeForm } = useContext(DisplayContext);


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
                            setMeetingModeForm(adminOptions[i].split(' ')[0].toLocaleLowerCase());
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};
