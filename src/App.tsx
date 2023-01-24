import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/acccordion/Accordion';
import {Rating} from './components/rating/Rating';
import {UncontrollOnOff} from './components/UncontrollOnOff/UncontrollOnOff';
import {UncontrollRating} from './components/UncontrollRating/UncontrollRating';
import {OnOff} from "./components/OnOff/OnOff";

function App() {

    const [ratingValue, setRatingValue] = useState<number>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    return (
        <div>

            <Accordion title={'Accordion 1'} collapsed={accordionCollapsed} setAccordionCollapsed={setAccordionCollapsed}/>
            <Accordion title={'Accordion 2'} collapsed={true}/>
            <br/>
            <hr/>

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <br/>
            <hr/>

            <UncontrollRating/>
            <br/>
            <UncontrollRating/>


            <br/>
            <hr/>
            <UncontrollOnOff/>
            <UncontrollOnOff/>

            <br/>
            <hr/>

            <OnOff on={true}/>
        </div>
    );
}

type AppTitlePropsType = {
    title: string
}

function AppTitle(props: AppTitlePropsType) {
    return <>{props.title}</>
}

export default App;
