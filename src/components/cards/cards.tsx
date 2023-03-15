import styles from './cards.module.scss';
import classNames from 'classnames';
import { Card } from '../card/card';
import { Movie } from '../card/card';
import { fakeBooks } from '../../utils/fakeapi';

export interface CardsProps {
    className?: string;
}

export const fakeMovies: Movie[] = [
    {
        id: 100,
        poster_path: '/images/Antychryst.jpg',
        title: 'Avatar',
        overview: 'that is a nice blalbalbal',
        vote_average: 4.2,
        release_date: '10/11/2001',
    },
];

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-cardss-and-templates
 */
export const Cards = ({ className }: CardsProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            {fakeBooks.map((book) => (
                <Card movie={book} />
            ))}
        </div>
    );
};
