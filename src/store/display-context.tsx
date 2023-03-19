import React, { useState } from 'react';
import { Book } from '../utils/fakeapi';
import { fakeBooks } from '../utils/fakeapi';

interface DisplayCotnextType {
    fakeBooksData: Book[];
    openBookPage: boolean;
    setBookState: () => void;
    editBooksData: (item: any) => void;
}

const DisplayContext = React.createContext<DisplayCotnextType>({
    fakeBooksData: [],
    openBookPage: false,
    setBookState: () => {},
    editBooksData: (item: any) => {},
});

type Props = {
    children: React.ReactNode;
};

export const DisplayContextProvider = ({ children }: Props) => {
    const [fakeBookList, setFakeBooks] = useState(fakeBooks);
    const [isBookPage, setIsBookPage] = useState(false);
    const editBooks = (action: any) => {
        const newList = [...fakeBookList];
        switch (action) {
            case 'Rating':
                newList.sort((a, b) => b.vote_average - a.vote_average);
                setFakeBooks(newList);
                break;
            case 'Title':
                newList.sort((a, b) => (a.title > b.title ? 1 : -1));
                setFakeBooks(newList);
                break;
            case 'Reviewing Date':
                newList.sort((a, b) => {
                    const dateA = new Date(a.release_date);
                    const dateB = new Date(b.release_date);
                    return dateA.getTime() - dateB.getTime();
                });
                setFakeBooks(newList);
                break;
            default:
                console.log('what?');
        }

        console.log(fakeBookList);
    };
    const isBookHandler = () => {
        setIsBookPage((p) => !p);
    };

    const contextValue = {
        fakeBooksData: fakeBookList,
        openBookPage: isBookPage,
        setBookState: isBookHandler,
        editBooksData: editBooks,
    };

    return <DisplayContext.Provider value={contextValue}>{children}</DisplayContext.Provider>;
};

export default DisplayContext;
