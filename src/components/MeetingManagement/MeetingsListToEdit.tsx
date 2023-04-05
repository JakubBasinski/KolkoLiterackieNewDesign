import React from 'react';
import { useContext } from 'react';
import DisplayContext from '../../store/display-context';
import styles from './meetingManagement.module.scss';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import dayjs from 'dayjs';

interface MeetigListProps {
    className?: string;
    resetForm: (meeting: any) => void;
    selectMeetingHandler: (id: number) => void;
}

export const MeetingsListToEdit = ({
    selectMeetingHandler,
    resetForm,
    className,
}: MeetigListProps) => {
    const { fakeMeetingsData } = useContext(DisplayContext);
    const handleRese = (params: any) => {
        resetForm({
            title: params.book,
            cover: params.cover,
            date: dayjs(params.date),
            place: params.place,
            recommender: params.recommender,
            multiSelect: params.literats,
            gallery: params.gallery,
        });
    };

    return (
        <div className={styles.listWrapper}>
            <h2 className={styles.formTitle}>Meeting List</h2>
            <ul className={styles.meetingsList}>
                {fakeMeetingsData.map((m) => (
                    <li className={styles.meetingItem} key={m.id}>
                        <p>{m.book}</p>
                        <EditOutlinedIcon
                            onClick={() => {
                                selectMeetingHandler(m.id);
                                handleRese(m);
                            }}
                            sx={{ marginLeft: 'auto' }}
                        />
                        <DeleteOutlineOutlinedIcon />
                    </li>
                ))}
            </ul>
        </div>
    );
};
