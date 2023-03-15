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
    movie: Movie;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-cards-and-templates
 */

export const Card = ({ className, movie }: CardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img src={movie.poster_path} className={styles.cardImage} />
            <div className={styles.cardDetails}>
                <h1>{movie.title}</h1>
                <span className={styles.title}>{movie.vote_average}</span>
                <p className={styles.cardDescription}>{movie.overview.substring(0,220)}</p>
                <button className={styles.cardButton}>+</button>
            </div>
        </div>
    );
};
