import React from 'react';

type RatingPropsType = {
    value: number
    onClick: (value: number) => void
}

export function Rating(props: RatingPropsType) {

    return (
        <div>
            <Star selected={props.value >= 1} onClick={props.onClick} value={1}/>
            <Star selected={props.value >= 2} onClick={props.onClick} value={2}/>
            <Star selected={props.value >= 3} onClick={props.onClick} value={3}/>
            <Star selected={props.value >= 4} onClick={props.onClick} value={4}/>
            <Star selected={props.value >= 5} onClick={props.onClick} value={5}/>
        </div>
    )

}

type StartPropsType = {
    selected: boolean
    value: number
    onClick: (value: number) => void
}

function Star(props: StartPropsType) {
    return <span onClick={() => props.onClick(props.value)}> {props.selected ? <b> start </b> : 'star'} </span>

}