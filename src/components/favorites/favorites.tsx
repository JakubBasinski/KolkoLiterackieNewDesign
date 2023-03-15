import styles from './favorites.module.scss';
import classNames from 'classnames';

export interface FavoritesProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-favoritess-and-templates
 */
export const Favorites = ({ className }: FavoritesProps) => {
    return <div className={classNames(styles.root, className)}>Favorites</div>;
};
