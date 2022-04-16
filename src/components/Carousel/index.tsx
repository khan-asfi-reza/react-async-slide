import {CSSProperties, useCallback, useEffect, useReducer, useRef} from "react";
import {useWindowSize} from "../../hooks/useWindowSize";
import {CarouselProps, SlideMovement} from "./types";
import {carouselNotSliding, carouselSliding, styles} from "./style";
import {getNumberOfSlidesViewPort} from "./utils";


interface StateInterface{
    currentSlide: number,
    slidesInVP: number,
    carouselStyle: CSSProperties
}

interface ActionInterface{
    type: ActionEnum,
    payload: string | number | boolean | CSSProperties,
}

enum ActionEnum {
    CHANGE_SLIDE,
    CHANGE_SLIDE_IN_VP,
    CHANGE_CAROUSEL_STYLE
}


const initialState:StateInterface = {
    currentSlide: 0,
    slidesInVP: 1,
    carouselStyle: carouselNotSliding
}


const reducer = (state:StateInterface, action: ActionInterface) => {
    switch (action.type){
        case ActionEnum.CHANGE_SLIDE:
            return {...state, currentSlide: action.payload}
        case ActionEnum.CHANGE_SLIDE_IN_VP:
            return {...state, slidesInVP: action.payload}
        case ActionEnum.CHANGE_CAROUSEL_STYLE:
            return {
                ...state, carouselStyle: action.payload
            }
    }
}

type ReducerType = (previousState: StateInterface, action: ActionInterface) => any

/**
 * Async Carousel Component
 * @param {ReactChild[]}children - Elements inside the carousel / Carousel Slides
 * @param {number | SlideNumberOption}slidesInViewport - Number of slides in the viewport that will be shown
 * @param {boolean} gap - Will show gap between slides
 * @param {PromiseLike} onSlideChange - Async Function that will be executed when the carousel will go to the last slide
 * @param {boolean}autoplay - Autoplay the carousel
 * @param {boolean}interval - After how many millisecond the slide will move forward
 * @param buttonClassName - Carousel buttons classname property to edit styles
 **/
export default function Carousel({children,
                                 slidesInViewport,
                                 gap, 
                                 onSlideChange,
                                 autoplay,
                                 interval,
                                 buttonClassName
                                 }: CarouselProps){

    // Window Size hook to observe window size change
    const windowSize = useWindowSize();

    // Carousel state and state dispatch function
    const [
        {currentSlide,
        slidesInVP,
        carouselStyle}, dispatch] = useReducer<ReducerType>(reducer, initialState)

    // Slider Reference
    const ref = useRef<HTMLUListElement>(null)

    // Returns List of <li> slide elements
    const slideChildrenArray = () => (
        Array.from(ref.current!.children as HTMLCollectionOf<HTMLElement>)
    )

    // Returns Singular Slide
    const getElementFromArray = useCallback((index: number) => (
        slideChildrenArray()[index]
    ), [])

    // Change current slide that is visible / active
    const changeSlideState = (slide: number) => {
        dispatch({
            type: ActionEnum.CHANGE_SLIDE,
            payload: slide
        })
    }

    // Returns the next slide index, if active slide is the last element in the slider, then return the first slide id
    const nextSlide = useCallback((slide: number) => (
        slide < children.length - 1 ? slide + 1 : 0
    ), [children.length])

    // Returns previous slide index, if active slide is the first element in the slider, then return the last slide id
    const previousSlide = useCallback((slide: number) => (
        slide === 0 ? children.length - 1 : slide - 1
    ), [children.length])

    // This function has a direction so that movement functionality can be called via one function
    const getSlide = useCallback((direction: SlideMovement, slide: number) => (
        direction === 'forward' ? nextSlide(slide) : previousSlide(slide)
    ), [nextSlide, previousSlide])

    // If there are multiple slide in the viewport,
    // then the slide width will be calculated = 100% / Slides in the viewport
    const getSlideWidth = useCallback(() => {
        return  100 / slidesInVP
    }, [slidesInVP])

    // Move slide to front or back
    const moveSlide = useCallback((direction: SlideMovement) => {
        // Get the current active slide
        let current = getSlide(direction, currentSlide);
        // Get the current active slide element
        const element = getElementFromArray(current);
        // Change order to 1 to move the current active slide backward/out of the viewport
        element.style.order = '1';
        let i:number, j:number, elem: number;
        let slide = getSlide('forward', current);
        // Assign css order to create a rotating effect
        for (i = j = 2, elem = children.length; (2 <= elem ? j <= elem : j >= elem); i = 2 <= elem ? ++j : --j) {
            const elm = getElementFromArray(slide);
            elm.style.order = i.toString();
            slide = getSlide('forward', slide);
        }
        // Change active slide
        changeSlideState(current);
        // Animate movement
        dispatch({
            type: ActionEnum.CHANGE_CAROUSEL_STYLE,
            payload: carouselSliding(direction, getSlideWidth()),
        })
        // Stop animate
        setTimeout(()=>{
            dispatch({
                type: ActionEnum.CHANGE_CAROUSEL_STYLE,
                payload: carouselNotSliding,
            })
            if (onSlideChange) {
                onSlideChange();
            }
        }, 50)
    }, [children.length, currentSlide, getElementFromArray, getSlide, getSlideWidth, onSlideChange])
    
    // Slide move left or backward
    const moveLeft = () => {
        moveSlide('backward')
    }

    // Slide Move right or forward
    const moveRight = useCallback(() => {
        moveSlide('forward')
    }, [moveSlide])

    

    useEffect(()=>{
        
        let timeout: NodeJS.Timeout;
        if(autoplay){
            timeout = setTimeout(()=>{
                moveRight()
            }, interval ? interval : 3000)
        }
        return ()=>{
            clearTimeout(timeout);
        }
        
    }, [autoplay, currentSlide, interval, moveRight])


    useEffect(()=>{
        dispatch({type: ActionEnum.CHANGE_SLIDE_IN_VP,
            payload: getNumberOfSlidesViewPort(slidesInViewport)})
    }, [slidesInViewport, windowSize.width])


    useEffect(()=>{
        changeSlideState(children.length - 1);
        const element = getElementFromArray(children.length - 1);
        slideChildrenArray().forEach(each => {
            if (each === element){
                each.style.order = '1'
            }else{
                each.style.order = '2';
            }
        })
    }, [children.length, getElementFromArray])


    return(
        <div style={styles.root}>
            <div style={styles.wrapper}>
                <ul data-testid={"carousel"} className={autoplay ? 'autoplay': ''} ref={ref} style={{...styles.slider, ...carouselStyle, left: `-${getSlideWidth()}%`}}>
                    {
                        children.map((each, key) => (
                            <li tabIndex={key} className={currentSlide === key ? 'active': ''} style={{...styles.slide, boxSizing: "border-box", flex: `0 0 ${100 / slidesInVP}%`,
                                padding: gap ? ' 0 1rem': '0',
                            }} key={key}>
                                {each}
                            </li>
                        ))
                    }

                </ul>
            </div>
            <button id={"carousel_next"} data-testid={"next"} onClick={moveRight}
                    style={{...styles.sliderButton, right: 0}}
                    className={buttonClassName}>
                <svg xmlns="http://www.w3.org/2000/svg" style={styles.sliderIcon} viewBox="0 0 40 40" width="20" height="20">
                    <path d="m13.5 7.01 13 13m-13 13 13-13"/>
                </svg>
            </button>
            <button id={"carousel_prev"} data-testid={"prev"} onClick={moveLeft}
                    style={{...styles.sliderButton, left: 0}}
                    className={buttonClassName}>
                <svg xmlns="http://www.w3.org/2000/svg" style={{...styles.sliderIcon, transform: 'scaleX(-1)'}} viewBox="0 0 40 40" width="20" height="20">
                    <path d="m13.5 7.01 13 13m-13 13 13-13"/>
                </svg>
            </button>
        </div>
    )
}