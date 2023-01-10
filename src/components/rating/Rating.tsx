import React from 'react';

type RatingPropsType = {
    value: number
}

export function Rating(props: RatingPropsType) {

    return (

        <div>
            <Star selected={props.value >= 1}/>
            <Star selected={props.value >= 2}/>
            <Star selected={props.value >= 3}/>
            <Star selected={props.value >= 4}/>
            <Star selected={props.value >= 5}/>
        </div>
    )


    if (props.value === 1) {
        return (

            <div>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={true}/>
            </div>
        )
    }

    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
        </div>
    )


}

type StartPropsType = {
    selected: boolean
}

function Star(props: StartPropsType) {
    if (props.selected) {
        return <span><b>start</b> </span>
    } else {
        return <span>start </span>
    }

}