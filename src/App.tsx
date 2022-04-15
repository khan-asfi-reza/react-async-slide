import React, {useEffect, useRef, useState} from 'react';
import Carousel from "./components/Carousel";

const wait = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function App() {
    const [list, setList] = useState([
        {
            id: 1,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, explicabo! " +
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor enim error est expedita " +
                "maxime omnis pariatur placeat qui quo repudiandae.",
            color: "orangered"
        },
        {
            id: 2,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, explicabo! " +
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor enim error est expedita " +
                "maxime omnis pariatur placeat qui quo repudiandae.",
            color: "crimson"
        },
        {
            id: 2,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, explicabo! Lorem ipsum " +
                "dolor sit amet, consectetur adipisicing elit. Dolor enim error est expedita maxime omnis " +
                "pariatur placeat qui quo repudiandae.",
            color: "orange"
        },
        {
            id: 2,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, explicabo! Lorem ipsum " +
                "dolor sit amet, consectetur adipisicing elit. Dolor enim error est expedita maxime omnis " +
                "pariatur placeat qui quo repudiandae.",
            color: "purple"
        },
        {
            id: 2,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, explicabo! Lorem ipsum " +
                "dolor sit amet, consectetur adipisicing elit. Dolor enim error est expedita " +
                "maxime omnis pariatur placeat qui quo repudiandae.",
            color: "red"
        },
        {
            id: 2,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, explicabo! Lorem ipsum " +
                "dolor sit amet, consectetur adipisicing elit. Dolor enim error est expedita maxime omnis pariatur " +
                "placeat " +
                "qui quo repudiandae.",
            color: "black"
        },
        {
            id: 2,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, explicabo! Lorem ipsum " +
                "dolor sit amet, consectetur adipisicing elit. Dolor enim error est expedita maxime omnis pariatur " +
                "placeat " +
                "qui quo repudiandae.",
            color: "wheat"
        },
    ]);


    return (
        <div className="container mx-auto py-32">
            <Carousel  gap slidesInViewport={{
                base: 1,
                md: 2,
                xl: 3,
                xxl: 4,
            }} infinite
            >{
                    list.map((each, key) => (
                        <div id={`carousel_${key}`} style={{flexFlow: "column",
                            background: each.color, color: 'white', fontFamily: "sans-serif", padding: "2rem 1.5rem"}} key={key}>
                            <h1 >
                                Flex box
                            </h1>
                            <p >
                                This my text box, welcome to my text box, {each.text} ,
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem consequatur cupiditate dignissimos
                                doloribus maiores neque nihil numquam qui quod? Consequuntur expedita in laboriosam nobis recusandae vero
                                voluptate? Ab autem consequatur dolores ipsa laboriosam minus non nulla quam voluptatibus. A autem delectus
                                earum error hic laudantium nobis non nulla obcaecati, optio pariatur praesentium, quas quod sed tenetur ut
                                vero voluptatibus.
                            </p>
                        </div>
                    ))
                }
            </Carousel>
        </div>
    );
}

export default App;
