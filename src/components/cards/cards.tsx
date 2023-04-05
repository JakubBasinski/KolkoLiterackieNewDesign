import styles from './cards.module.scss';
import classNames from 'classnames';
import { Card } from '../card/Card';
import { Movie } from '../card/Card';
import { useContext } from 'react';
import DisplayContext from '../../store/display-context';
import { useEffect, useState } from 'react';
import Comments from '../../comments/Comments';
import { useRef } from 'react';

export interface CardsProps {
    className?: string;
}

export const fakeMovies: Movie[] = [
    {
        id: 100,
        poster_path: '/images/Antychryst.jpg',
        title: 'Avatar',
        overview: 'that is a nice blalbalbal',
        vote_average: 4.2,
        release_date: '10/11/2001',
    },
];

export const Cards = ({ className }: CardsProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { fakeBooksData, searchQuery } = useContext(DisplayContext);
    const [fakeBooks, setFakeBooks] = useState(fakeBooksData);
    const [selectedBookId, setSelected] = useState<number | null>(1);
    let selectedBook = fakeBooks.filter((books) => {
        return books.id === selectedBookId;
    })[0];

    const handleSetSelected = (id: number) => {
        setSelected(id);
    };

    useEffect(() => {
        setFakeBooks(fakeBooksData);
    }, [fakeBooksData]);

    const scrollToTop = () => {
        if (containerRef.current) {
            containerRef.current.scrollTop = 0;
        }
    };

    return (
        <div className={classNames(styles.root, className)} ref={containerRef}>
            {selectedBookId === null &&
                fakeBooks
                    .filter((a) => a.title.toLowerCase().includes(searchQuery.toLocaleLowerCase()))
                    .map((book, i) => (
                        <Card scrollToTop={scrollToTop} book={book} key={book.id} handleSetSelected={handleSetSelected} />
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
                            <img src={selectedBook.poster_path} alt={selectedBook.title} />
                        </section>
                        <section className={styles.bookDetails}>
                            <div className={styles.subsection}>
                                <p className={styles.text}>Title</p>
                                <h1 className={styles.title}>{selectedBook.title}</h1>
                            </div>
                            <div className={styles.subsection}>
                                <p className={styles.text}>Rating [2 Votes]</p>
                                <h4 className={styles.subTitle}>
                                    {selectedBook.vote_average} / 5{' '}
                                </h4>
                            </div>
                            <div className={styles.subsection}>
                                <p className={styles.text}>Meeting Details</p>
                                <h4 className={styles.subTitle}>
                                    {selectedBook.release_date}, Poznan
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
