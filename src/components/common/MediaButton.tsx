import React from 'react';
import { Link } from 'react-router-dom';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import styles from './mediaButton.module.scss';

export const MediaButton = (props: any) => {
    return (
        <Link className={styles.mediaNavButton} to={'/'}>
            <CancelPresentationIcon
                sx={{
                    fontSize: '45px',
                    color: 'grey',
                    '&:hover': {
                        color: 'white',
                    },
                }}
            />
        </Link>
    );
};
