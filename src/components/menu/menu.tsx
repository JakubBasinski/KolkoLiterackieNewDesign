import styles from './menu.module.scss';
import classNames from 'classnames';
import { BooksMenu } from './booksMenu/BooksMenu';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export interface MenuProps {
    className?: string;
}

export const Menu = ({ className }: MenuProps) => {
    const [menuSelected, setSelectedMenu] = useState<string | null>('');
    const [classes, setClasses] = useState<string | null>('');
    const [disabled, setDisabled] = useState(false);

    function handleClick(): void {
        setDisabled(true);
        setTimeout(() => {
            setDisabled(false);
        }, 2000);
    }

    return (
        <div className={classNames(styles.root, className)}>
            <span className={styles.bookText}>Literaci</span>
            <Link
                className={!disabled ? styles.bookLink : styles.bookLinkDisabled}
                to={menuSelected === 'books' ? '/' : '/books'}
                onClick={
                    menuSelected === ''
                        ? () => {
                              setSelectedMenu('books');
                              setClasses('booksClass');
                              handleClick();
                          }
                        : menuSelected === 'books'
                        ? () => {
                              setClasses('');
                              setTimeout(() => {
                                  setSelectedMenu('');
                              }, 2000);

                              handleClick();
                          }
                        : () => {
                              setSelectedMenu('books');
                              setClasses('booksClass');
                              handleClick();
                          }
                }
            >
                Books
            </Link>
            {menuSelected === 'books' && <BooksMenu classes={classes} />}
            <Link
                to={menuSelected === 'us' ? '/' : '/us'}
                onClick={
                    menuSelected === ''
                        ? () => {
                              setSelectedMenu('us');
                              handleClick();
                          }
                        : menuSelected === 'us'
                        ? () => {
                              setTimeout(() => {
                                  setSelectedMenu('');
                              }, 2000);

                              handleClick();
                          }
                        : () => {
                              setClasses('');
                              setTimeout(() => {
                                  setSelectedMenu('us');
                              }, 2000);

                              handleClick();
                          }
                }
                className={!disabled ? styles.bookLink : styles.bookLinkDisabled}
            >
                About Us
            </Link>
        </div>
    );
};
