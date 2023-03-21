export const FormControlSx = {
    width: '100%',
    gap: 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingY: '50px',
    borderRadius: '10px',
    color: 'grey',
};

export const formSubmitionText = {
    paddingBottom: 1,
    paddingLeft: 1.1,
    color: 'rgb(126, 98, 66)',
    letterSpacing: 2,
    fontSize: '1.6em',
    fontWeight: 600,
};

export const formInputs = {
    width: '100%',
    '& .MuiFilledInput-input': {
        color: 'rgb(146, 144, 144);',
        fontSize: '1.1em',
    },
    '& .MuiFormLabel-root ': {
        color: '#806e59',
    },
    '& label.Mui-focused': {
        color: '#806e59',
    },
    '& .MuiFilledInput-underline:before': {
        borderBottomColor: '#806e59',
    },
    '& .MuiFilledInput-underline:after': {
        borderBottomColor: '#806e59',
    },
};

export const submitButton = {
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

// align-items: center;
// justify-content: start;
// margin: 80px;
// flex-direction: column;

// -webkit-animation: fade-in 0.75s cubic-bezier(0.6, -0.28, 0.735, 0.045) both;
// animation: fade-in 0.75s cubic-bezier(0.6, -0.28, 0.735, 0.045) both;
