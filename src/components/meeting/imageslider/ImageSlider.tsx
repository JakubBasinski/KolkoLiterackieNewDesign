import React, { CSSProperties } from 'react';
import { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import CircleIcon from '@mui/icons-material/Circle';

interface Props {
    slides: string[];
}
export const ImageSlider = ({ slides }: Props) => {
    const y = useMotionValue(0);
    const x = useMotionValue(0);
    const backgroundX = useTransform(x, [0, window.innerWidth], ['0%', '100%']);
    const backgroundY = useTransform(y, [0, window.innerHeight], ['0%', '100%']);

    const [currentIndex, setCurrentIndex] = useState(0);
    const goPrev = () => {
        const isFirst = currentIndex === 0;
        const newIndex = isFirst ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (id: number) => {
        setCurrentIndex(id);
    };

    const goNext = () => {
        const isLast = currentIndex === slides.length - 1;
        const newIndex = isLast ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const sliderStyles: CSSProperties = {
        height: '100%',
        position: 'relative',
    };

    const leftArrowStyles: CSSProperties = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '20px',
        fontSize: '30px',
        color: 'white',
        zIndex: 1,
        cursor: 'pointer',
    };

    const rightArrowStyles: CSSProperties = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '20px',
        fontSize: '30px',
        color: 'white',
        zIndex: 1,
        cursor: 'pointer',
    };

    const containerDots: CSSProperties = {
        width: '100%',
        display: 'flex',
        position: 'absolute',
        transform: 'translate(50%,0)',
        bottom: '0px',
        gap: '5px',
    };

    const dot: CSSProperties = {
        cursor: 'pointer',
        color: 'grey',
    };

    const currentDot: CSSProperties = {
        cursor: 'pointer',
    };

    return (
        <div style={sliderStyles}>
            {slides.length > 1 && (
                <div style={leftArrowStyles} onClick={goPrev}>
                    &lt;
                </div>
            )}

            <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                style={{
                    backgroundImage: `url(${slides[currentIndex]})`,
                    backgroundSize: 'cover',
                    backgroundPositionX: backgroundX,
                    backgroundPositionY: backgroundY,
                    width: '100%',
                    height: '100%',
                    cursor: 'grab',
                }}
                whileTap={{
                    cursor: 'grabbing',
                }}
                whileDrag={{
                    cursor: 'grabbing',
                }}
                dragElastic={0}
                onDrag={(event, info) => {
                    x.set(2 * -info.offset.x);
                    y.set(4 * -info.offset.y);
                }}
            ></motion.div>
            {slides.length > 1  && (
                <div style={rightArrowStyles} onClick={goNext}>
                    &gt;
                </div>
            )}

            <div style={containerDots}>
                {slides.map((slide, slideIndex) => (
                    <div
                        style={slideIndex === currentIndex ? currentDot : dot}
                        key={slideIndex}
                        onClick={() => {
                            goToSlide(slideIndex);
                        }}
                    >
                        <CircleIcon
                            sx={{
                                height: '12px',
                                width: '12px',
                                marginBottom: '5px',
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
