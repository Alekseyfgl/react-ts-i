import React, {useState} from 'react';
import {UncontrollOnOff} from './UncontrollOnOff';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {action} from '@storybook/addon-actions';


export default {
    title: 'UncontrollOnOff',
    component: UncontrollOnOff,
} as ComponentMeta<typeof UncontrollOnOff>;

const callBack = action('on or off clicked')

export const UncontrollOnMode = () => <UncontrollOnOff defaultOn={false}/>








