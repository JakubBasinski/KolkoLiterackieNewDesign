import styles from './favorite-card.module.scss';
import classNames from 'classnames';


export interface FavoriteCardProps {
    className?: string;
    movie: {
        id: number;
        poster_path: string;
        title: string;
        overview: string;
        vote_average: number;
        release_date: string;
    };
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-favorite-cards-and-templates
 */
export const FavoriteCard = ({ className, movie }: FavoriteCardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img src={movie.poster_path}  className={styles.favCardImage}/>
            <div className={styles.favoritesDetails}>
                <h1 className={styles.favTitle}>{movie.title}</h1>
                <span>{movie.vote_average}</span>
            </div>
            <div className={styles.deleteImage}>
                <img
                    src="https://www.creativefabrica.com/wp-content/uploads/2019/02/Trash-Icon-by-Kanggraphic-580x386.jpg"
                    className={styles.trashIcon}
                />
            </div>
        </div>
    );
};
