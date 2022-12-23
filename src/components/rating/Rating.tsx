import React from "react";

export function Rating(props: any) {
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
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
            </div>
        )
    } else {
        return null
    }


}

function Star(props: any) {
    console.log(props)

    if (props.selected === true) {
        return <span><b>start</b> </span>
    } else {
        return <span>start </span>
    }

}