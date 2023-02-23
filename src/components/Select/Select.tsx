import {FC, useState} from "react";
import {IItemType} from "../acccordion/Accordion";

interface ISelectProps {
    collapse: boolean
    items: IItemType[]
}

export const Select: FC<ISelectProps> = (props) => {
    const {collapse, items} = props

    const [collapsed, setCollapsed] = useState<boolean>(collapse);
    const [selectedValue, setSelectedValue] = useState<IItemType>({title: 'none', value: 0});



    const itemsComponents: JSX.Element[] = items.map((item, i) => {
        const onClickSetValue = () => {
            const setElem: IItemType | undefined = items.find((el) => el.value === item.value)

            setElem && setSelectedValue(setElem);
            setCollapsed(false)
        }

        return <li key={i} value={item.value} onClick={onClickSetValue}>{item.title}</li>
    })

    const onClickSelect = () => {
        if(itemsComponents.length) {
            setCollapsed(!collapsed)
        }
    };


    return (
        <div>
            <h2 onClick={onClickSelect}>{itemsComponents.length === 0 ? 'nothing items' : selectedValue.title}</h2>
            {collapsed && <ul>
                {itemsComponents.length === 0 ? 'nothing items' : itemsComponents}
            </ul>}
        </div>
    );
}