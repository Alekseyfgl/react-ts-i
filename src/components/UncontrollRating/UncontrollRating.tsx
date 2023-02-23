import React, {FC, useState} from 'react';

interface UncontrollRatingProps {
    defaultValue?: 0 | 1 | 2 | 3 | 4 | 5;
    onChange: (value: 0 | 1 | 2 | 3 | 4 | 5) => void
}

export const UncontrollRating: FC<UncontrollRatingProps> = (props) => {

    const [start, setStart] = useState<number>(props.defaultValue ?? 0);


    return (

        <div>
            <Starr value={1} selected={start >= 1} setStart={() => {
                setStart(1);
                props.onChange(1)
            }}/>
            <Starr value={2} selected={start >= 2} setStart={() => {
                setStart(2)
                props.onChange(2)
            }}/>
            <Starr value={3} selected={start >= 3} setStart={() => {
                setStart(3)
                props.onChange(3)
            }}/>
            <Starr value={4} selected={start >= 4} setStart={() => {
                setStart(4)
                props.onChange(4)
            }}/>
            <Starr value={5} selected={start >= 5} setStart={() => {
                setStart(5)
                props.onChange(5)
            }}/>
        </div>
    )


}

type StartPropsType = {
    value: number
    selected: boolean
    setStart: (value: number) => void
}


function Starr(props: StartPropsType) {
    return <span onClick={() => props.setStart(props.value)}> {props.selected ? <b>star</b> : 'start'} </span>
}