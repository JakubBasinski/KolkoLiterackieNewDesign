import styles from './card.module.scss';
import classNames from 'classnames';

export interface Movie {
    id: number;
    poster_path: string;
    title: string;
    overview: string;
    vote_average: number;
    release_date: string;
}

export interface CardProps {
    className?: string;
    book: Movie;
    handleSetSelected: (id: number) => void;
    scrollToTop: () => void;
}

export const Card = ({ scrollToTop, className, book, handleSetSelected }: CardProps) => {
    return (
        <div
            onClick={() => {
                handleSetSelected(book.id);
                scrollToTop();
            }}
            className={classNames(styles.root, className)}
        >
            <img src={book.poster_path} alt={book.title} className={styles.cardImage} />
            <div className={styles.cardDetails}></div>
        </div>
    );
};
