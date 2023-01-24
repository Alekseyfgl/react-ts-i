import React from 'react';

type AccordionPropsType = {
    title: string
    collapsed: boolean
    setAccordionCollapsed: () => void
}

export function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle titleValue={props.title} onClick={props.setAccordionCollapsed} collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody/>}
        </div>

    )
}

type AccordionTitlePropsType = {
    titleValue: string
    collapsed: boolean
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.onClick}>---{props.titleValue} !!!---</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )

}