import {CSSProperties, ReactChild} from "react";

export interface StyleInterface {
    [key: string]: CSSProperties
}

export interface SlideNumberOption {
    xxl?: number,
    xl?: number,
    lg?: number,
    md?: number,
    sm?: number,
    xs?: number,
    base: number,
}

export interface CarouselProps {
    children: ReactChild[],
    slidesInViewport?: number | SlideNumberOption,
    gap?: boolean,
    onSlideChange?(): any,
    autoplay?:boolean,
    interval?:number,
    buttonClassName?:string,
}

export type SlideMovement = 'forward' | 'backward'