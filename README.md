<div align="center">
<img src="public/logo.png" height="150"/>
<h1>
react-slider
</h1>

<p>
React based carousel slider, with async forward loading
</p>
</div>


## Features 🎆

1. Responsive carousel slider
2. Multiple slides in slide window
3. Autoplay with interval control
4. No need to add any stylesheet
5. Lightweight
## Docs


## Example 1

```jsx
import Carousel from "react-slider";


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
