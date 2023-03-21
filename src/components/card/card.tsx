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

}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-cards-and-templates
 */

export const Card = ({className, book, handleSetSelected }: CardProps) => {
    return (
        <div
            onClick={() => {
                handleSetSelected(book.id);
            }}
            className={classNames(styles.root, className)}
        >
            <img src={book.poster_path} alt={book.title} className={styles.cardImage} />
            <div className={styles.cardDetails}>
                {/* <h1 className={styles.titleText}>{book.title}</h1> */}
                {/* <span className={styles.title}>{book.vote_average}</span> */}
                {/* <p className={styles.cardDescription}>{book.overview.substring(0, 220)}</p> */}
                <button
                    onMouseEnter={(e) => {
                        e.stopPropagation();
                    }}
                    className={styles.cardButton}
                >
                    +
                </button>
            </div>
        </div>
    );
};
