import React, {useState} from 'react';
import {UncontrollRating} from './UncontrollRating';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {action} from '@storybook/addon-actions';


export default {
    title: 'UncontrollRating',
    component: UncontrollRating,
} as ComponentMeta<typeof UncontrollRating>;

const callBack = action('raiting changed inside component')

export const EmptyRating = () => <UncontrollRating defaultValue={0} onChange={callBack}/>
export const UnctlRating1 = () => <UncontrollRating defaultValue={1} onChange={callBack}/>
export const UnctlRating2 = () => <UncontrollRating defaultValue={2} onChange={callBack}/>
export const UnctlRating3 = () => <UncontrollRating defaultValue={3} onChange={callBack}/>
export const UnctlRating4 = () => <UncontrollRating defaultValue={4} onChange={callBack}/>
export const UnctlRating5 = () => <UncontrollRating defaultValue={5} onChange={callBack}/>









