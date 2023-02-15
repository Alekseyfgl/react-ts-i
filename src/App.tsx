import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/acccordion/Accordion';
import {Rating} from './components/rating/Rating';
import {UncontrollOnOff} from './components/UncontrollOnOff/UncontrollOnOff';
import {UncontrollRating} from './components/UncontrollRating/UncontrollRating';
import {OnOff} from './components/OnOff/OnOff';
import {Select} from "./components/Select/Select";

function App() {

    const [ratingValue, setRatingValue] = useState<number>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
    const [on, setOn] = useState(false);
    return (
        <div>

            <Accordion title={'Accordion 1'}
                       items={[{title: 'HTML', value: 123}, {title: 'CSS', value: 123}, {title: 'JS', value: 123}]}
                       collapsed={accordionCollapsed}
                       setAccordionCollapsed={() => setAccordionCollapsed(!accordionCollapsed)}
                       onClick={() => {
                       }}/>
            {/*<Accordion title={'Accordion 2'} collapsed={true}/>*/}
            <br/>
            <hr/>

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <br/>
            <hr/>

            <UncontrollRating onChange={() => {
            }}/>
            <br/>
            <UncontrollRating onChange={() => {
            }}/>


            <br/>
            <hr/>
            <UncontrollOnOff/>
            <UncontrollOnOff/>

            <br/>
            <hr/>

            <OnOff on={on} setOn={(on) => setOn(on)}/>

            {/*<Select collapse={false} items={[{title: 'HTML', value:1}, {title: 'CSS', value:2}, ]}/>*/}
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
