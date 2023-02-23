import {FC, useState} from "react";

type OnOffPopsType = {
    on: boolean
    onChange: (on: boolean) => void
}
export const OnOff: FC<OnOffPopsType> = (props) => {


    const onClickOnfHandler = () => {
        props.onChange(true)
    }
    const onClickOffHandler = () => {
        props.onChange(false)
    }
    const indicatorStyle = {
        borderRadius: '50%',
        height: '20px',
        width: '20px',
        backgroundColor: props.on ? 'green' : 'red',
    }
    const onStyle = {backgroundColor: props.on ? 'green' : 'white', marginRight: '10px'}
    const offStyle = {backgroundColor: props.on ? 'white' : 'red'}
    return (
        <div>

            <button onClick={onClickOnfHandler} style={onStyle}>on</button>
            <button onClick={onClickOffHandler} style={offStyle}>off</button>
            <div style={indicatorStyle}></div>
        </div>
    );
}
