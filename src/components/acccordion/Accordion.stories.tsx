import React, {useState} from 'react';
import {Accordion} from "./Accordion";
import {ComponentStory, ComponentMeta} from '@storybook/react';
import * as buffer from "buffer";
import {Rating} from "../rating/Rating";
import {action} from "@storybook/addon-actions";
import {validateHeaderName} from "http";


export default {
    title: 'Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

const callBack = action('accordion mode change event fired')

export const AccordionCollapsed = () => <Accordion title={'Menu'} collapsed={true} setAccordionCollapsed={callBack}/>
export const AccordionUnCollapsed = () => <Accordion title={'Users'} collapsed={false}
                                                     setAccordionCollapsed={callBack}/>

export const AccordionChanging = () => {
    const [state, setState] = useState<boolean>(true);
    return <Accordion title={'Menu'} collapsed={state} setAccordionCollapsed={() => setState(!state)}/>
}








