import {useEffect, useReducer, useRef} from "react";
import {useWindowSize} from "../../hooks/useWindowSize";
import {CarouselProps} from "./types";
import {styles} from "./style";
import {getNumberOfSlidesViewPort} from "./utils";


interface StateInterface{
    currentSlide: number,
    isLoading: boolean,
    slidesInVP: number,
}

interface ActionInterface{
    type: ActionEnum,
    payload: string | number | boolean,
}

enum ActionEnum {
    CHANGE_SLIDE,
    CHANGE_LOADING,
    CHANGE_SLIDE_IN_VP
}


const initialState:StateInterface = {
    currentSlide: 0,
    isLoading: false,
    slidesInVP: 1,
}


const reducer = (state:StateInterface, action: ActionInterface) => {
    switch (action.type){
        case ActionEnum.CHANGE_SLIDE:
            return {...state, currentSlide: action.payload}
        case ActionEnum.CHANGE_LOADING:
            return {...state, isLoading: action.payload}
        case ActionEnum.CHANGE_SLIDE_IN_VP:
            return {...state, slidesInVP: action.payload}
    }
}

type ReducerType = (previousState: StateInterface, action: ActionInterface) => any

export default function Carousel({children,
                                 slidesInViewport, 
                                 gap, 
                                 onLastSlide,
                                 async,
                                 infinite,
                                 autoplay,
                                 interval
                                 }: CarouselProps){

    const windowSize = useWindowSize();

    const [{currentSlide, isLoading, slidesInVP}, dispatch] = useReducer<ReducerType>(reducer, initialState)

    const ref = useRef<HTMLUListElement>(null)

    useEffect(()=>{
        dispatch({type: ActionEnum.CHANGE_SLIDE_IN_VP,
            payload: getNumberOfSlidesViewPort(slidesInViewport)})
    }, [slidesInViewport, windowSize.width])

    const changeSlide = (slide: number) => {
        dispatch({
            type: ActionEnum.CHANGE_SLIDE,
            payload: slide
        })
    }

    const toggleLoading = (loading: boolean) => {
        dispatch({
            type: ActionEnum.CHANGE_LOADING,
            payload: loading
        })
    }

    const canMoveForward = () => currentSlide < children.length - getNumberOfSlidesViewPort(slidesInViewport)

    const canMoveBackward = () => currentSlide !== 0

    const loopInfinity = () => infinite && !async

    const moveLeft = () => {
        if(canMoveBackward()){
            changeSlide(currentSlide - 1);
        }else if(loopInfinity()){
                changeSlide(0);
            }
    }

    const moveRight = async () => {

        if(canMoveForward()){
            changeSlide(currentSlide + 1);
        }else{
            if(onLastSlide){
                toggleLoading(true);
                onLastSlide().then(()=>{
                    toggleLoading(false)
                    if(currentSlide < children.length){
                        changeSlide(currentSlide + 1);
                    }
                });
            }
            else{
                changeSlide(0);
            }
        }
    }

    const getSlideWidth = () => {
        return  100 / slidesInVP
    }

    const getMovement = () => {
        return getSlideWidth() * currentSlide;
    }
    
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
        
    }, [autoplay, currentSlide, interval])


    return(
        <div style={styles.root}>
            <div style={styles.carousel}>
                <div style={styles.wrapper}>
                    <ul ref={ref} style={{...styles.slider, transform: `translate3D(-${getMovement()}%, 0, 0)`}}>
                        {
                            children.map((each, key) => (
                                <li style={{...styles.slide, boxSizing:
                                        "border-box", flex: `0 0 ${100 / slidesInVP}%`,
                                    padding: gap ? ' 0 1rem': '0',

                                }} key={key}>
                                    {each}
                                </li>
                            ))
                        }

                    </ul>

                </div>
                <button disabled={isLoading} onClick={moveRight} style={{...styles.sliderButton, right: 0}}>
                    {">"}
                    {isLoading && 'Loading'}
                </button>
                <button onClick={moveLeft} style={{...styles.sliderButton, left: 0}}>
                    {"<"}
                </button>
            </div>
        </div>
    )
}