import React from 'react';
import * as cls from './CollectionFormSX';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import styles from './meetingManagement.module.scss';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z, string as zstring, Schema } from 'zod';

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

export interface MeetingMProps {
    className?: string;
}

export const MeetingManagement = ({ className }: MeetingMProps) => {
    const schema = {};
    const { register, control, handleSubmit, formState } = useForm({
        defaultValues: initialValues,
        resolver: zodResolver(schema),
    });

    const submitHandler = async (formValues: any) => {
        console.log('pies  ');
        console.log(formValues);
    };

    return (
        <motion.div
            className={classNames(styles.root, className)}
            initial={{ x: -window.innerWidth, opacity: 0, display: 'none' }}
            animate={{ x: 0, opacity: 1, transition: { delay: 1, duration: 0.5 }, display: 'flex' }}
            exit={{ x: window.innerWidth, opacity: 0, transition: { duration: 0.5 } }}
        >
            <div styles={styles.root}>
                <form>
                    <div className={styles.meetingForm}>
                    <h2 className={styles.formTitle}>
                       New meeting
                    </h2>

                    </div>

                </form>
            </div>
        </motion.div>
    );
};
