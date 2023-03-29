import React from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import styles from './meetingManagement.module.scss';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z, string } from 'zod';
import { TextField } from '@mui/material';
import * as cls from './MeetingManagmentHelpers';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/system';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Toolbar } from '@mui/material';
import { Paper } from '@mui/material';

function CustomToolbar() {
    return (
        <Toolbar>
            <p>Custom Toolbar</p>
        </Toolbar>
    );
}

const multiSelectOptions = [
    { name: 'Wojtek' },
    { name: 'Kuba' },
    { name: 'Daniel' },
    { name: 'Mikolaj' },
];

const meetingSchema = z.object({
    title: z.string().min(1, { message: 'Enter the title' }),
    place: z.string().min(1, { message: 'Enter the place' }),
    date: z.date().min(new Date(), { message: 'Enter a future date' }),
    cover: z.string().min(1, { message: 'Provide an image URLaaaa' }),
});

export interface MeetingMProps {
    className?: string;
}

export const MeetingManagement = ({ className }: MeetingMProps) => {
    const { register, control, clearErrors, handleSubmit, formState, setError, setValue, watch } =
        useForm({
            defaultValues: {
                title: '',
                cover: '',
                date: null,
                place: '',
                recommender: '',
                multiSelect: [],
                gallery: [] as string[],
            },
            // resolver: zodResolver(meetingSchema),
        });

    const selectedFile = watch('cover');
    const selectedGallery = watch('gallery');
    const { errors } = formState;
    console.log(errors);

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

    const submitHandler = async (formValues: any) => {
        console.log(formValues);
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
                                            alt='Chosen cover'
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
                                />

                                {errors.title?.message && (
                                    <div className={styles.errorStyle}>{errors.title?.message}</div>
                                )}

                                <TextField
                                    {...register('place')}
                                    label="Place"
                                    variant="filled"
                                    sx={cls.formInputs}
                                />

                                <Controller
                                    control={control}
                                    name="date"
                                    render={({ field: { ref, ...restField } }) => (
                                        <DesktopDatePicker
                                            slotProps={{
                                                desktopPaper: {
                                                    sx: {
                                                        background: ' rgb(144, 136, 127)',
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
                                                    backgroundColor: 'rgba(120, 120, 120, 0.2)',
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
                                            {...restField}
                                            inputRef={ref}
                                            onChange={(date) => restField.onChange(date)}
                                        />
                                    )}
                                />

                                {/* <TextField
                                    {...register('date')}
                                    label="Date"
                                    variant="filled"
                                    sx={cls.formInputs}
                                    type="date"
                                /> */}

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
                                        <p className={styles.textAdd}>ADD</p>
                                        <p className={styles.textThe}>THE </p>
                                        <p className={styles.textMeeting}>MEETING</p>
                                    </div>
                                    <div>
                                        <KeyboardDoubleArrowRightIcon
                                            sx={{ fontSize: '70px', color: ' rgb(144, 136, 127);' }}
                                        />
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* <div className={styles.down}>
                            <div className={styles.downLeft}></div>
                            <div className={styles.downRight}>
                              
                            </div>
                        </div> */}
                    </div>
                </div>
            </form>
        </motion.div>
    );
};
