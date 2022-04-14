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
    onLastSlide?: any,
    infinite?: boolean,
    async?: boolean,
    autoplay?:boolean,
    interval?:number
}