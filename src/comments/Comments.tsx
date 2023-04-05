import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import {
    getComments as getCommentsApi,
    createComment as createCommentApi,
    deleteComment as deleteCommentApi,
    updateComment as updateCommentApi,
} from './helpers';
import Comment from './Comment';
import style from './Comment.module.scss';
import CommentForm from './CommentForm';
import { SingleComment } from './helpers';

interface Props {
    currentUserId: string;
}

const Comments = ({ currentUserId }: Props) => {
    const [activeComment, setActiveComment] = useState<null | { id: string; type: string }>(null);
    const [backendComments, setBackendComments] = useState<Array<SingleComment>>([]);
    const rooComments = backendComments.filter(
        (backendComment) => backendComment.parentId === null
    );

    const getRepiles = (commentId: string) => {
        return backendComments
            .filter((backendComment) => backendComment.parentId === commentId)
            .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    };

    const addComment = (text: string, parentId: string | null) => {
        createCommentApi(text, parentId).then((comment) => {
            setBackendComments([comment, ...backendComments]);
            setActiveComment(null);
        });
    };

    const deleteComment = (commentId: string) => {
        if (window.confirm('Are you sure to remove comment ?')) {
            deleteCommentApi(commentId).then(() => {
                const updatedBackendComments = backendComments.filter(
                    (backendComment) => backendComment.id !== commentId
                );
                setBackendComments(updatedBackendComments);
            });
        }
    };

    const updateComment = (text: string, commentId: string) => {
        updateCommentApi(text, commentId).then(() => {
            const updatedBackendComments = backendComments.map((comment) => {
                if (comment.id === commentId) {
                    return { ...comment, body: text };
                }
                return comment;
            });
            setBackendComments(updatedBackendComments);
            setActiveComment(null);
        });
    };

    useEffect(() => {
        getCommentsApi().then((data: Array<SingleComment>) => {
            setBackendComments(data);
        });
    }, []);

    return (
        <Box className={style.comments}>
            <Typography
                sx={{
                    fontSize: '26px',
                    fontWeight: 600,
                    padding: '0',
                }}
            >
                Comment Section
            </Typography>

            <CommentForm
                submitLabel="Write"
                handleSubmit={addComment}
                handleCancelFunction={() => {
                    setActiveComment(null);
                }}
                initialText={''}
                hasCancelButton={false}
            />
            <Box className={style.commentsContainer}>
                {rooComments.map((rootComment) => (
                    <Comment
                        key={rootComment.id}
                        comment={rootComment}
                        replies={getRepiles(rootComment.id)}
                        currentUserId={currentUserId}
                        deleteComment={deleteComment}
                        activeComment={activeComment}
                        setActiveComment={setActiveComment}
                        addComment={addComment}
                        parentId={null}
                        updateComment={updateComment}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default Comments;
