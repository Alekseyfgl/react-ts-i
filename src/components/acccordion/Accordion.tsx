import React, {FC} from 'react';

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
    items: IItemType[]
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle titleValue={props.title}
                            onClick={props.setAccordionCollapsed}
                            collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>

    )
}

type AccordionTitlePropsType = {
    titleValue: string
    collapsed: boolean
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={(e) => props.onClick()}>---{props.titleValue} !!!---</h3>
}


interface IItemType {
    title: string
    value: any
}


interface IAccordionBodyProps {
    items: IItemType[]
    onClick: (value: any) => void
}

const AccordionBody: FC<IAccordionBodyProps> = (props) => {

    return (
        <ul>
            {props.items.map((item, i) => (<li key={i} onClick={() => props.onClick(item.value)}>{item.title}</li>))}
        </ul>
    )
}