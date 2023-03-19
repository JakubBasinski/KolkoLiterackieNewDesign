import { Box } from '@mui/material';
import { SingleComment } from '../../utils/helpers';
import cls from './Comment.module.css';
import CommentForm from './CommentForm';
import {
    getComments as getCommentsApi,
    createComment as createCommentApi,
    deleteComment as deleteCommentApi,
} from '../../utils/helpers';

interface Props {
    comment: SingleComment;
    replies: SingleComment[] | [];
    currentUserId: string;
    deleteComment: (id: string) => void;
    activeComment: null | { id: string; type: string };
    setActiveComment: React.Dispatch<React.SetStateAction<null | { id: string; type: string }>>;
    parentId: null | string;
    addComment: (text: string, parentId: string | null) => void;
    updateComment: (text: string, commentId: string) => void;
}
const Comment = ({
    currentUserId,
    comment,
    replies,
    deleteComment,
    activeComment,
    setActiveComment,
    addComment,
    parentId = null,
    updateComment
}: Props) => {
    const fiveMinutes: number = 300000;
    const timePassed = new Date().getTime() - new Date(comment.createdAt).getTime() > fiveMinutes;
    const canReply = Boolean(currentUserId);
    const canEdit = currentUserId === comment.userId && !timePassed;
    const canDelete = currentUserId === comment.userId && !timePassed;
    const createdAt = new Date(comment.createdAt).toLocaleDateString();
    const isReplying =
        activeComment && activeComment.type === 'replying' && activeComment.id === comment.id;
    const isEditing =
        activeComment && activeComment.type === 'editing' && activeComment.id === comment.id;
    const replyId = parentId ? parentId : comment.id;

    // const addComment = (text: string, parentId: string | null) => {
    //   console.log('addComment', parentId);
    //   createCommentApi(text, parentId).then((comment) => {
    //       setBackendComments([comment, ...backendComments]);
    //   });

    return (
        <Box className={cls.comment}>
            <Box className={cls.commentRightPart}>
                <Box className={cls.commentContent}>
                    <Box className={cls.commentDate}>{createdAt}</Box>
                    <Box className={cls.commentAuthor}>{comment.username}</Box>
                </Box>
                {!isEditing && <Box className={cls.commentText}>{comment.body}</Box>}
                {isEditing && (
                    <CommentForm
                        submitLabel="Edit"
                        hasCancelButton
                        handleCancelFunction={() => {
                            setActiveComment(null);
                        }}
                        initialText={comment.body}
                        handleSubmit={(text) => {
                            updateComment(text, comment.id);
                        }}
                    />
                )}
                <Box className={cls.commentActions}>
                    {canReply && (
                        <Box
                            className={cls.commentAction}
                            onClick={() => {
                                setActiveComment({ id: comment.id, type: 'replying' });
                            }}
                        >
                            Reply
                        </Box>
                    )}
                    {canEdit && (
                        <Box
                            className={cls.commentAction}
                            onClick={() => {
                                setActiveComment({ id: comment.id, type: 'editing' });
                            }}
                        >
                            Edit
                        </Box>
                    )}
                    {canDelete && (
                        <Box
                            className={cls.commentAction}
                            onClick={() => deleteComment(comment.id)}
                        >
                            Delete
                        </Box>
                    )}
                </Box>
                {isReplying && (
                    <CommentForm
                        submitLabel="Reply"
                        handleSubmit={(text) => {
                            addComment(text, replyId);
                        }}
                        handleCancelFunction={() => {
                            setActiveComment(null);
                        }}
                        initialText={''}
                        hasCancelButton={false}
                    />
                )}
                {replies.length > 0 && (
                    <Box className={cls.replies}>
                        {replies.map((reply) => (
                            <Comment
                                key={reply.id}
                                currentUserId={currentUserId}
                                comment={reply}
                                replies={[]}
                                deleteComment={deleteComment}
                                activeComment={activeComment}
                                setActiveComment={setActiveComment}
                                parentId={comment.id}
                                addComment={addComment}
                                updateComment={updateComment}
                            />
                        ))}
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default Comment;
