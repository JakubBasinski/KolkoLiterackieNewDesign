import { Meeting } from '../components/meeting/meeting';

export interface Book {
    id: number;
    poster_path: string;
    title: string;
    overview: string;
    vote_average: number;
    release_date: string;
}

export interface MeetingInterface {
    id: number;
    gallery: string[];
    book: string;
    date: string;
    literats: string[];
    place: string;
    cover: string;
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

export const fakeMeetings: MeetingInterface[] = [
    {
        id: 1,
        gallery: ['/images/gallery/2.png', '/images/gallery/3.png'],
        book: 'Antychryst',
        date: '4/8/2008',
        literats: ['Wojtek', 'Daniel', 'Wambli', 'Kuba'],
        place: 'Ptaszkowska',
        cover: '/images/Nawyki.jpg',
    },
    {
        id: 2,
        gallery: ['/images/gallery/1.png', '/images/gallery/2.png', '/images/gallery/3.png'],
        book: 'Jedz jabłka młocie',
        date: '12/8/2009',
        literats: ['Wojtek', 'Daniel', 'Wambli', 'Kuba'],
        place: 'Limbo',
        cover: '/images/Negocjuj.jpg',
    },
    {
        id: 3,
        gallery: ['/images/gallery/1.png', '/images/gallery/2.png', '/images/gallery/3.png'],
        book: 'Na wschód od Edenu',
        date: '3/3/2010',
        literats: ['Wojtek', 'Daniel', 'Wambli', 'Kuba'],
        place: 'Zapomniana ambasada Rosji w Rakowniewicach',
        cover: '/images/Lean.jpg',
    },
    {
        id: 4,
        gallery: ['/images/gallery/1.png', '/images/gallery/2.png', '/images/gallery/3.png'],
        book: 'Nigdy nie umiera wczoraj',
        date: '1/10/2011',
        literats: ['Wojek', 'Daniel', 'Wambli', 'Kuba'],
        place: 'E-Pieklo',
        cover: '/images/Antychryst.jpg',
    },
    {
        id: 5,
        gallery: ['/images/gallery/1.png', '/images/gallery/2.png', '/images/gallery/3.png'],
        book: 'Konsantyn Leopold',
        date: '4/3/2012',
        literats: ['Wojtek', 'Daniel', 'Wambli', 'Kuba'],
        place: 'Ptaszkowska',
        cover: '/images/Wiez.jpg',
    },
];

// export const fakeFavorites = [

// ]
