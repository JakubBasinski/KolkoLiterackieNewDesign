import styles from './cards.module.scss';
import classNames from 'classnames';
import { Card } from '../card/Card';
import { useContext } from 'react';
import DisplayContext from '../../store/display-context';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import Comments from '../../comments/Comments';

export interface CardsProps {
    className?: string;
}

export const Cards = ({ className }: CardsProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { fakeMeetingsData, searchQuery,  } = useContext(DisplayContext);
    const [fakeMeetings, setFakeBooks] = useState(fakeMeetingsData);
    const [selectedBookId, setSelected] = useState<number | null>(null);
    console.log(searchQuery, 'sq');

    let selectedBook = fakeMeetings.filter((meeting) => {
        return meeting.id === selectedBookId;
    })[0];

    const handleSetSelected = (id: number) => {
        setSelected(id);
    };

    useEffect(() => {
        setFakeBooks(fakeMeetingsData);
    }, [fakeMeetingsData]);

    const scrollToTop = () => {
        if (containerRef.current) {
            containerRef.current.scrollTop = 0;
        }
    };

    return (
        <div className={classNames(styles.root, className)} ref={containerRef}>
            {selectedBookId === null &&
                fakeMeetings
                    .filter((a) => a.book.toLowerCase().includes(searchQuery.toLocaleLowerCase()))
                    .map((meeting, i) => (
                        <Card scrollToTop={scrollToTop} meeting={meeting} key={meeting.id} handleSetSelected={handleSetSelected} />
                    ))}

            {selectedBook && (
                <section className={styles.singleCardView}>
                    <div className={styles.xContainer}>
                        <span
                            onClick={() => {
                                setSelected(null);
                            }}
                            className={styles.x}
                        >
                            +
                        </span>
                    </div>

                    <div className={styles.singleCardContainer}>
                        <section className={styles.bookImage}>
                            <img src={selectedBook.cover} alt={selectedBook.book} />
                        </section>
                        <section className={styles.bookDetails}>
                            <div className={styles.subsection}>
                                <p className={styles.text}>Title</p>
                                <h1 className={styles.title}>{selectedBook.book}</h1>
                            </div>
                            <div className={styles.subsection}>
                                <p className={styles.text}>Rating [2 Votes]</p>
                                <h4 className={styles.subTitle}>
                                    {selectedBook.rating} / 5{' '}
                                </h4>
                            </div>
                            <div className={styles.subsection}>
                                <p className={styles.text}>Meeting Details</p>
                                <h4 className={styles.subTitle}>
                                    {selectedBook.date}, Poznan
                                </h4>
                            </div>
                            <div className={styles.subsection}>
                                <p className={styles.text}>Literats</p>
                                <h4 className={styles.subTitle}>Wojtek, Kuba, Daniel, Wambli</h4>
                            </div>
                            <div className={styles.subsection}>
                                <p className={styles.text}>Recommender</p>
                                <h4 className={styles.subTitle}>Wojtek </h4>
                            </div>
                        </section>
                    </div>
                </section>
            )}
            {selectedBook && <Comments currentUserId="1" />}
        </div>
    );
};
