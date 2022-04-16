import React from "react";

import Carousel from "../components/Carousel";
import {ComponentMeta} from "@storybook/react";

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Carousel',
    component: Carousel,
} as ComponentMeta<typeof Carousel>

const Template = (args: any) => (
    <Carousel autoplay={args.autoplay} gap={args.gap} interval={args.interval} slidesInViewport={args.slidesInViewport}>
        {args.children}
    </Carousel>
);
export const Example1 = Template.bind({});

// @ts-ignore
Example1.args = {
    slidesInViewport: 2,
    gap: true,
    children: [
        <div style={{
            flexFlow: "column", fontFamily: "Helvetica",
            background: 'crimson', color: 'white', padding: "2rem 1.5rem"
        }}>
            <h1>
                Flex box 1
            </h1>
            <p>
                This my text box, welcome to my text box,
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem consequatur cupiditate dignissimos
                doloribus maiores neque nihil numquam qui quod? Consequuntur expedita in laboriosam nobis recusandae
                vero
                voluptate? Ab autem consequatur dolores ipsa laboriosam minus non nulla quam voluptatibus. A autem
                delectus
                earum error hic laudantium nobis non nulla obcaecati, optio pariatur praesentium, quas quod sed tenetur
                ut
                vero voluptatibus.
            </p>
        </div>,
        <div style={{
            flexFlow: "column", fontFamily: "Helvetica",
            background: 'yellowgreen', color: 'white', padding: "2rem 1.5rem"
        }}>
            <h1>
                Flex box 1
            </h1>
            <p>
                This my text box, welcome to my text box,
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem consequatur cupiditate dignissimos
                doloribus maiores neque nihil numquam qui quod? Consequuntur expedita in laboriosam nobis recusandae
                vero
                voluptate? Ab autem consequatur dolores ipsa laboriosam minus non nulla quam voluptatibus. A autem
                delectus
                earum error hic laudantium nobis non nulla obcaecati, optio pariatur praesentium, quas quod sed tenetur
                ut
                vero voluptatibus.
            </p>
        </div>,
        <div style={{
            flexFlow: "column", fontFamily: "Helvetica",
            background: 'orangered', color: 'white', padding: "2rem 1.5rem"
        }}>
            <h1>
                Flex box 2
            </h1>
            <p>
                This my text box, welcome to my text box,
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem consequatur cupiditate dignissimos
                doloribus maiores neque nihil numquam qui quod? Consequuntur expedita in laboriosam nobis recusandae
                vero
                voluptate? Ab autem consequatur dolores ipsa laboriosam minus non nulla quam voluptatibus. A autem
                delectus
                earum error hic laudantium nobis non nulla obcaecati, optio pariatur praesentium, quas quod sed tenetur
                ut
                vero voluptatibus.
            </p>
        </div>,
        <div style={{
            flexFlow: "column", fontFamily: "monospace",
            background: 'black', color: 'white', padding: "2rem 1.5rem"
        }}>
            <h1>
                Flex box 3
            </h1>
            <p>
                This my text box, welcome to my text box,
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem consequatur cupiditate dignissimos
                doloribus maiores neque nihil numquam qui quod? Consequuntur expedita in laboriosam nobis recusandae
                vero
                voluptate? Ab autem consequatur dolores ipsa laboriosam minus non nulla quam voluptatibus. A autem
                delectus
                earum error hic laudantium nobis non nulla obcaecati, optio pariatur praesentium, quas quod sed tenetur
                ut
                vero voluptatibus.
            </p>
        </div>
    ]
};


const Example2Temp = (args: any) => {
    const list = [
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
            id: 3,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, explicabo! Lorem ipsum " +
                "dolor sit amet, consectetur adipisicing elit. Dolor enim error est expedita maxime omnis " +
                "pariatur placeat qui quo repudiandae.",
            color: "orange"
        },
        {
            id: 4,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, explicabo! Lorem ipsum " +
                "dolor sit amet, consectetur adipisicing elit. Dolor enim error est expedita maxime omnis " +
                "pariatur placeat qui quo repudiandae.",
            color: "purple"
        },
        {
            id: 5,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, explicabo! Lorem ipsum " +
                "dolor sit amet, consectetur adipisicing elit. Dolor enim error est expedita " +
                "maxime omnis pariatur placeat qui quo repudiandae.",
            color: "red"
        },
        {
            id: 6,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, explicabo! Lorem ipsum " +
                "dolor sit amet, consectetur adipisicing elit. Dolor enim error est expedita maxime omnis pariatur " +
                "placeat " +
                "qui quo repudiandae.",
            color: "black"
        },
        {
            id: 7,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, explicabo! Lorem ipsum " +
                "dolor sit amet, consectetur adipisicing elit. Dolor enim error est expedita maxime omnis pariatur " +
                "placeat " +
                "qui quo repudiandae.",
            color: "wheat"
        },
    ];


    return (
        <div className="container mx-auto py-32">
            <Carousel gap
                      slidesInViewport={args.slidesInViewport}
                      autoplay={args.autoplay}
                      interval={args.interval}>{
                list.map((each, key) => (
                    <div id={`carousel_${key}`} style={{
                        flexFlow: "column", fontFamily: "Helvetica, serif",
                        background: each.color, color: 'white', borderRadius: '20px', padding: "2rem 1.5rem"
                    }} key={key}>
                        <h1>
                            Flex box
                        </h1>
                        <p>
                            This my text box, welcome to my text box, {each.text} ,
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem consequatur cupiditate
                            dignissimos
                            doloribus maiores neque nihil numquam qui quod? Consequuntur expedita in laboriosam nobis
                            recusandae vero
                            voluptate? Ab autem consequatur dolores ipsa laboriosam minus non nulla quam voluptatibus. A
                            autem delectus
                            earum error hic laudantium nobis non nulla obcaecati, optio pariatur praesentium, quas quod
                            sed tenetur ut
                            vero voluptatibus.
                        </p>
                    </div>
                ))
            }
            </Carousel>
        </div>
    );
}

export const Example2 = Example2Temp.bind({})

// @ts-ignore
Example2.args = {
    slidesInViewport: {base: 1, md: 2, xl: 3, xxl: 4,},
    autoplay: true,
}

