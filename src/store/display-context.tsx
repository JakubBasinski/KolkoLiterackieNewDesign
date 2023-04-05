import React, { useState } from 'react';
import { Book } from '../utils/fakeapi';
import { fakeBooks } from '../utils/fakeapi';
import { fakeMeetings } from '../utils/fakeapi';
import { MeetingInterface } from '../utils/fakeapi';

interface DisplayCotnextType {
    fakeBooksData: Book[];
    openBookPage: boolean;
    setBookState: () => void;
    editBooksData: (item: any) => void;
    searchForBook: (text: string) => void;
    searchQuery: string;
    fakeMeetingsData: MeetingInterface[];
    editHistoryData: (item: string) => void;
    addingMeetingData: (meeting: MeetingInterface) => void;
    editMeetingData: (meeting: MeetingInterface, updatedMeeting: MeetingInterface) => void;
    isWelcomePage: boolean;
    setWelcomePage: (value: boolean) => void;
    meetingModeForm: string;
    setMeetingModeForm: (value: string) => void;
    snackbarMessage: string;
    setSnackbarMessage: (value: string) => void;
    isSnackBarOpen: boolean;
    setSnackBarOpen: (value: boolean) => void;

}

const DisplayContext = React.createContext<DisplayCotnextType>({
    fakeBooksData: [],
    openBookPage: false,
    setBookState: () => {},
    editBooksData: (item: any) => {},
    searchForBook: (text: string) => {},
    searchQuery: '',
    fakeMeetingsData: [],
    editHistoryData: (item: string) => {},
    addingMeetingData: (meet: MeetingInterface) => {},
    editMeetingData: (meeting: MeetingInterface, updatedMeeting: MeetingInterface) => {},
    isWelcomePage: true,
    setWelcomePage: (value: boolean) => {},
    meetingModeForm: '',
    setMeetingModeForm: (value: string) => {},
    snackbarMessage: '',
    setSnackbarMessage: (value: string) => {},
    isSnackBarOpen: false,
    setSnackBarOpen: (value: boolean) => {},

});

type Props = {
    children: React.ReactNode;
};

export const DisplayContextProvider = ({ children }: Props) => {
    const [welcomeGuest, setWelcomeGuest] = useState(true);
    const [fakeBookList, setFakeBooks] = useState(fakeBooks);
    const [isBookPage, setIsBookPage] = useState(false);
    const [query, setQuery] = useState('');
    const [fakeHisotryList, setFakeHistory] = useState(fakeMeetings);
    const [modeForm, setModeForm] = useState('add');
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [isSnackBarOpen, setSnackBarOpen] = useState(false);
    const [token, setToken] = useState('');
    const handleSetQuery = (e: string) => {
        setQuery(e);
    };    

    const handleSetForm = (e: string) => {
        setModeForm(e);
    };

    const addingMeeting = (meeting: MeetingInterface) => {
        console.log('addM<eetingCtX works');
        setFakeHistory((meetings) => [...meetings, meeting]);
    };

    const editMeeting = (meeting: MeetingInterface, updatedMeeting: MeetingInterface) => {
        const newList = [...fakeHisotryList];
        const index = newList.indexOf(meeting);
        newList[index] = updatedMeeting;
        console.log(newList);
        setFakeHistory(newList);
    };

    const editHistory = (action: any) => {
        const newList = [...fakeHisotryList];
        switch (action) {
            case 'Date':
                console.log('date');
                newList.sort((a, b) => {
                    const dateA = new Date(a.date);
                    const dateB = new Date(b.date);
                    console.log(dateA.getTime() - dateB.getTime());
                    return dateB.getTime() - dateA.getTime();
                });
                setFakeHistory(newList);
                break;

            case 'Place':
                newList.sort((a, b) => (a.place > b.place ? 1 : -1));
                setFakeHistory(newList);
                break;
            default:
                console.log('what?');
        }
    };

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
            case 'Meeting Date':
                newList.sort((a, b) => {
                    const dateA = new Date(a.release_date);
                    const dateB = new Date(b.release_date);
                    return dateA.getTime() - dateB.getTime();
                });
                setFakeBooks(newList);
                break;
        }
    };
    const isBookHandler = () => {
        setIsBookPage((p) => !p);
    };

    const welcomeGuestHandler = (value: boolean) => {
        setWelcomeGuest(value);
    };

    const contextValue = {
        fakeBooksData: fakeBookList,
        openBookPage: isBookPage,
        setBookState: isBookHandler,
        editBooksData: editBooks,
        searchForBook: handleSetQuery,
        searchQuery: query,
        fakeMeetingsData: fakeHisotryList,
        editHistoryData: editHistory,
        addingMeetingData: addingMeeting,
        editMeetingData: editMeeting,
        isWelcomePage: welcomeGuest,
        setWelcomePage: welcomeGuestHandler,
        meetingModeForm:  modeForm,
        setMeetingModeForm: handleSetForm,
        snackbarMessage: snackbarMessage,
        setSnackbarMessage: setSnackbarMessage,
        isSnackBarOpen: isSnackBarOpen,
        setSnackBarOpen: setSnackBarOpen,
   
    };

    return <DisplayContext.Provider value={contextValue}>{children}</DisplayContext.Provider>;
};

export default DisplayContext;
