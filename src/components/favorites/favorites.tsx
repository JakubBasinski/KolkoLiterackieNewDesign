import styles from './favorites.module.scss';
import classNames from 'classnames';
import { FavoriteCard } from '../favorite-card/favorite-card';
import { fakeMovies } from '../cards/cards';

export interface FavoritesProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-favoritess-and-templates
 */
export const Favorites = ({ className }: FavoritesProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <span className={styles.favortieText}>Favorites</span>
            {fakeMovies.map((movie) => (
                <FavoriteCard movie={movie} />
            ))}
        </div>
    );
};
