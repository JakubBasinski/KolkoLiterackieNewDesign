import styles from './menu.module.scss';
import classNames from 'classnames';

export interface MenuProps {
    className?: string;
}

const sortBy: string[] = ['Popularity', 'Most Voted', 'Released Date'];
const genre: string[] = ['Comedy', 'Horror', 'Action']
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-menus-and-templates
 */
export const Menu = ({ className }: MenuProps) => {
    return (
        <div className={classNames(styles.root, className, styles.logoSection)}>
            <span className={styles.bookText}>Books</span>
            <span className={styles.title}>Sort By</span>
            <hr className={styles.sortByLine} />
            <ul className={styles.list}>
                {sortBy.map((item, i) => (
                    <li className={styles.listItem} key={i}>
                        {item}
                    </li>
                ))}
            </ul>
            <span className={styles.title}>Genre</span>
            <hr className={styles.sortByLine} />
            <ul className={styles.list}>
                {genre.sort().map((item, i) => (
                    <li className={styles.listItem} key={i}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};
