import styles from './card.module.scss';
import classNames from 'classnames';
import { MeetingInterface } from '../../utils/fakeapi';

export interface CardProps {
    className?: string;
    meeting: MeetingInterface;
    handleSetSelected: (id: number) => void;
    scrollToTop: () => void;
}

export const Card = ({ scrollToTop, className, meeting, handleSetSelected }: CardProps) => {
    return (
        <div
            onClick={() => {
                handleSetSelected(meeting.id);
                scrollToTop();
            }}
            className={classNames(styles.root, className)}
        >
            <img src={meeting.cover} alt={meeting.book} className={styles.cardImage} />
            <div className={styles.cardDetails}>
                <p className={styles.cardTitle}>
         
                    {meeting.book}
                </p>
                <p className={styles.cardAuthor}>

                    {meeting.date}
                </p>
                <p className={styles.cardAuthor}>
                  
                    {meeting.rating}
                </p>
            </div>
        </div>
    );
};
