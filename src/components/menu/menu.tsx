import styles from './menu.module.scss';
import classNames from 'classnames';
import { BooksMenu } from './booksMenu/BooksMenu';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HistoryMenu } from './historyMenu/HistoryMenu';
import { MeetingMenu } from './MeetingMenu/MeetingMenu';
import { useContext } from 'react';
import AuthorizationContext from '../../store/authorization-contex';
import DisplayContext from '../../store/display-context';
export interface MenuProps {
    className?: string;
    handleSetMenu: (e: boolean) => void;
    menuMiniDisplay: boolean;
}

export const Menu = ({ className, menuMiniDisplay, handleSetMenu }: MenuProps) => {
    const [menuSelected, setSelectedMenu] = useState<string | null>('');
    const [classes, setClasses] = useState<string | null>('');
    const [disabled, setDisabled] = useState(false);
    const [openLion, setOpenLion] = useState('');
    const [isHiddenLogo, setHiddenLogo] = useState(true);

    const { isLoggedIn, logout } = useContext(AuthorizationContext);
    const { setSnackBarOpen, setSnackbarMessage } = useContext(DisplayContext);

    function handleClick(): void {
        setDisabled(true);
        setTimeout(() => {
            setDisabled(false);
        }, 2000);
    }

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.logoWrapper}>
                <div className={styles.insideLogoWrapper}>
                    <img
                        onClick={(e) => {
                            e.stopPropagation();
                            setOpenLion('hidden');
                            setTimeout(() => {
                                setHiddenLogo(false);
                            }, 1000);
                        }}
                        src={'/images/icons/lion.png'}
                        className={
                            !openLion
                                ? styles.logo
                                : openLion === 'hidden'
                                ? styles.logoOpen
                                : styles.logoBack
                        }
                        alt="logo"
                    />
                </div>
                <div
                    onClick={() => {
                        setOpenLion('back');
                        setHiddenLogo(true);
                    }}
                    className={!isHiddenLogo ? styles.veryHiddenLogin : styles.hiddenLogin}
                >
                    {isLoggedIn && (
                        <Link
                            to={'/'}
                            className={styles.loginButton}
                            onClick={() => {
                                logout();
                                setSelectedMenu('');
                                setClasses('');
                                setSnackBarOpen(true);
                                setSnackbarMessage('See you soon :) ');
                            }}
                        >
                            LOGOUT
                        </Link>
                    )}

                    {!isLoggedIn && (
                        <Link
                            className={styles.loginButton}
                            to={'/login'}
                            onClick={() => {
                                setSelectedMenu('');
                                setClasses('');
                            }}
                        >
                            LOGIN
                        </Link>
                    )}
                </div>
            </div>

            <div className={styles.linkWrapper}>
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
                                  }, 1000);

                                  handleClick();
                              }
                            : () => {
                                  setTimeout(() => {
                                      setSelectedMenu('books');
                                  }, 1000);
                                  setClasses('booksClass');
                                  handleClick();
                              }
                    }
                >
                    Books
                </Link>
                {menuSelected === 'books' && <BooksMenu classes={classes} />}
                <Link
                    to={menuSelected === 'history' ? '/' : '/history'}
                    onClick={
                        menuSelected === ''
                            ? () => {
                                  setSelectedMenu('history');
                                  setClasses('historyClass');
                                  handleClick();
                              }
                            : menuSelected === 'history'
                            ? () => {
                                  setClasses('');
                                  setTimeout(() => {
                                      setSelectedMenu('');
                                  }, 1000);

                                  handleClick();
                              }
                            : () => {
                                  setClasses('historyClass');
                                  setTimeout(() => {
                                      setSelectedMenu('history');
                                  }, 1000);
                                  handleClick();
                              }
                    }
                    className={!disabled ? styles.bookLink : styles.bookLinkDisabled}
                >
                    History
                </Link>
                {menuSelected === 'history' && <HistoryMenu classes={classes} />}
                <Link
                    to={menuSelected === 'meetings' ? '/' : '/meetings'}
                    onClick={
                        menuSelected === ''
                            ? () => {
                                  setSelectedMenu('meetings');
                                  setClasses('meetingClass');
                                  handleClick();
                              }
                            : menuSelected === 'meetings'
                            ? () => {
                                  setClasses('');
                                  setTimeout(() => {
                                      setSelectedMenu('');
                                  }, 1000);

                                  handleClick();
                              }
                            : () => {
                                  setClasses('meetingClass');
                                  setTimeout(() => {
                                      setSelectedMenu('meetings');
                                  }, 1000);
                                  handleClick();
                              }
                    }
                    className={!disabled ? styles.bookLink : styles.bookLinkDisabled}
                >
                    Meetings
                </Link>
                {menuSelected === 'meetings' && <MeetingMenu classes={classes} />}
                <Link
                    onClick={() => {
                        setSelectedMenu(null);
                        setClasses(null);
                        handleClick();
                    }}
                    to={menuSelected === 'gallery' ? '/' : '/gallery'}
                    className={!disabled ? styles.bookLink : styles.bookLinkDisabled}
                >
                    Gallery
                </Link>
            </div>

            <div className={styles.linkWrapperSmall}>
                <Link
                    className={!disabled ? styles.bookLink : styles.bookLinkDisabled}
                    to={menuSelected === 'books' ? '/' : '/books'}
                >
                    Books
                </Link>
                {menuSelected === 'books' && <BooksMenu classes={classes} />}
                <Link
                    to={menuSelected === 'history' ? '/' : '/history'}
                    className={!disabled ? styles.bookLink : styles.bookLinkDisabled}
                >
                    History
                </Link>
                {menuSelected === 'history' && <HistoryMenu classes={classes} />}
                <Link
                    to={menuSelected === 'meetings' ? '/' : '/meetings'}
                    className={!disabled ? styles.bookLink : styles.bookLinkDisabled}
                >
                    Meetings
                </Link>
                {menuSelected === 'meetings' && <MeetingMenu classes={classes} />}
                <Link
                    to={menuSelected === 'gallery' ? '/' : '/gallery'}
                    className={!disabled ? styles.bookLink : styles.bookLinkDisabled}
                >
                    Gallery
                </Link>
                <Link
                    className={!disabled ? styles.samurajButton : styles.bookLinkDisabled}
                    to={'/login'}
                    onClick={() => {
                        setSelectedMenu('');
                        setClasses('');
                    }}
                >
                    Login
                </Link>
            </div>
        </div>
    );
};
