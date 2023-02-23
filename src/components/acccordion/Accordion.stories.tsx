import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from './Accordion';
import {ComponentStory, ComponentMeta, Story} from '@storybook/react';

import {action} from '@storybook/addon-actions';



export default {
    title: 'Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

const callBack = action('accordion mode change event fired')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>
const callbackProps = {
    setAccordionCollapsed: callBack,
}

export const AccordionCollapsed = Template.bind({});
AccordionCollapsed.args = {
    ...callbackProps,
    title: 'Menu',
    collapsed: true,

}


export const AccordionUnCollapsed = Template.bind({});
AccordionUnCollapsed.args = {
    ...callbackProps,
    title: 'Users',
    collapsed: false,
}

export const AccordionChanging: Story<AccordionPropsType> = (args) => {
    const [state, setState] = useState<boolean>(true);
    return <Accordion {...args} setAccordionCollapsed={() => setState(!state)}/>
}
AccordionChanging.args = {
    title: 'Menu test',
    collapsed: true,

}







