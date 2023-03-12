import {useCallback, useEffect, useMemo, useState} from 'react';
import {action} from '@storybook/addon-actions';

export default {
    title: 'useEffect'
}


const callBack = action('on or off clicked')

export const SimpleExample = () => {
    console.log('start')
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log('useEffect')
        document.title = counter.toString()
        return () => {
            console.log('component Will Mount')
        };
    }, [counter]);

    return (
        <div>

            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
        </div>
    )
}

export const SetTimeoutExample = () => {
    console.log('SetTimeoutExample')
    const [counter, setCounter] = useState(0);
    const [fake, setFake] = useState(0);


    useEffect(() => {
        setInterval(() => {
            console.log('tick', counter)
            // здесь нужен кол бек из-за setInterval, без него counter = 0 всегда

            setCounter(counter => {
                console.log('tick in Call back', counter)
                return counter + 1
            })

        }, 1000)

    }, []);

    return (
        <div>
            {counter}
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setFake(fake + 1)}>+</button>
            {fake}
        </div>
    )
}