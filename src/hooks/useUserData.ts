import { useMutation } from 'react-query';
import { useQueryClient } from 'react-query/types/react';
import axiosInstance from '../utils/axiosConfig';
import { useState } from 'react';

interface User {
    name?: string;
    email: string;
    password: string;
}

const createUser = (user: User) => {
    return axiosInstance.post('users/create', user);
};

export const useCreateUserData = () => {
    return useMutation(createUser);
};

const loginUser = (user: User) => {
    return axiosInstance.post('users/login', user);
};

export const useLoginUserData = () => {
    return useMutation(loginUser);
};
