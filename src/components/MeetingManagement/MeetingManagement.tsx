import classNames from 'classnames';
import styles from './meetingManagement.module.scss';
import React from 'react';
import { motion } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { TextField } from '@mui/material';
import * as cls from './MeetingManagmentHelpers';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { DesktopDatePicker } from '@mui/x-date-pickers/';
import { useContext, useState } from 'react';
import DisplayContext from '../../store/display-context';
import { MeetingInterface } from '../../utils/fakeapi';
import { MeetingsListToEdit } from './MeetingsListToEdit';
import { useParams } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const multiSelectOptions = [
    { name: 'Wojtek' },
    { name: 'Kuba' },
    { name: 'Mikolaj' },
    { name: 'Daniel' },
];

const meetingSchema = z.object({
    title: z.string().min(1, { message: 'Enter the title' }),
    place: z.string().min(1, { message: 'Enter the place' }),
    date: z.any().optional(),
    cover: z.string().min(1, { message: 'Provide a cover' }),
    gallery: z.array(z.string()).max(4, { message: '4 photos maximum' }),
    recommender: z.string().optional(),
    multiSelect: z.array(z.string()).optional(),
});

export interface MeetingMProps {
    className?: string;
}

export const MeetingManagement = ({ className }: MeetingMProps) => {
    const { addingMeetingData, fakeMeetingsData, editMeetingData } = useContext(DisplayContext);
    const [selectedMeetingId, setSelected] = useState<number | null>(null);
    const { action } = useParams();

    const initialValues = {
        title: '',
        cover: '',
        date: null,
        place: '',
        recommender: '',
        multiSelect: [],
        gallery: [] as string[],
    };

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
        if (action === 'edit' && selectedMeetingId) {
            const updatedMeeting: MeetingInterface = {
                id: selectedMeetingId,
                gallery: data.gallery || [],
                book: data.title,
                date: data.date || '',
                literats: data.multiselect || [],
                place: data.place || '',
                cover: data.cover || '',
            };
            const selectedMeeting = fakeMeetingsData.find((m) => m.id === selectedMeetingId);
            if (selectedMeeting) {
                editMeetingData(selectedMeeting, updatedMeeting);
            }
            return;
        }

        const newMeeting: MeetingInterface = {
            id: Math.floor(Math.random() * 1001),
            gallery: data.gallery || [],
            book: data.title,
            date: data.date || '',
            literats: data.multiselect || [],
            place: data.place || '',
            cover: data.cover || '',
        };
        console.log('nonono');
        addingMeetingData(newMeeting);
    };

    return (
        <motion.div
            className={classNames(styles.root, className)}
            initial={{ x: -window.innerWidth, opacity: 0, display: 'none' }}
            animate={{ x: 0, opacity: 1, transition: { delay: 1, duration: 0.5 }, display: 'flex' }}
            exit={{ x: window.innerWidth, opacity: 0, transition: { duration: 0.5 } }}
        >
            {/* <div className={styles.container}>
                <div className={styles.photoWrapper}>
                    <img
                        src="/images/gallery/1.png"
                        alt=" 1"
                        id="photo-left"
                        className={styles.photo}
                    />
                </div>
            </div> */}

            {action === 'edit' && (
                <MeetingsListToEdit selectMeetingHandler={hadnleSelectMeeting} resetForm={reset} />
            )}

            {action === 'edit' && selectedMeetingId === null && (
                <h1>Select a meeting to start editing</h1>
            )}

            {action === 'add' || (action === 'edit' && selectedMeetingId !== null) ? (
                <form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
                    <div className={styles.meetingForm}>
                        <h2 className={styles.formTitle}>Book details</h2>

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
                                        <Box
                                            sx={{
                                                height: '200px',
                                                width: '200px',
                                                borderRadius: '10px',
                                                color: ' rgb(144, 136, 127)',
                                                border: 'dashed 2px rgb(144, 136, 127) ',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
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
                                        <Box
                                            sx={{
                                                height: '200px',
                                                width: '200px',
                                                borderRadius: '10px',
                                                color: ' rgb(144, 136, 127)',
                                                border: 'dashed 2px rgb(144, 136, 127) ',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
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
                                                    slotProps={{
                                                        desktopPaper: {
                                                            sx: {
                                                                background: ' rgb(144, 136, 127)',
                                                            },
                                                        },

                                                        day: {
                                                            sx: {
                                                                '&.Mui-selected': {
                                                                    backgroundColor:
                                                                        'rgb(126, 98, 66)',
                                                                    color: 'white',
                                                                    '&:focus': {
                                                                        backgroundColor:
                                                                            'rgb(126, 98, 66)',
                                                                        color: 'white',
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    }}
                                                    showDaysOutsideCurrentMonth
                                                    sx={{
                                                        width: '100%',
                                                        '& .MuiInputBase-input ': {
                                                            backgroundColor: 'transparent',
                                                            color: '#806e59',
                                                            border: 'solid 1px #806e59',
                                                        },

                                                        '& .MuiPickersPopper-root': {
                                                            backgroundColor:
                                                                'rgba(120, 120, 120, 0.2)',
                                                        },

                                                        '& .MuiOutlinedInput-root': {
                                                            '& fieldset': {
                                                                borderColor: '#806e59',
                                                            },
                                                            '&:hover fieldset': {
                                                                borderColor: '#806e59',
                                                            },
                                                            '&.Mui-focused fieldset': {
                                                                borderColor: '#806e59',
                                                            },
                                                        },
                                                    }}
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
                                                MenuProps={{
                                                    PaperProps: {
                                                        sx: {
                                                            backgroundColor: ' #191312',
                                                        },
                                                    },
                                                }}
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
                                                        sx={{
                                                            color: 'rgb(126, 98, 66)',
                                                            backgroundColor: 'transparent',
                                                            '&. Mui-selected': {
                                                                color: 'rgb(126, 98, 66)',
                                                            },
                                                        }}
                                                        value={option.name}
                                                    >
                                                        {option.name}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        )}
                                    />
                                    <button className={styles.submitButton}>
                                        <div className={styles.addWrapper}>
                                            <p className={styles.textAdd}>
                                                {action?.toLocaleUpperCase()}
                                            </p>
                                            <p className={styles.textThe}>THE </p>
                                            <p className={styles.textMeeting}>MEETING</p>
                                        </div>
                                        <div>
                                            <KeyboardDoubleArrowRightIcon
                                                sx={{
                                                    fontSize: '70px',
                                                    color: ' rgb(144, 136, 127);',
                                                }}
                                            />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            ) : null}
        </motion.div>
    );
};
