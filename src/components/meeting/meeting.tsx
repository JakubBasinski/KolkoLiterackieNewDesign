import React from 'react';
import styles from './meeting.module.scss';
import { fakeMeetings } from '../../utils/fakeapi';
import { ImageSlider } from './imageslider/ImageSlider';
import { MeetingInterface } from '../../utils/fakeapi';

export interface MeetingProps {
    meeting: {
        id: number;
        gallery: string[];
        book: string;
        date: string;
        literats: string[];
        place: string;
    };
}

export const Meeting = ({ meeting }: MeetingProps) => {
    return (
        <div className={styles.meetingCard}>
            <section className={styles.leftSection}>
                <div className={styles.sliderWrapper}>
                    <ImageSlider slides={meeting.gallery} />
                </div>
            </section>
            <section className={styles.rightSection}>
                <section className={styles.singleCadView}>
                    <div className={styles.subsection}>
                        <p className={styles.text}>Book</p>
                        <h4 className={styles.title}>{meeting.book}</h4>
                    </div>
                    <div className={styles.subsection}>
                        <p className={styles.text}>Place</p>
                        <h1 className={styles.subTitle}>{meeting.place}</h1>
                    </div>
                    <div className={styles.subsection}>
                        <p className={styles.text}>Date</p>
                        {/* <h4 className={styles.subTitle}> {meeting.date} </h4> */}
                    </div>

                    <div className={styles.subsection}>
                        <p className={styles.text}>Literats</p>
                        <div className={styles.literastBox}>
                            {meeting.literats.map((literat, i) => (
                                <h4 key={i} className={styles.subTitle}>
                                    {literat}
                                </h4>
                            ))}
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
};
