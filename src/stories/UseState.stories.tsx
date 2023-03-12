import {useCallback, useMemo, useState} from 'react';
import {action} from '@storybook/addon-actions';

export default {
    title: 'useState demo'
}

const generateData = () => {
    //difficult value
    console.log('generateData')
    return 23423213
}

const callBack = action('on or off clicked')

export const useState1 = () => {
    console.log('useState1')


    // const memoizeData = useCallback(generateData, []); // не нужно использовать, т.к. useState может сам замемоизировать функцию

    const [counter, setCounter] = useState(generateData);

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
        </div>
    )
}


export const useState2 = () => {
    console.log('useState2')
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <button onClick={() => setCounter(counter => counter + 1)}>+</button>
            {counter}
        </div>
    )
}