import React, { useState } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import styles from './login.module.scss';
import { Button, TextField, Typography } from '@mui/material';
import * as cls from './AuthFormHelpers';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, submitSchema, initialValues } from './AuthFormHelpers';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthorizationContext from '../../store/authorization-contex';
import DisplayContext from '../../store/display-context';
import { MediaButton } from '../common/MediaButton';

export const errorsFieldValues = {
    confirmationError: false,
};
export interface MenuProps {
    className?: string;
}

export const Login = ({ className }: MenuProps) => {
    const { login } = useContext(AuthorizationContext);
    const { setSnackbarMessage, setSnackBarOpen } = useContext(DisplayContext);

    const [isLogin, setIsLogin] = useState(true);
    const schema = isLogin ? loginSchema : submitSchema;
    const navigate = useNavigate();

    const { register, handleSubmit, formState } = useForm({
        defaultValues: initialValues,
        resolver: zodResolver(schema),
    });

    const { errors } = formState;

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    const submitHandler = async (formValues: any) => {
        if (isLogin === true) {
            setSnackbarMessage('Successfully logged in !');
            setSnackBarOpen(true);
            localStorage.setItem('user', formValues.password);
            let fakeToken = 'fakeToken';
            let fakeUser = 'fakeUser';
            let isAdminFake = false;
            const expirationDuration = 3600;
            const currentTime = Math.floor(Date.now() / 1000);
            const expirationTime = currentTime + expirationDuration;
            localStorage.clear();
            login(fakeToken, fakeUser, expirationTime, isAdminFake);

            navigate('/');
        } else {
            setSnackBarOpen(true);
            setSnackbarMessage('Successfully registered !');
            setIsLogin(true);
        }
    };

    return (
        <motion.div
            className={classNames(styles.root, className)}
            initial={{ x: -window.innerWidth, opacity: 0, display: 'none' }}
            animate={{ x: 0, opacity: 1, transition: { delay: 1, duration: 0.5 }, display: 'flex' }}
            exit={{ x: window.innerWidth, opacity: 0, transition: { duration: 0.5 } }}
        >
            <form onSubmit={handleSubmit(submitHandler)}>
                <div className={styles.formControl}>
                    <Typography sx={cls.formSubmitionText}>
                        {isLogin ? 'Login' : 'Sign up'}
                    </Typography>
                    {!isLogin && (
                        <TextField
                            {...register('name')}
                            label="Name"
                            variant="filled"
                            sx={cls.formInputs}
                        />
                    )}
                    {errors.name?.message && (
                        <div className={styles.error}>{errors.name?.message}</div>
                    )}
                    <TextField
                        {...register('email')}
                        variant="filled"
                        label="Email"
                        sx={cls.formInputs}
                    />
                    {errors.email?.message && (
                        <div className={styles.error}>{errors.email?.message}</div>
                    )}
                    <TextField
                        {...register('password')}
                        variant="filled"
                        label="Password"
                        inputProps={{
                            type: 'password',
                        }}
                        sx={cls.formInputs}
                        autoComplete="new-password"
                    />
                    {errors.password?.message && (
                        <div className={styles.error}>{errors.password?.message}</div>
                    )}
                    {!isLogin && (
                        <TextField
                            {...register('confirmation')}
                            variant="filled"
                            sx={cls.formInputs}
                            label="Confirm Password"
                            inputProps={{
                                type: 'password',
                            }}
                        />
                    )}
                    {errors.confirmation?.message && (
                        <div className={styles.error}>{errors.confirmation?.message}</div>
                    )}
                    <Button sx={cls.submitButton} type="submit">
                        {isLogin ? 'Login' : 'Sign up'}
                    </Button>
                    <Button sx={cls.submitButton} type="button" onClick={switchAuthModeHandler}>
                        {isLogin ? ' New account' : 'Login'}
                    </Button>
                </div>
            </form>
            <MediaButton />
        </motion.div>
    );
};
