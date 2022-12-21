import React from "react";

export function Rating() {
    console.log('Rating')
    return (
        <>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>


    )
}

function Star() {
    console.log('Star')
    console.log(1)
    return (
        <div>*</div>
    )
}