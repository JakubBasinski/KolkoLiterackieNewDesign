import React from 'react';
import { CSSProperties } from 'react';
import styles from './welcomePage.module.scss';

const welcomeText = 'Enjoy peaceful moments with literature.';

const createStyles = (index: number, word: string): CSSProperties => {
    return {
        animationDelay: `${0.5 * index}s`,
    } as CSSProperties;
};

export const WelcomePage = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.textContainer}>
                {welcomeText.split(' ').map((word, i) => (
                    <div key={i} style={{ position: 'relative' }}>
                        <div className={styles.text}>
                            <p style={createStyles(i, word)}>{word}</p>
                        </div>
                        <div className={styles.text1}>
                            <p>{word}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
