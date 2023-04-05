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
        title: 'Negocjuj',
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
        gallery: ['/images/gallery/Nawyki1.jpg'],
        book: 'Atomowe Nawyki',
        date: '30/01/2021',
        literats: ['Wojtek', 'Daniel', 'Wambli', 'Kuba'],
        place: 'Ceglana',
        cover: '/images/covers/Nawyki.jpg',
    },

    {
        id: 2,
        gallery: ['/images/gallery/Negocjuj1.jpg'],
        book: 'Negocjuj...',
        date: '12/2/2021',
        literats: ['Wojek', 'Daniel', 'Wambli', 'Kuba'],
        place: 'Ptaszkowska',
        cover: '/images/covers/Negocjuj.jpg',
    },
    {
        id: 3,
        gallery: ['/images/gallery/WEBIS.jpg'],
        book: 'What every body says',
        date: '14/3/2021',
        literats: ['Daniel', 'Wambli', 'Kuba'],
        place: 'Ptaszkowska',
        cover: '/images/covers/WEBIS.jpg',
    },
    {
        id: 4,
        gallery: ['/images/gallery/Antychryst.jpg'],
        book: 'Antychryst',
        date: '11/6/2021',
        literats: ['Wojtek', 'Daniel', 'Wambli', 'Kuba'],
        place: 'Ptaszkowska',
        cover: '/images/covers/Antychryst.jpg',
    },

    {
        id: 5,
        gallery: ['/images/gallery/Wiez1.jpg'],
        book: 'Więź',
        date: '13/10/2021',
        literats: ['Wojtek', 'Daniel', 'Wambli', 'Kuba'],
        place: 'Działeczka',
        cover: '/images/covers/Wiez.jpg',
    },
    {
        id: 6,
        gallery: ['/images/gallery/lean.jpg'],
        book: 'Lean Startup',
        date: '7/11/2021',
        literats: ['Wojtek', 'Daniel', 'Wambli', 'Kuba'],
        place: 'Ptaszkowska',
        cover: '/images/covers/Lean.jpg',
    },
    {
        id: 7,
        gallery: ['/images/gallery/Peak.jpg'],
        book: 'Peak Mind',
        date: '19/2/2022',
        literats: ['Wojtek', 'Daniel', 'Wambli', 'Kuba'],
        place: 'Ceglana',
        cover: '/images/covers/Peak.jpg',
    },
    {
        id: 8,
        gallery: ['/images/gallery/Pętliczek.jpg'],
        book: 'Pętliczek',
        date: '9/7/2022',
        literats: ['Wojtek', 'Daniel', 'Wambli', 'Kuba'],
        place: 'Ceglana',
        cover: '/images/covers/Pętliczek.jpg',
    },
    {
        id: 8,
        gallery: ['/images/gallery/Pętliczek.jpg'],
        book: 'Pętliczek',
        date: '15/10/2022',
        literats: ['Wojtek', 'Daniel', 'Wambli', 'Kuba'],
        place: 'Działeczka',
        cover: '/images/covers/Pętliczek.jpg',
    },
    {
        id: 9,
        gallery: ['/images/gallery/HTIP1.jpg','/images/gallery/HTIP2.jpg','/images/gallery/HTIP3.jpg'],
        book: 'How to win friends',
        date: '7/1/2023',
        literats: ['Wojtek', 'Daniel', 'Wambli', 'Kuba'],
        place: 'Ptaszkowska',
        cover: '/images/covers/HTWF.jpg',
    },
    {
        id: 10,
        gallery: ['/images/gallery/AkcjaSprzatanie.jpg'],
        book: 'Akcja Sprzatanie',
        date: '10/6/2021',
        literats: ['Wojtek', 'Daniel', 'Wambli', 'Kuba'],
        place: 'Bunkier Ogrodek',
        cover: '/images/covers/No.jpg',
    },
    {
        id: 11,
        gallery: ['/images/gallery/AkcjaSprzatanie.jpg'],
        book: 'Wampiry',
        date: '10/6/2021',
        literats: ['Wojtek', 'Daniel', 'Wambli', 'Kuba'],
        place: 'Bunkier Ogrodek',
        cover: '/images/covers/No.jpg',
    },
    {
        id: 11,
        gallery: ['/images/gallery/Wampiry.jpg','/images/gallery/Wampiry1.jpg','/images/gallery/Wampiry2.jpg','/images/gallery/Wampiry3.jpg'],
        book: 'Wampiry',
        date: '18/2/2023',
        literats: ['Wojtek', 'Daniel', 'Wambli', 'Kuba'],
        place: 'Bunkier Ogrodek',
        cover: '/images/covers/No.jpg',
    },
];
