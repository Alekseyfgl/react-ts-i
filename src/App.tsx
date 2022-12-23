import React from 'react';
import './App.css';
import {Accordion} from "./components/acccordion/Accordion";
import {Rating} from "./components/rating/Rating";

function App() {
    return (
        <div>
            <AppTitle title={'This is APP component'}/>
            <input/>
            <input/>
            Article 1
            <Rating value={1}/>

            <Accordion title={'Accordion title'}/>
            <Accordion title={'Accordion body'}/>
            Article 1
            <Rating value={0}/>
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
