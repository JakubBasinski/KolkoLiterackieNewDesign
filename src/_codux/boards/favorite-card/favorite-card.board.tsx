import { createBoard } from '@wixc3/react-board';
import { FavoriteCard } from '../../../components/favorite-card/favorite-card';

export interface FavoriteCardProps {
    className?: string;
    movie: {};
    id: number;
    poster_path: string;
    title: string;
    overview: string;
    vote_average: number;
    release_date: string;
}

export default createBoard({
    name: 'FavoriteCard',
    Board: () => (
        <FavoriteCard
            movie={{
                id: 0,
                overview: 'Whatever',
                release_date: '20/20/2220',
                title: 'Avatar',
                vote_average: 2,
                poster_path:
                    'https://tse1.mm.bing.net/th?id=OIP.7zHY0kwvS1sAWPfs3IPAsgHaFj&pid=Api&P=0',
            }}
        />
    ),
});
