import React from 'react';
import styles from './meetingManagement.module.scss';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextField } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { DesktopDatePicker } from '@mui/x-date-pickers/';
import { useContext, useState } from 'react';
import DisplayContext from '../../store/display-context';
import { MeetingsListToEdit } from './MeetingsListToEdit';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { MediaButton } from '../common/MediaButton';
import RepeatIcon from '@mui/icons-material/Repeat';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import * as cls from './MeetingManagmentHelpers';
import { MeetingInterface } from '../../utils/fakeapi';

import { multiSelectOptions, meetingSchema, initialValues } from './MeetingManagmentHelpers';
export interface MeetingMProps {
    className?: string;
}

export const MeetingManagement = ({ className }: MeetingMProps) => {
    const [selectedMeetingId, setSelected] = useState<number | null>(null);

    const {
        setSnackBarOpen,
        setSnackbarMessage,
        meetingModeForm,
        setMeetingModeForm,
        addingMeetingData,
        fakeMeetingsData,
        editMeetingData,
    } = useContext(DisplayContext);

    const {
        register,
        control,
        clearErrors,
        handleSubmit,
        formState,
        setError,
        setValue,
        watch,
        reset,
    } = useForm({
        defaultValues: initialValues,
        resolver: zodResolver(meetingSchema),
    });

    const { errors } = formState;
    const selectedFile = watch('cover');
    const selectedGallery = watch('gallery');

    const handleFileUpload = (event: any) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        if (file.type !== 'image/jpeg' && file.type !== 'image/jpg' && file.type !== 'image/png') {
            setError('cover', {
                type: 'filetype',
                message: 'Provide JPG/JPEG/PNG file',
            });
            return;
        }
        clearErrors('cover');
        reader.onloadend = () => {
            setValue('cover', reader.result as string);
        };
    };

    const handleGalleryUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        let isError = false;
        let fileList;
        if (files) {
            fileList = Array.from(files);
            fileList.forEach((file: any) => {
                if (
                    file.type !== 'image/jpeg' &&
                    file.type !== 'image/jpg' &&
                    file.type !== 'image/png'
                ) {
                    isError = true;
                    setError('gallery', {
                        type: 'filetype',
                        message: 'Provide JPG/JPEG/PNG files',
                    });
                }
            });
        }
        if (isError) {
            return;
        }
        clearErrors('gallery');
        if (fileList) {
            const urls = fileList.map((file) => URL.createObjectURL(file));
            setValue('gallery', urls);
        }
    };

    const handleDeselect = (field: any, valueToRemove: any, event: any) => {
        event.stopPropagation();
        const newSelectedValues = field.value.filter((value: any) => value !== valueToRemove);
        field.onChange(newSelectedValues);
    };

    const handleDeletePhoto = (index: number) => {
        const newGallery = [...watch('gallery')];
        newGallery.splice(index, 1);
        setValue('gallery', newGallery);
    };

    const handleDeleteCover = () => {
        setValue('cover', '');
    };

    const hadnleSelectMeeting = (id: number) => {
        setSelected(id);
    };

    const submitHandler = async (data: any) => {
        let reformateDate = data.date.toDate();
        let convertedData = `${reformateDate.getDate()}/${
            reformateDate.getMonth() + 1
        }/${reformateDate.getFullYear()}`;

        console.log(convertedData);

        if (meetingModeForm === 'edit' && selectedMeetingId) {
            const updatedMeeting: MeetingInterface = {
                id: selectedMeetingId,
                gallery: data.gallery || [],
                book: data.title,
                date: convertedData || '',
                literats: data.multiselect || [],
                place: data.place || '',
                cover: data.cover || '',
            };
            const selectedMeeting = fakeMeetingsData.find((m) => m.id === selectedMeetingId);
            if (selectedMeeting) {
                editMeetingData(selectedMeeting, updatedMeeting);
            }
            setSelected(null);
            setSnackBarOpen(true);
            setSnackbarMessage('Meeting updated successfully');
            return;
        }

        const newMeeting: MeetingInterface = {
            id: Math.floor(Math.random() * 1001),
            gallery: data.gallery || [],
            book: data.title,
            date: convertedData || '',
            literats: data.multiselect || [],
            place: data.place || '',
            cover: data.cover || '',
        };

        addingMeetingData(newMeeting);
        setSnackbarMessage('Meeting added successfully');
        setSnackBarOpen(true);
        reset();
    };

    return (
        <motion.div
            className={classNames(styles.root, className)}
            initial={{ x: -window.innerWidth, opacity: 0, display: 'none' }}
            animate={{ x: 0, opacity: 1, transition: { delay: 1, duration: 0.5 }, display: 'flex' }}
            exit={{ x: window.innerWidth, opacity: 0, transition: { duration: 0.5 } }}
        >
            <div
                onClick={() => {
                    // eslint-disable-next-line no-lone-blocks
                    {
                        meetingModeForm === 'edit'
                            ? setMeetingModeForm('add')
                            : setMeetingModeForm('edit');
                    }
                }}
                className={styles.editForMEdia}
            >
                <h4>{meetingModeForm.toUpperCase()}</h4>
                <RepeatIcon />
            </div>

            {meetingModeForm === 'edit' && selectedMeetingId === null && (
                <MeetingsListToEdit selectMeetingHandler={hadnleSelectMeeting} selectedMeetingId={selectedMeetingId} resetForm={reset} />
            )}
            {meetingModeForm === 'add' ||
            (meetingModeForm === 'edit' && selectedMeetingId !== null) ? (
                <form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
                    <div className={styles.meetingForm}>
                        {selectedMeetingId !== null && (
                            <KeyboardBackspaceIcon
                                onClick={() => {
                                    setSelected(null);
                                }}
                                sx={cls.Keyboard}
                            />
                        )}

                        <h2 className={styles.formTitle}>Meeting details</h2>

                        <div className={styles.maincontainer}>
                            <div className={styles.up}>
                                <div className={styles.leftSide}>
                                    {selectedFile ? (
                                        <div className={styles.photoWrapper}>
                                            <img
                                                src={selectedFile}
                                                className={styles.coverPreview}
                                                alt="Chosen cover"
                                                onClick={() => {
                                                    handleDeleteCover();
                                                }}
                                            />
                                        </div>
                                    ) : (
                                        <Box sx={cls.ImageLandingSpace}>
                                            <p className={styles.textImages}>COVER</p>
                                        </Box>
                                    )}

                                    <Controller
                                        name="cover"
                                        control={control}
                                        render={({ field: { onChange, onBlur, value } }) => (
                                            <input
                                                type="file"
                                                onChange={handleFileUpload}
                                                onBlur={onBlur}
                                                multiple
                                            />
                                        )}
                                    />
                                    {errors.cover?.message && (
                                        <div className={styles.errorStyleCover}>
                                            {errors.cover?.message}
                                        </div>
                                    )}

                                    {selectedGallery.length > 0 ? (
                                        <div className={styles.galleryWrapper}>
                                            {selectedGallery.map((photo, i) => (
                                                <div key={i} className={styles.photoWrapper}>
                                                    <img
                                                        className={styles.galleryphoto}
                                                        src={photo}
                                                        alt={photo}
                                                        onClick={() => handleDeletePhoto(i)}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <Box sx={cls.ImageLandingSpace}>
                                            <p className={styles.textImages}>ADD PHOTOS</p>
                                        </Box>
                                    )}
                                    <Controller
                                        name="gallery"
                                        control={control}
                                        render={({ field: { onChange, onBlur, value } }) => (
                                            <input
                                                type="file"
                                                onChange={handleGalleryUpload}
                                                onBlur={onBlur}
                                                multiple
                                            />
                                        )}
                                    />

                                    {errors.gallery?.message && (
                                        <div className={styles.errorStyleCover}>
                                            {errors.gallery?.message}
                                        </div>
                                    )}
                                </div>

                                <div className={styles.rightSide}>
                                    <TextField
                                        {...register('title')}
                                        label="Title"
                                        variant="filled"
                                        sx={cls.formInputs}
                                        InputLabelProps={{ shrink: true }}
                                    />

                                    {errors.title?.message && (
                                        <div className={styles.errorStyle}>
                                            {errors.title?.message}
                                        </div>
                                    )}

                                    <TextField
                                        {...register('place')}
                                        label="Place"
                                        variant="filled"
                                        sx={cls.formInputs}
                                        InputLabelProps={{ shrink: true }}
                                    />

                                    {errors.place?.message && (
                                        <div className={styles.errorStyle}>
                                            {errors.place?.message}
                                        </div>
                                    )}

                                    <Controller
                                        name="date"
                                        control={control}
                                        render={({ field: { ref, ...restField } }) => (
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DesktopDatePicker
                                                    value={restField.value}
                                                    onError={() => (
                                                        <div>Please select a valid date</div>
                                                    )}
                                                    slotProps={cls.dateSlotProps}
                                                    showDaysOutsideCurrentMonth
                                                    sx={cls.datePicker}
                                                    onChange={(date) => {
                                                        try {
                                                            restField.onChange(dayjs(date));
                                                        } catch (error) {
                                                            console.error(error);
                                                        }
                                                    }}
                                                />
                                            </LocalizationProvider>
                                        )}
                                    />
                                    {errors.date?.message && (
                                        <div className={styles.errorStyle}>
                                            {errors.date?.message}
                                        </div>
                                    )}

                                    <TextField
                                        {...register('recommender')}
                                        label="Recommender"
                                        variant="filled"
                                        sx={cls.formInputs}
                                    />
                                    <Controller
                                        name="multiSelect"
                                        control={control}
                                        defaultValue={[]}
                                        render={({ field }) => (
                                            <Select
                                                MenuProps={cls.selectMenuProps}
                                                sx={cls.multiSelect}
                                                labelId="multi-select-label"
                                                multiple
                                                value={field.value}
                                                onChange={field.onChange}
                                                displayEmpty
                                                variant="filled"
                                                renderValue={(selected) => {
                                                    if ((selected as string[]).length === 0) {
                                                        return (
                                                            <div className={styles.preheader}>
                                                                Select literats
                                                            </div>
                                                        );
                                                    }
                                                    return (
                                                        <>
                                                            {(selected as string[]).map((value) => (
                                                                <em
                                                                    key={value}
                                                                    onClick={(event) => {
                                                                        event.stopPropagation();
                                                                        handleDeselect(
                                                                            field,
                                                                            value,
                                                                            event
                                                                        );
                                                                    }}
                                                                    className={styles.selectedItem}
                                                                >
                                                                    {value}
                                                                </em>
                                                            ))}
                                                        </>
                                                    );
                                                }}
                                            >
                                                {multiSelectOptions.map((option, i) => (
                                                    <MenuItem
                                                        key={i}
                                                        sx={cls.menuItem}
                                                        value={option.name}
                                                    >
                                                        {option.name}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        )}
                                    />
                                    <button className={styles.submitButton}>
                                        {meetingModeForm === 'edit' && (
                                            <div className={styles.addWrapper}>
                                                <p className={styles.textSave}>SAVE</p>
                                                <p className={styles.textEdited}> EDITED</p>
                                                <p className={styles.textChanges}>CHANGES</p>
                                            </div>
                                        )}

                                        {meetingModeForm === 'add' && (
                                            <div className={styles.addWrapper}>
                                                <p className={styles.textAdd}>ADD</p>
                                                <p className={styles.textThe}>THE </p>
                                                <p className={styles.textMeeting}>MEETING</p>
                                            </div>
                                        )}

                                        <div>
                                            <KeyboardDoubleArrowRightIcon sx={cls.doubleArrow} />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            ) : null}
            <MediaButton />
        </motion.div>
    );
};
