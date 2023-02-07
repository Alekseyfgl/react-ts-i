import React, {useState} from 'react';
import {Rating} from './Rating';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import * as buffer from "buffer";




export default {
    title: 'Rating Stories',
    component: Rating,
} as ComponentMeta<typeof Rating>;

export const EmptyStart = () => <Rating value={0} onClick={(x) => x}/>
export const EmptyStart1 = () => <Rating value={1} onClick={(x) => x}/>
export const EmptyStart2 = () => <Rating value={2} onClick={(x) => x}/>
export const EmptyStart3 = () => <Rating value={3} onClick={(x) => x}/>
export const EmptyStart4 = () => <Rating value={4} onClick={(x) => x}/>
export const EmptyStart5 = () => <Rating value={5} onClick={(x) => x}/>
export const RatingChanging = () => {
    const [rating, setRating] = useState<number>(5);
    return <Rating value={rating} onClick={setRating}/>
}





