import React, {useState} from 'react';


export function UncontrollRating() {

    const [start, setStart] = useState<number>(0);


    return (

        <div>
            <Starr value={1} selected={start >= 1} setStart={() => setStart(1)}/>
            <Starr value={2} selected={start >= 2} setStart={() => setStart(2)}/>
            <Starr value={3} selected={start >= 3} setStart={() => setStart(3)}/>
            <Starr value={4} selected={start >= 4} setStart={() => setStart(4)}/>
            <Starr value={5} selected={start >= 5} setStart={() => setStart(5)}/>
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