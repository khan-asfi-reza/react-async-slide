<div align="center">
<img src="public/logo.png" height="150"/>
<h1>
React-Async-Slide
</h1>

<p>
React based carousel slider, with async forward loading
</p>
</div>


## Features 🎆

1. Responsive carousel slider
2. Multiple slides in slide window
3. Async slide loading on moving forward

## Docs


## Example 1

```jsx
import Carousel from "react-async-slide";


<Carousel
    gap
    slidesInViewport={2}
>
    <div
        style={{
            background: 'crimson',
            color: 'white',
            flexFlow: 'column',
            fontFamily: 'Helvetica',
            padding: '2rem 1.5rem'
        }}
    >
        <h1>
            Flex box 1
        </h1>
        <p>
            This my text box, welcome to my text box, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem consequatur cupiditate dignissimos doloribus maiores neque nihil numquam qui quod? Consequuntur expedita in laboriosam nobis recusandae vero voluptate? Ab autem consequatur dolores ipsa laboriosam minus non nulla quam voluptatibus. A autem delectus earum error hic laudantium nobis non nulla obcaecati, optio pariatur praesentium, quas quod sed tenetur ut vero voluptatibus.
        </p>
    </div>
    <div
        style={{
            background: 'yellowgreen',
            color: 'white',
            flexFlow: 'column',
            fontFamily: 'Helvetica',
            padding: '2rem 1.5rem'
        }}
    >
        <h1>
            Flex box 1
        </h1>
        <p>
            This my text box, welcome to my text box, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem consequatur cupiditate dignissimos doloribus maiores neque nihil numquam qui quod? Consequuntur expedita in laboriosam nobis recusandae vero voluptate? Ab autem consequatur dolores ipsa laboriosam minus non nulla quam voluptatibus. A autem delectus earum error hic laudantium nobis non nulla obcaecati, optio pariatur praesentium, quas quod sed tenetur ut vero voluptatibus.
        </p>
    </div>
    <div
        style={{
            background: 'orangered',
            color: 'white',
            flexFlow: 'column',
            fontFamily: 'Helvetica',
            padding: '2rem 1.5rem'
        }}
    >
        <h1>
            Flex box 2
        </h1>
        <p>
            This my text box, welcome to my text box, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem consequatur cupiditate dignissimos doloribus maiores neque nihil numquam qui quod? Consequuntur expedita in laboriosam nobis recusandae vero voluptate? Ab autem consequatur dolores ipsa laboriosam minus non nulla quam voluptatibus. A autem delectus earum error hic laudantium nobis non nulla obcaecati, optio pariatur praesentium, quas quod sed tenetur ut vero voluptatibus.
        </p>
    </div>
    <div
        style={{
            background: 'black',
            color: 'white',
            flexFlow: 'column',
            fontFamily: 'monospace',
            padding: '2rem 1.5rem'
        }}
    >
        <h1>
            Flex box 3
        </h1>
        <p>
            This my text box, welcome to my text box, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem consequatur cupiditate dignissimos doloribus maiores neque nihil numquam qui quod? Consequuntur expedita in laboriosam nobis recusandae vero voluptate? Ab autem consequatur dolores ipsa laboriosam minus non nulla quam voluptatibus. A autem delectus earum error hic laudantium nobis non nulla obcaecati, optio pariatur praesentium, quas quod sed tenetur ut vero voluptatibus.
        </p>
    </div>
</Carousel>
```

## Example 2 With Async Data Loading

```jsx

export const MyApp = () => {
    const wait = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

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

    ]);


    return (
        <div className="container mx-auto py-32">
            <Carousel  gap slidesInViewport={{
                base: 1,
                md: 2,
                xl: 3,
                xxl: 4,
            }} infinite async onLastSlide={async ()=>{
                await wait(2000);
                setList([...list, {
                    id: 3,
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, explicabo! " +
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor enim error est expedita " +
                        "maxime omnis pariatur placeat qui quo repudiandae.",
                    color: "crimson"
                }])
            }}
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

```