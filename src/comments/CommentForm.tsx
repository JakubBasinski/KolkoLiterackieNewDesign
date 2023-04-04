import React from 'react';
import cls from './Comment.module.scss';

interface Props {
    submitLabel: string;
    handleSubmit: (text: string, parentId: string | null) => void;
    hasCancelButton: boolean;
    initialText: string;
    handleCancelFunction: () => void;
}

const CommentForm = ({
    submitLabel,
    handleSubmit,
    handleCancelFunction,
    initialText,
    hasCancelButton,
}: Props) => {
    const [text, setText] = React.useState(initialText);
    const isTextAreaDisabled = text.length === 0;
    const onSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        handleSubmit(text, null);
        setText('');
    };

    return (
        <form onSubmit={onSubmit}>
            <textarea
                className={cls.commentFormTextarea}
                value={text}
                placeholder="Enter your comment..."
                onChange={(e) => {
                    setText(e.target.value);
                }}
            />
            <div className={cls.commentFormButtons}>
                <button className={cls.commentFormButton} disabled={isTextAreaDisabled}>
                    {submitLabel}
                </button>
                {hasCancelButton && (
                    <button
                        type="button"
                        className={cls.commentFormButton}
                        onClick={handleCancelFunction}
                    >
                        Cancel
                    </button>
                )}
            </div>
        </form>
    );
};

export default CommentForm;
