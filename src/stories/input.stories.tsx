import React, {ChangeEvent, LegacyRef, useRef, useState} from 'react';
import {action} from '@storybook/addon-actions';


export default {
    title: 'input',

}

const callBack = action('on or off clicked')

export const UncontrolledInput = () => <input/>

export const TrackValueUncontrolledInput = () => {
    const [value, setValue] = useState('');
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value);

    return (<>
            <input value={value} onChange={onChangeHandler}/>
            <div>{value}</div>
        </>
    )
}


export const GetInputValueUncontrolledInputByButtonPress = () => {
    //такого лучше избегать

    const [value, setValue] = useState('');
    const inputRef: LegacyRef<HTMLInputElement> = useRef(null);

    const onClickHandler = () => setValue((inputRef.current as HTMLInputElement).value);
    return (<>
            <input ref={inputRef}/>
            <div>{value}</div>
            <button onClick={onClickHandler}>save</button>
        </>
    )
}
export const ControlledInputWithFixedValue = () => <input value={'it incubator'}/>


export const ControlledCheckBox = () => {
    const [parentValue, setParentValue] = useState<boolean>(false);

    return <input type={'checkbox'} checked={parentValue} onChange={(e) => setParentValue(e.currentTarget.checked)}/>
}


export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('1');

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => setParentValue(e.currentTarget.value);

    return (
        <select value={parentValue} onChange={onChangeHandler}>
            <option>none</option>
            <option value={'1'}>Minsk</option>
            <option value={'2'}>Moscov</option>
            <option value={'2'}>Kiev</option>
        </select>
    )
}







