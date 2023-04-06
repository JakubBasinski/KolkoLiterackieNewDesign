import React from 'react';
import { useContext } from 'react';
import DisplayContext from '../../store/display-context';
import styles from './meetingManagement.module.scss';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import dayjs from 'dayjs';
import DialogComponent from '../common/DialogComponent';
import { useState } from 'react';

interface MeetigListProps {
    className?: string;
    resetForm: (meeting: any) => void;
    selectMeetingHandler: (id: number) => void;
    selectedMeetingId: number | null;
}

export const MeetingsListToEdit = ({
    selectMeetingHandler,
    resetForm,
    className,
    selectedMeetingId,
}: MeetigListProps) => {
    const [isOpen, setOpen] = useState(false);
    const [localMeetingId, setLocalMeetingId] = useState<number | null>(null);
    const { fakeMeetingsData, deleteMeetingData } = useContext(DisplayContext);
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

    const handleDeleteClick = (id: number | null) => {
        setLocalMeetingId(id);
        setOpen(true);
    };

    return (
        <div className={styles.listWrapper}>
            <h2 className={styles.formTitle}>
                {fakeMeetingsData.length === 0 ? 'No meetings :(' : 'Meeting List'}
            </h2>
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
                        <DeleteOutlineOutlinedIcon
                            onClick={() => {
                                handleDeleteClick(m.id);
                            }}
                        />
                    </li>
                ))}
            </ul>

            <DialogComponent
                open={isOpen}
                setOpen={setOpen}
                title={'Delete Meeting'}
                content={
                    'Are you sure you want to delete this meeting and all associated data? This action cannot be undone'
                }
                deleteFunction={() => deleteMeetingData(localMeetingId)}
            />
        </div>
    );
};
