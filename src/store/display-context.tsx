import React, { useState } from 'react';
import { fakeMeetings } from '../utils/fakeapi';
import { MeetingInterface } from '../utils/fakeapi';

interface DisplayCotnextType {
    openBookPage: boolean;
    sortMeetingData: (item: any) => void;
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
    deleteMeetingData: (id: number | null) => void;
}

const DisplayContext = React.createContext<DisplayCotnextType>({
    openBookPage: false,
    sortMeetingData: (item: any) => {},
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
    deleteMeetingData: (id: number | null) => {},
});

type Props = {
    children: React.ReactNode;
};

export const DisplayContextProvider = ({ children }: Props) => {
    const [welcomeGuest, setWelcomeGuest] = useState(true);
    const [isBookPage, setIsBookPage] = useState(false);
    const [query, setQuery] = useState('');
    const [fakeMeetingList, setFakeMeetings] = useState(fakeMeetings);
    const [modeForm, setModeForm] = useState('add');
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [isSnackBarOpen, setSnackBarOpen] = useState(false);
    // const [token, setToken] = useState('');

    const handleSetQuery = (e: string) => {
        setQuery(e);
    };

    const handleSetForm = (e: string) => {
        setModeForm(e);
    };

    const addingMeeting = (meeting: MeetingInterface) => {
        setFakeMeetings((meetings) => [...meetings, meeting]);
    };

    const editMeeting = (meeting: MeetingInterface, updatedMeeting: MeetingInterface) => {
        const newList = [...fakeMeetingList];
        const index = newList.indexOf(meeting);
        newList[index] = updatedMeeting;
        setFakeMeetings(newList);
    };

    const deleteMeeting = (id: number | null) => {
        const newList = [...fakeMeetingList];
        const filteredArra = newList.filter((meeting) => meeting.id !== id);
        setFakeMeetings(filteredArra);
    };

    const editHistory = (action: any) => {
        const newList = [...fakeMeetingList];
        switch (action) {
            case 'Date':
                newList.sort((a, b) => {
                    const dateA = new Date(a.date);
                    const dateB = new Date(b.date);
                    console.log(dateA, dateB);
                    return dateB.getTime() - dateA.getTime();
                });
                setFakeMeetings(newList);
                break;

            case 'Place':
                newList
                    .sort((a, b) => (a.place > b.place ? 1 : -1))
                    .sort((a, b) => {
                        if (a.place === b.place) {
                            const dateA = new Date(a.date);
                            const dateB = new Date(b.date);
                            return dateB.getTime() - dateA.getTime();
                        }
                        return a.place > b.place ? 1 : -1;
                    });
                setFakeMeetings(newList);
                break;
            default:
                console.log();
        }
    };

    const sortMeetings = (action: any) => {
        const newList = [...fakeMeetingList];
        switch (action) {
            case 'Rating':
                newList.sort((a, b) => b.rating! - a.rating!);
                setFakeMeetings(newList);
                break;
            case 'Title':
                newList.sort((a, b) => (a.book > b.book ? 1 : -1));
                setFakeMeetings(newList);
                break;
            case 'Meeting Date':
                newList.sort((a, b) => {
                    const dateA = new Date(a.date);
                    const dateB = new Date(b.date);
                    return dateA.getTime() - dateB.getTime();
                });
                setFakeMeetings(newList);
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
        openBookPage: isBookPage,
        setBookState: isBookHandler,
        sortMeetingData: sortMeetings,
        searchForBook: handleSetQuery,
        searchQuery: query,
        fakeMeetingsData: fakeMeetingList,
        editHistoryData: editHistory,
        addingMeetingData: addingMeeting,
        editMeetingData: editMeeting,
        isWelcomePage: welcomeGuest,
        setWelcomePage: welcomeGuestHandler,
        meetingModeForm: modeForm,
        setMeetingModeForm: handleSetForm,
        snackbarMessage: snackbarMessage,
        setSnackbarMessage: setSnackbarMessage,
        isSnackBarOpen: isSnackBarOpen,
        setSnackBarOpen: setSnackBarOpen,
        deleteMeetingData: deleteMeeting,
    };

    return <DisplayContext.Provider value={contextValue}>{children}</DisplayContext.Provider>;
};

export default DisplayContext;
