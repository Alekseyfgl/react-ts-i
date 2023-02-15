import React, {useState} from 'react';
import {OnOff} from "./OnOff";
import {ComponentStory, ComponentMeta} from '@storybook/react';
import * as buffer from "buffer";
import {Rating} from "../rating/Rating";
import {action} from "@storybook/addon-actions";


export default {
    title: 'OnOff',
    component: OnOff,
} as ComponentMeta<typeof Rating>;

const callBack = action('on or off clicked')

export const OnMode = () => <OnOff on={true} onChange={callBack}/>
export const OffMode = () => <OnOff on={false} onChange={callBack}/>
export const ModeChanging = () => {
    const [state, setState] = useState(true);
    return <OnOff on={state} onChange={setState}/>
}








