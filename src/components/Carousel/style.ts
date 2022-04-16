import {SlideMovement, StyleInterface} from "./types";
import {CSSProperties} from "react";

export const styles: StyleInterface = {
    root: {
        outline: 'none',
        boxSizing: 'border-box',
        position: 'relative'
    },
    wrapper: {
        overflow: 'hidden',
        margin: 'auto',
        width: '100%',
        boxSizing: 'border-box',
    },
    slider: {
        display: 'flex',
        margin: 0,
        padding: 0,
        position: 'relative',
        listStyle: 'none',
        boxSizing: 'border-box',
        width: '100%',
    },
    slide: {
        margin: 0,
        position: 'relative',
        width: '100%',

    },
    sliderButton: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        padding: "1.25rem 1.5rem",
        background: "transparent",
        color: "white",
        border: 'none',
        borderRadius: '50%'
    },
    sliderIcon: {
        fill: 'none',
        stroke: 'currentColor',
        strokeLinecap: 'square',
        strokeWidth: '8px',
        height: '2rem',
        verticalAlign: 'middle',
        width: '2rem',
        cursor: 'pointer'
    }
}

export const carouselSliding = (direction: SlideMovement, movement?:number):CSSProperties => (
    direction === "forward" ? {transform: `translateX(${movement}%)`} : {transform: `translateX(-${movement}%)`}
)

export const carouselNotSliding:CSSProperties = {
    transform: 'none',
    transition: 'transform .5s cubic-bezier(0.23, 1, 0.32, 1)',
}