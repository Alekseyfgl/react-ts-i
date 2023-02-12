import React from 'react';

export type AccordionPropsType = {
    title: string
    /**
     * This element can collapse element and expand [Link text Here](./src)
     */
    collapsed: boolean
    /**
     * This callBack something do
     */
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
    return <h3 onClick={(e) =>props.onClick()}>---{props.titleValue} !!!---</h3>
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