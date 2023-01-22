import React, {useState} from 'react';


export function UncontrollRating() {

    const [start, setStart] = useState<number>(0);

    const onClickStartHandler = (value: number) => {
        console.log('onClickStartHandler')
        setStart(value)
    }

    return (

        <div>
            <Starr num={1} selected={start >= 1} onClickStartHandler={onClickStartHandler}/>
            <Starr num={2} selected={start >= 2} onClickStartHandler={onClickStartHandler}/>
            <Starr num={3} selected={start >= 3} onClickStartHandler={onClickStartHandler}/>
            <Starr num={4} selected={start >= 4} onClickStartHandler={onClickStartHandler}/>
            <Starr num={5} selected={start >= 5} onClickStartHandler={onClickStartHandler}/>
        </div>
    )


}

type StartPropsType = {
    num: number
    selected: boolean
    onClickStartHandler: (value: number) => void
}


function Starr(props: StartPropsType) {
    return props.selected ? <span onClick={() => props.onClickStartHandler(props.num)}><b> start </b> </span> :
        <span onClick={() => props.onClickStartHandler(props.num
        )}> start </span>
}