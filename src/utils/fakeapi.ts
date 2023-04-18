export interface MeetingInterface {
    id: number;
    gallery: string[];
    book: string;
    date: string;
    literats: string[];
    place: string;
    cover: string;
    rating?: number
}


export const fakeMeetings: MeetingInterface[] = [
    {
        id: 1,
        gallery: ['/images/gallery/Nawyki1.jpg'],
        book: 'Atomowe Nawyki',
        date: '01/30/2021',
        literats: ['Wojtek', 'Daniel', 'Wambli', 'Kuba'],
        place: 'Ceglana',
        cover: '/images/covers/Nawyki.jpg',
        rating: 4

    },

    {
        id: 2,
        gallery: ['/images/gallery/Negocjuj1.jpg'],
        book: 'Negocjuj...',
        date: '2/12/2021',
        literats: ['Wojek', 'Daniel', 'Wambli', 'Kuba'],
        place: 'Ptaszkowska',
        cover: '/images/covers/Negocjuj.jpg',
        rating: 4.1
    },
    {
        id: 3,
        gallery: ['/images/gallery/WEBIS.jpg'],
        book: 'What every body says',
        date: '3/14/2021',
        literats: ['Daniel', 'Wambli', 'Kuba'],
        place: 'Ptaszkowska',
        cover: '/images/covers/WEBIS.jpg',
        rating: 3.4
    },
    {
        id: 4,
        gallery: ['/images/gallery/Antychryst.jpg'],
        book: 'Antychryst',
        date: '6/11/2021',
        literats: ['Wojtek', 'Daniel', 'Wambli', 'Kuba'],
        place: 'Ptaszkowska',
        cover: '/images/covers/Antychryst.jpg',
        rating:4.6
        },

    {
        id: 5,
        gallery: ['/images/gallery/Wiez1.jpg'],
        book: 'Więź',
        date: '10/3/2021',
        literats: ['Wojtek', 'Daniel', 'Wambli', 'Kuba'],
        place: 'Skrzetuszewo',
        cover: '/images/covers/Wiez.jpg',
        rating: 4.3
    },
    {
        id: 6,
        gallery: ['/images/gallery/lean.jpg'],
        book: 'Lean Startup',
        date: '11/7/2021',
        literats: ['Wojtek', 'Daniel', 'Wambli', 'Kuba'],
        place: 'Ptaszkowska',
        cover: '/images/covers/Lean.jpg',
        rating: 3.2
    },
    {
        id: 7,
        gallery: ['/images/gallery/Peak.jpg'],
        book: 'Peak Mind',
        date: '2/19/2022',
        literats: ['Wojtek', 'Daniel', 'Wambli', 'Kuba'],
        place: 'Ceglana',
        cover: '/images/covers/Peak.jpg',
        rating: 4.5
    },
    {
        id: 8,
        gallery: ['/images/gallery/Pętliczek.jpg'],
        book: 'Pętliczek',
        date: '7/9/2022',
        literats: ['Wojtek', 'Daniel', 'Wambli', 'Kuba'],
        place: 'Ceglana',
        cover: '/images/covers/Pętliczek.jpg',
        rating: 4.3
    },

    {
        id: 9,
        gallery: ['/images/gallery/Hooked.jpg'],
        book: 'Hooked',
        date: '10/15/2022',
        literats: ['Wojtek', 'Daniel', 'Wambli', 'Kuba'],
        place: 'Skrzetuszewo',
        cover: '/images/covers/Hooked.jpg',
        rating: 3.2
    },

    {
        id: 10,
        gallery: [
            '/images/gallery/HTIP1.jpg',
            '/images/gallery/HTIP2.jpg',
            '/images/gallery/HTIP3.jpg',
        ],
        book: 'How to win friends',
        date: '1/7/2023',
        literats: ['Wojtek', 'Daniel', 'Wambli', 'Kuba'],
        place: 'Ptaszkowska',
        cover: '/images/covers/HTWF.jpg',
        rating: 4.9
    },
    {
        id: 11,
        gallery: ['/images/gallery/AkcjaSprzatanie.jpg'],
        book: 'Akcja Sprzatanie',
        date: '6/10/2021',
        literats: ['Wojtek', 'Daniel', 'Wambli', 'Kuba'],
        place: 'Bunkier Ogrodek',
        cover: '/images/covers/No.jpg',
        rating: 3.2
    },

    {
        id: 12,
        gallery: [
            '/images/gallery/Wampiry.jpg',
            '/images/gallery/Wampiry1.jpg',
            '/images/gallery/Wampiry2.jpg',
            '/images/gallery/Wampiry3.jpg',
        ],
        book: 'Wampiry',
        date: '2/18/2023',
        literats: ['Wojtek', 'Daniel', 'Wambli', 'Kuba'],
        place: 'Skrzetuszewo',
        cover: '/images/covers/Wampir.jpg',
        rating: 4.8
    },
];




// export const fakeBooks: Book[] = [
//     {
//         id: 1,
//         poster_path: '/images/Antychryst.jpg',
//         title: 'Antychryst',
//         overview: 'Hitlerowi odjebalo do reszty',
//         vote_average: 4.2,
//         release_date: '10/11/2001',
//     },
//     {
//         id: 2,
//         poster_path: '/images/Lean.jpg',
//         title: 'Negocjuj',
//         overview: 'How to make your app work',
//         vote_average: 4,
//         release_date: '15/11/2003',
//     },
//     {
//         id: 3,
//         poster_path: '/images/Negocjuj.jpg',
//         title: 'Negocjuj',
//         overview: 'Dostan to czego tylko chcesz',
//         vote_average: 5,
//         release_date: '4/6/2002',
//     },

//     {
//         id: 4,
//         poster_path: '/images/Nawyki.jpg',
//         title: 'Zmien swoj nawyk',
//         overview: 'Dostan to czego tylko chcesz',
//         vote_average: 5,
//         release_date: '4/8/2002',
//     },

//     {
//         id: 5,
//         poster_path: '/images/Wiez.jpg',
//         title: 'Wiez',
//         overview: 'Parenting pelnym ryjem',
//         vote_average: 5,
//         release_date: '4/10/2002',
//     },
//     {
//         id: 6,
//         poster_path: '/images/Antychryst.jpg',
//         title: 'Antychryst',
//         overview: 'Hitlerowi odjebalo do reszty',
//         vote_average: 4.2,
//         release_date: '10/11/2001',
//     },
//     {
//         id: 7,
//         poster_path: '/images/Lean.jpg',
//         title: 'Lean startup',
//         overview: 'How to make your app work',
//         vote_average: 4,
//         release_date: '15/11/2003',
//     },
//     {
//         id: 8,
//         poster_path: '/images/Negocjuj.jpg',
//         title: 'Negocjuj',
//         overview: 'Dostan to czego tylko chcesz',
//         vote_average: 5,
//         release_date: '4/6/2002',
//     },

//     {
//         id: 9,
//         poster_path: '/images/Nawyki.jpg',
//         title: 'Zmien swoj nawyk',
//         overview: 'Dostan to czego tylko chcesz',
//         vote_average: 5,
//         release_date: '4/8/2002',
//     },
// ];