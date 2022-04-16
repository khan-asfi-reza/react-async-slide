import Carousel from "../components/Carousel";
import React from "react";
import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';


describe("Test Carousel Rendering", () => {
    beforeEach(() => {

    })
    test("Is Carousel Rendering", () => {
        render(<Carousel>
            <div>
                Item1
            </div>
            <div>
                Item2
            </div>
        </Carousel>)
        expect(screen.getByText('Item1')).toBeVisible()
        expect(screen.getByText('Item2')).toBeVisible()
    })

    test("Is Next Button working", () => {
        // Initial Render
        render(<Carousel>
            <div>
                Item1
            </div>
            <div>
                Item2
            </div>
            <div>
                Item3
            </div>
            <div>
                Item4
            </div>
        </Carousel>)
        const carousel = screen.getByTestId(/carousel/);
        // Test if carousel last element is active
        // eslint-disable-next-line testing-library/no-node-access
        expect(carousel.children[3]).toHaveClass('active')
        // Next Button
        const nextButton = screen.getByTestId(/next/);
        expect(nextButton.id).toBe('carousel_next');
        fireEvent.click(nextButton);
        // eslint-disable-next-line testing-library/no-node-access
        expect(carousel.children[0]).toHaveClass('active');
        fireEvent.click(nextButton);
        // eslint-disable-next-line testing-library/no-node-access
        expect(carousel.children[1]).toHaveClass('active');
    })

    test("Is Prev Button working", () => {
        // Initial Render
        render(<Carousel>
            <div>
                Item1
            </div>
            <div>
                Item2
            </div>
            <div>
                Item3
            </div>
            <div>
                Item4
            </div>
        </Carousel>)
        const carousel = screen.getByTestId(/carousel/);
        // Test if carousel last element is active
        // eslint-disable-next-line testing-library/no-node-access
        expect(carousel.children[3]).toHaveClass('active')
        // Next Button
        const nextButton = screen.getByTestId(/prev/);
        expect(nextButton.id).toBe('carousel_prev');
        fireEvent.click(nextButton);
        // eslint-disable-next-line testing-library/no-node-access
        expect(carousel.children[2]).toHaveClass('active');
        fireEvent.click(nextButton);
        // eslint-disable-next-line testing-library/no-node-access
        expect(carousel.children[1]).toHaveClass('active');
    })

    test("If Autoplay is enabled", () => {
        // Initial Render
        render(<Carousel autoplay>
            <div>
                Item1
            </div>
            <div>
                Item2
            </div>
            <div>
                Item3
            </div>
            <div>
                Item4
            </div>
        </Carousel>)
        const carousel = screen.getByTestId(/carousel/);
        expect(carousel).toHaveClass('autoplay');
    })

})