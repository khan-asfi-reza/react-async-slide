### This project is deprecated ⚠️
<div align="center">
<img src="public/logo.png" height="150" alt=""/>
<h1>
react-slider [deprecated ⚠️]
</h1>
<img src="https://github.com/khan-asfi-reza/react-slider/actions/workflows/test.yaml/badge.svg" alt=""/>
<p>
React based lightweight carousel slider
</p>
</div>

New version

[React-Blaze-Carouse](https://www.github.com/khan-asfi-reza/react-blaze-carousel)

## Features 🎆

1. Responsive carousel slider
2. Multiple slides in slide window
3. Autoplay with interval control
4. No need to add any stylesheet
5. Lightweight

## Docs 📕


### Props & Options

|      Props       |                 Description                 |             Type             |
|:----------------:|:-------------------------------------------:|:----------------------------:|
|     children     |               Carousel slides               |        `ReactChild[]`        |
| slidesInViewport |      Number of slides in the viewport       | `number / SlideNumberOption` |
|       gap        |             Gap between slides              |          `boolean`           |
|  onSlideChange   |  Function to execute on each slide change   |     ` Function / method`     |
|     autoplay     | If the carousel needs to play automatically |          ` boolean`          |
|     interval     |    Interval of slide change for autoplay    |           `number`           |
| buttonClassName  |        slide change button classname        |           `string`           |
* `gap`
If gap is true there will be gap between slides


* `onSlideChange`
On slide change event will be executed when one slide will be changed

* `autoplay`
Carousel to move to next slide automatically


* `children`
    React Child Nodes, basically list of components, that will act as slide

* `interval`
Interval between autoplay, to interval work, `autoplay` must be `true`

* `buttonClassName`
Slide change button classname


* `slidesInViewport`
    How many slides will be shown in the viewport, it can be a number or an object of breakpoints
```jsx
    <Carousel 
    slidesInViewport={{
        xxl: 6,
        xl: 5,
        lg: 4,
        md: 3,
        sm: 2,
        xs: 1,
        base: 1  
  }}>
    ...
    </Carousel>
  ```

the breakpoint option, not each one is required

| Keys |    Description    | 
|:----:|:-----------------:|
| xxl  | min-width(1400px) |    
|  xl  | min-width(1200px) |    
|  lg  | min-width(992px)  |    
|  md  | min-width(768px)  |    
|  sm  | min-width(576px)  |    
|  sm  | min-width(320px)  |    
| base |  Any Orientation  |    

it can be a number as well, which will work for every screen orientation
```jsx
<Carousel slidesInViewport={4}>
...
</Carousel>
```  
    
### Example

```jsx
import Carousel from "react-slider";


<Carousel gap slidesInViewport={2}>
    <div>
        <h1>
            Flex box 1
        </h1>
    </div>
    <div>
        <h1>
            Flex box 2
        </h1>
    </div>
    <div>
        <h1>
            Flex box 3
        </h1>
        
    </div>
</Carousel>
```
