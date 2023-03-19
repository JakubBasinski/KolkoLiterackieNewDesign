export interface Book {
    id: number;
    poster_path: string;
    title: string;
    overview: string;
    vote_average: number;
    release_date: string;
}



export const fakeBooks: Book[] = [
    {
        id: 1,
        poster_path: '/images/Antychryst.jpg',
        title: 'Antychryst',
        overview: 'Hitlerowi odjebalo do reszty',
        vote_average: 4.2,
        release_date: '10/11/2001',
    },
    {
        id: 2,
        poster_path: '/images/Lean.jpg',
        title: 'Lean startup',
        overview: 'How to make your app work',
        vote_average: 4,
        release_date: '15/11/2003',
    },
    {
        id: 3,
        poster_path: '/images/Negocjuj.jpg',
        title: 'Negocjuj',
        overview: 'Dostan to czego tylko chcesz',
        vote_average: 5,
        release_date: '4/6/2002',
    },

    {
        id: 4,
        poster_path: '/images/Nawyki.jpg',
        title: 'Zmien swoj nawyk',
        overview: 'Dostan to czego tylko chcesz',
        vote_average: 5,
        release_date: '4/8/2002',
    },

    {
        id: 5,
        poster_path: '/images/Wiez.jpg',
        title: 'Wiez',
        overview: 'Parenting pelnym ryjem',
        vote_average: 5,
        release_date: '4/10/2002',
    },
    {
        id: 6,
        poster_path: '/images/Antychryst.jpg',
        title: 'Antychryst',
        overview: 'Hitlerowi odjebalo do reszty',
        vote_average: 4.2,
        release_date: '10/11/2001',
    },
    {
        id: 7,
        poster_path: '/images/Lean.jpg',
        title: 'Lean startup',
        overview: 'How to make your app work',
        vote_average: 4,
        release_date: '15/11/2003',
    },
    {
        id: 8,
        poster_path: '/images/Negocjuj.jpg',
        title: 'Negocjuj',
        overview: 'Dostan to czego tylko chcesz',
        vote_average: 5,
        release_date: '4/6/2002',
    },

    {
        id: 9,
        poster_path: '/images/Nawyki.jpg',
        title: 'Zmien swoj nawyk',
        overview: 'Dostan to czego tylko chcesz',
        vote_average: 5,
        release_date: '4/8/2002',
    },

];

// export const fakeFavorites = [

// ]
