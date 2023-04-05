import { z } from 'zod';

export const formSubmitionText = {
    margin: 'auto',
    color: 'rgb(126, 98, 66)',
    letterSpacing: 2,
    fontSize: '1.6em',
    fontWeight: 600,
    '@media (max-width: 1020px)': {
        color: 'grey',
    },
};

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

export const submitButton = {
    margin: 'auto',
    width: '200px',
    paddingX: '10px',
    paddingY: '5px',
    color: 'rgb(126, 98, 66)',
    textTransform: 'none',
    borderRadius: '5px',
    border: '0.2em solid rgb(126, 98, 66)',
    fontSize: '24px',
    fontWeight: 'bold',
    '&:hover': {
        backgroundColor: 'rgb(126, 98, 66)',
        color: 'black',
        transition: 'all 0.3s ease 0s',
        transform: 'translateY(-1px)',
    },

    '@media (max-width: 1020px)': {
        borderColor: 'grey !important',
        color: 'grey',
        '&:hover': {
            backgroundColor: 'black',
            color: 'white !important',
            transition: 'all 0.3s ease 0s',
            transform: 'translateY(-1px)',
        },
    },
};

export const logoutButton = {
    ...submitButton,
    marginY: 'auto',
    paddingX: '40px',
    paddingY: '10px',
    '&:hover': {
        backgroundColor: 'rgb(126, 98, 66)',
        color: 'black',
        transition: 'all 0.3s ease 0s',
        transform: 'translateY(-1px)',
    },
};

export const submitSchema = z
    .object({
        name: z.string().min(1, { message: 'Enter name' }),
        email: z.string().email().min(1, { message: 'Enter email' }),
        password: z.string().min(1, { message: 'Enter password' }),
        confirmation: z.string().min(1, { message: 'Enter password confrimation' }),
    })
    .refine((data) => data.password === data.confirmation, {
        message: "Provided passwords don't match",
        path: ['confirmation'],
    });

export const loginSchema = z.object({
    email: z.string().min(1, { message: 'Enter email' }).email(),
    password: z.string().min(1, { message: 'Enter password' }),
});
export const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmation: '',
};
