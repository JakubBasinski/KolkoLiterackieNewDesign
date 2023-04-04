import styles from './cards.module.scss';
import classNames from 'classnames';
import { Card } from '../card/card';
import { Movie } from '../card/card';
import { useContext } from 'react';
import DisplayContext from '../../store/display-context';
import { useEffect, useState } from 'react';
import Comments from '../../comments/Comments';

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
    const { fakeBooksData, searchQuery } = useContext(DisplayContext);
    const [fakeBooks, setFakeBooks] = useState(fakeBooksData);
    const [selectedBookId, setSelected] = useState<number | null>(null);
    let selectedBook = fakeBooks.filter((books) => {
        return books.id === selectedBookId;
    })[0];

    const handleSetSelected = (id: number) => {
        setSelected(id);
    };

    useEffect(() => {
        setFakeBooks(fakeBooksData);
    }, [fakeBooksData]);

    return (
        <div className={classNames(styles.root, className)}>
            {selectedBookId === null &&
                fakeBooks
                    .filter((a) => a.title.toLowerCase().includes(searchQuery))
                    .map((book, i) => (
                        <Card book={book} key={book.id} handleSetSelected={handleSetSelected} />
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
                                <h4 className={styles.subTitle}>{selectedBook.vote_average} / 5 </h4>
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
                        <section className={styles.bookActions}></section>
                    </div>
                </section>
            )}
            {selectedBook && <Comments currentUserId="1" />}
        </div>
    );
};
