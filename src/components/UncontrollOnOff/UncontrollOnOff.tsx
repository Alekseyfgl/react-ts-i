import {FC, useState} from 'react';

interface IUncontrollOnOffProps {
    defaultOn?: boolean
}

export const UncontrollOnOff: FC<IUncontrollOnOffProps> = (props) => {

    const [onOff, setOnOff] = useState<boolean>(props.defaultOn ?? true);

    const onClickOnfHandler = () => {
        setOnOff(true)
    }
    const onClickOffHandler = () => {
        setOnOff(false)
    }
    const indicatorStyle = {
        borderRadius: '50%',
        height: '20px',
        width: '20px',
        backgroundColor: onOff ? 'green' : 'red',
    }
    const onStyle = {backgroundColor: onOff ? 'green' : 'white', marginRight: '10px'}
    const offStyle = {backgroundColor: onOff ? 'white' : 'red'}
    return (
        <div>

            <button onClick={onClickOnfHandler} style={onStyle}>on</button>
            <button onClick={onClickOffHandler} style={offStyle}>off</button>
            <div style={indicatorStyle}></div>
        </div>
    );
}