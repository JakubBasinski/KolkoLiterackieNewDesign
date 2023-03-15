import styles from './search.module.scss';
import classNames from 'classnames';

export interface SearchProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-searchs-and-templates
 */
export const Search = ({ className }: SearchProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <input className={styles.searchInput} />
            <button className={styles.searchButton}>Search</button>
            {/* <a href="/">
                <span> Button </span> <i></i>
            </a> */}
        </div>
    );
};
