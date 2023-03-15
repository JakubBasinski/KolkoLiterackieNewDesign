import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';

export default createBoard({
    name: 'Card',
    Board: () => (
        <Card
            movie={{
                id: 12,
                overview: 'description',
                release_date: '10/11/2022',
                title: 'Smieci',
                vote_average: 3.4,
                poster_path:
                    '',
            }}
        />
    ),
    environmentProps: {
        canvasWidth: 256,
    },
});
