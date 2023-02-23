import React, {useState} from 'react';
import {Select} from "./Select";
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {action} from '@storybook/addon-actions';


export default {
    title: 'Select',
    component: Select,
} as ComponentMeta<typeof Select>;

const callBack = action('raiting changed inside component')

export const WithValue = () => <Select collapse={false} items={[{title: 'HTML', value:1}, {title: 'CSS', value:2}, ]}/>
export const WithoutValue = () => <Select collapse={false} items={[]}/>










