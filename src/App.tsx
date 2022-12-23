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
            Article 1
            <Rating value={0}/>
        </div>
    );
}

//fragment
function AppTitle(props: any) {
    return <>{props.title}</>
}

export default App;
