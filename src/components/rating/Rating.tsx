import React from "react";

type RatingPropsType = {
    value: number
}

export function Rating(props: RatingPropsType) {
    console.log('Rating')

    if (props.value === 0) {
        return (

            <div>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }

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
    console.log(props)
    if (props.selected) {
        return <span><b>start</b> </span>
    } else {
        return <span>start </span>
    }

}