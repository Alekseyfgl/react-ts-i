import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import {Rating} from "../components/rating/Rating";
import App from "../App";
import {Accordion} from "../components/acccordion/Accordion";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Rating">
                <Rating/>
            </ComponentPreview>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/Accordion">
                <Accordion/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;