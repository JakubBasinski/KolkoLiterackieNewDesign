import Antychryst from '../../assets/Antychryst.jpg';
import Lean from '../../assets/Lean.jpg';
import Nawyki from '../../assets/Nawyki.jpg';
import Negocjuj from '../../assets/Negocjuj.jpg';
import Wiez from '../../assets/Wiez.jpg';

export const getComments = async () => {
    return [
        {
            id: '1',
            body: 'First comment',
            username: 'Jack',
            userId: '1',
            parentId: null,
            createdAt: '2021-08-16T23:00:33.010+02:00',
        },
        {
            id: '2',
            body: 'Second comment',
            username: 'John',
            userId: '2',
            parentId: null,
            createdAt: '2021-08-16T23:00:33.010+02:00',
        },
        {
            id: '3',
            body: 'First comment first child',
            username: 'John',
            userId: '2',
            parentId: '1',
            createdAt: '2021-08-16T23:00:33.010+02:00',
        },
        {
            id: '4',
            body: 'Second comment second child',
            username: 'John',
            userId: '2',
            parentId: '2',
            createdAt: '2021-08-16T23:00:33.010+02:00',
        },
        {
            id: '5',
            body: 'Third comment',
            username: 'John',
            userId: '1',
            parentId: null,
            createdAt: '2021-08-16T23:00:33.010+02:00',
        },
        {
            id: '6',
            body: 'Second comment second child',
            username: 'John',
            userId: '2',
            parentId: '5',
            createdAt: '2021-08-16T23:00:33.010+02:00',
        },
    ];
};

export const createComment = async (text: string, parentId: null | string = null) => {
    return {
        id: Math.random().toString(36).substr(2, 9),
        body: text,
        parentId,
        userId: '1',
        username: 'John',
        createdAt: new Date().toISOString(),
        deleteComment: (id: string) => {},
    };
};

export const updateComment = async (text: string, id: string) => {
    return { text };
};

export const deleteComment = async (id: string) => {
    return {};
};

export interface SingleComment {
    id: string;
    body: string;
    username: string;
    userId: string;
    parentId: string | null;
    createdAt: string;
}
