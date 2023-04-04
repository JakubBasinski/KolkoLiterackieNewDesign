import styles from './gallery.module.scss';
import classNames from 'classnames';
import React, { useContext, useState, useEffect, useCallback } from 'react';
import DisplayContext from '../../store/display-context';
import styled, { keyframes } from 'styled-components';
import { Selected } from './Selected';

const RTL = keyframes`
     0% {
      right: 0;
      opacity: 0;
    }
    15% {
      opacity: 1;
    }
    45% {
      right: 100%;
      opacity: 0.1;
    }
    50% {
     right: 100%;
      opacity: 0;
      transform: translateX(0%);
    }
    85% {
        opacity: 1;
    }

    95% {
      opacity: 0.1;
      right: 0;
    }
    100% {
      right: 0;
      opacity: 0;
    }`;

const LTR = keyframes`
    0% { 
  
      left: 0 ;
      opacity: 0;
    }
    15% {
      opacity: 1;
    }
    45% {
      left: 100%;
      opacity: 0.1;
      transform: translateX(0%);
    }
    50% {
      left: 100%;
      opacity: 0;
    }
    85% {
        opacity: 1;
    }

    95% {
      opacity: 0.1;
      left: 0;
    }
    100% {
      left: 0;
      opacity: 0;
    }
`;

const ImageWrapperDivLTR = styled.div<{ delay: number; duration: number }>`
    position: absolute;
    transition: all 1s ease-in-out;
    height: 230px;
    animation: ${LTR} ${(props) => props.duration}s ease-in-out infinite;
    animation-delay: ${(props) => props.delay}s;
    opacity: 0;
    transform: translateX(-100%);
    &:hover {
   
        animation-play-state: paused;
        z-index: 100;
        opacity: 1 !important;
    }
`;

const ImageWrapperDivRTL = styled.div<{ delay: number; duration: number }>`
    transform: translateX(100%);
    position: absolute;
    transition: all 1s ease-in-out;
    height: 230px;
    flex-wrap: wrap; /* Allow text to wrap onto multiple lines */
    word-wrap: break-word;
    overflow-wrap: break-word;
    animation: ${RTL} ${(props) => props.duration}s ease-in-out  infinite;
    animation-delay: ${(props) => props.delay}s;
    opacity: 0;
    &:hover {

        animation-play-state: paused;
        z-index: 100;
        opacity: 1 !important;

    }
`;

const AfterElementWrapper = styled.div<{ place: string | undefined; date: string | undefined }>`
    position: relative;
    line-height: 0;

    &:hover {
        -webkit-box-shadow: 0 0 17px 3px rgb(181, 179, 178), 0 0 4px 2px rgb(181, 179, 178);
        -webkit-box-shadow: 0 0 17px 3px rgb(181, 179, 178), 0 0 4px 2px rgb(181, 179, 178);
        border-radius: 5px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        -ms-border-radius: 5px;
        -o-border-radius: 5px;

        ::after {
            content: '${(props) => props.date}';
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 50%;
            background-color: transparent;
            padding-bottom: 5%;
            transform: translate(-50%, -50%);

            color: #e6e6e6;
        }
        ::before {
            content: '${(props) => props.place}';
            width: 100%;
            position: absolute;
            top: 0%;
            left: 50%;
            transform: translateX(-50%);
            padding-top: 5%;
        }
    }
`;

const ImageLTR = styled.img`
    height: 230px;
`;

const ImageRTL = styled.img`
    height: 230px;
`;

interface MeetingMenuProps {
    className?: string;
}

export const Gallery = React.memo(({ className }: MeetingMenuProps) => {
    const displayContext = useContext(DisplayContext);
    const { fakeMeetingsData } = displayContext;
    const [galleryData, setGalleryData] = useState([]);
    let galleryDataPict: any = [];

    console.log(galleryData);

    useEffect(() => {
        fakeMeetingsData.map((galleryData) => {
            return galleryData.gallery.forEach((galleryItem) => {
                galleryDataPict.push({ photo: galleryItem, prentId: galleryData.id });
            });
        });

        setGalleryData(galleryDataPict);
    }, []);

    return (
        <div className={styles.root}>
            <div className={styles.galleryWrapper}>
                {galleryData.map((item: any, index: number) =>
                    index % 2 !== 0 ? (
                        <ImageWrapperDivLTR
                            key={index}
                            style={{
                                // transform: 'translateY(-100%)',
                                top:
                                    Math.floor(Math.random() * 2) > 0
                                        ? Math.random() * 250
                                        : -Math.random() * 450,
                                left: 0,
                            }}
                            delay={index - 1}
                            duration={60 - Math.floor(Math.random() * 20)}
                        >
                            <AfterElementWrapper
                                place={fakeMeetingsData.find((e) => e.id === item.prentId)?.place}
                                date={fakeMeetingsData.find((e) => e.id === item.prentId)?.date}
                            >
                                <ImageLTR src={item.photo} alt={item.alt} />
                            </AfterElementWrapper>
                        </ImageWrapperDivLTR>
                    ) : (
                        <ImageWrapperDivRTL
                            key={index}
                            style={{
                                // transform: 'translateY(-100%)',
                                top:
                                    Math.floor(Math.random() * 2) > 0
                                        ? Math.random() * 250
                                        : -Math.random() * 450,
                                right: 0,
                            }}
                            delay={index - 1}
                            duration={60 - Math.floor(Math.random() * 20)}
                        >
                            <AfterElementWrapper
                                place={fakeMeetingsData.find((e) => e.id === item.prentId)?.place}
                                date={fakeMeetingsData.find((e) => e.id === item.prentId)?.date}
                            >
                                <ImageRTL src={item.photo} alt={item.alt} />
                            </AfterElementWrapper>
                        </ImageWrapperDivRTL>
                    )
                )}
                {/* {galleryData.map((item: any, index: number) =>
                    index % 2 !== 0 ? (
                        <ImageLTR
                            style={{
                                // transform: 'translateY(-100%)',
                                top:
                                    Math.floor(Math.random() * 2) > 0
                                        ? Math.random() * 250
                                        : -Math.random() * 450,
                                left: 0,
                            }}
                            src={item}
                            alt={item.alt}
                            delay={index - 1}
                            duration={90 - Math.floor(Math.random() * 20)}
                        />
                    ) : (
                        <ImageRTL
                            style={{
                                // transform: 'translateY(-100%)',
                                top:
                                    Math.floor(Math.random() * 2) > 0
                                        ? Math.random() * 250
                                        : -Math.random() * 450,
                                right: 0,
                            }}
                            src={item}
                            alt={item.alt}
                            delay={index - 1}
                            duration={90 - Math.floor(Math.random() * 20)}
                        />
                    )
                )} */}
            </div>
        </div>
    );
});
