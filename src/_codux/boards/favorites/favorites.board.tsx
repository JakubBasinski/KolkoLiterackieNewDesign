import { createBoard } from '@wixc3/react-board';
import { Favorites } from '../../../components/favorites/favorites';

export default createBoard({
    name: 'Favorites',
    Board: () => <Favorites />
});
