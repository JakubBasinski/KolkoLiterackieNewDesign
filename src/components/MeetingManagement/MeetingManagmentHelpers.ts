import { z } from 'zod';

export const formInputs = {
    width: '100%',

    '& .MuiFilledInput-input': {
        color: 'rgb(146, 144, 144);',
        fontSize: '1.1em',
        '@media (max-width: 1020px)': {
            color: 'grey',
        },
    },

    '& .MuiFormLabel-root ': {
        color: '#806e59',
        '@media (max-width: 1020px)': {
            color: 'grey',
        },
    },
    '& label.Mui-focused': {
        color: '#806e59',
        '@media (max-width: 1020px)': {
            color: 'grey',
        },
    },
    '& .MuiFilledInput-underline:before': {
        borderBottomColor: '#806e59',
        '@media (max-width: 1020px)': {
            borderBottomColor: 'grey !important',
        },
    },

    '& .MuiFilledInput-underline:after': {
        borderBottomColor: '#806e59',
        '@media (max-width: 1020px)': {
            borderBottomColor: 'grey !important',
        },
    },
};

export const multiSelect = {
    width: '100%',
    color: '#806e59',
    paddingBottom: '10px',

    '@media (max-width: 1020px)': {
        color: 'grey',
    },

    '&.MuiFilledInput-root': {
        '& .MuiSelect-icon': {
            color: '#806e59',
            '@media (max-width: 1020px)': {
                color: 'grey',
            },
        },
        '&::before': {
            borderBottomColor: '#806e59',
            '@media (max-width: 1020px)': {
                borderBottomColor: 'grey !important',
            },
        },
        '&::after': {
            borderBottomColor: '#806e59',
            '@media (max-width: 1020px)': {
                borderBottomColor: 'grey !important',
            },
        },
        '&:focus-within': {
            '&::after': {
                borderBottomColor: '#806e59',
            },
        },
    },
};

export const Keyboard = {
    color: 'rgb(126, 98, 66)',
    cursor: 'pointer',
    fontSize: '30px',
    marginRight: 'auto',
    '@media screen and (max-width: 1020px)': {
        color: 'grey',
    },
};

export const ImageLandingSpace = {
    height: '200px',
    width: '200px',
    borderRadius: '10px',
    color: ' rgb(144, 136, 127)',
    border: 'dashed 2px rgb(144, 136, 127) ',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media  (max-width: 1020px)': {
        color: 'grey',
        border: 'dashed 2px grey; ',
    },
};

export const dateSlotProps = {
    desktopPaper: {
        sx: {
            background: ' rgb(144, 136, 127)',
            '@media (max-width: 1020px)': {
                background: 'grey',
            },
        },
    },

    day: {
        sx: {
            '&.Mui-selected': {
                backgroundColor: 'rgb(126, 98, 66)',
                color: 'white',
                '&:focus': {
                    backgroundColor: 'rgb(126, 98, 66)',
                    color: 'white',
                },

                '@media (max-width: 1020px)': {
                    backgroundColor: 'black',
                    color: 'white',
                    '&:focus': {
                        backgroundColor: 'black',
                        color: 'white',
                    },
                },
            },
        },
    },
};

export const datePicker = {
    width: '100%',
    '& .MuiInputBase-input ': {
        backgroundColor: 'transparent',
        color: '#806e59',
        border: 'solid 1px #806e59',

        '@media (max-width: 1020px)': {
            backgroundColor: 'transparent',
            color: 'grey',
            border: 'solid 1px grey',
        },
    },

    '& .MuiPickersPopper-root': {
        backgroundColor: 'rgba(120, 120, 120, 0.2)',
        '@media (max-width: 1020px)': {
            backgroundColor: 'transparent',
            color: 'grey',
            border: 'solid 1px grey',
        },
    },

    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#806547',
        },
        '&:hover fieldset': {
            borderColor: '#806e59',
            '@media (max-width: 1020px)': {
                backgroundColor: 'transparent',
            },
        },
        '&.Mui-focused fieldset': {
            borderColor: '#806e59',
            '@media (max-width: 1020px)': {
                backgroundColor: 'transparent',
            },
        },

        '@media (max-width: 1020px)': {
            '& fieldset': {
                borderColor: 'grey !important',
            },
        },
    },
};

export const selectMenuProps = {
    PaperProps: {
        sx: {
            backgroundColor: ' #191312',
            '@media (max-width: 1020px)': {
                backgroundColor: ' black',
            },
        },
    },
};

export const menuItem = {
    color: 'rgb(126, 98, 66)',
    backgroundColor: 'transparent',
    '&. Mui-selected': {
        color: 'rgb(126, 98, 66)',
    },

    '@media (max-width: 1020px)': {
        color: 'grey !important',
        '&. Mui-selected': {
            color: 'grey !important',
        },
    },
};

export const doubleArrow = {
    fontSize: '70px',
    color: ' rgb(144, 136, 127);',
};

export const multiSelectOptions = [
    { name: 'Wojtek' },
    { name: 'Kuba' },
    { name: 'Mikolaj' },
    { name: 'Daniel' },
];

export const initialValues = {
    title: '',
    cover: '',
    date: null,
    place: '',
    recommender: '',
    multiSelect: [],
    gallery: [] as string[],
};

export const meetingSchema = z.object({
    title: z.string().min(1, { message: 'Enter the title' }),
    place: z.string().min(1, { message: 'Enter the place' }),
    date: z.any().optional(),
    cover: z.string().min(1, { message: 'Provide a cover' }),
    gallery: z.array(z.string()).max(4, { message: '4 photos maximum' }),
    recommender: z.string().optional(),
    multiSelect: z.array(z.string()).optional(),
});
