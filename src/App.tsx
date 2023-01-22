import React from 'react';
import './App.css';
import {Accordion} from './components/acccordion/Accordion';
import {Rating} from './components/rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {UncontrollRating} from './components/UncontrollRating/UncontrollRating';

function App() {
    return (
        <div>

            <Accordion title={'Accordion 1'} collapsed={false}/>
            <Accordion title={'Accordion 2'} collapsed={true}/>
            <br/>
            <hr/>

            <Rating value={3}/>
            <br/>
            <hr/>

            <UncontrollRating/>
            <br/>
            <UncontrollRating/>


            <br/>
            <hr/>
            <OnOff/>
            <OnOff/>
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
