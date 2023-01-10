import React from 'react';
import './App.css';
import {Accordion} from "./components/acccordion/Accordion";
import {Rating} from "./components/rating/Rating";

function App() {
    return (
        <div>
            {/*<AppTitle title={'This is APP component'}/>*/}
            {/*<input/>*/}
            {/*<input/>*/}
            {/*Article 1*/}
            {/*<Rating value={1}/>*/}

            <Accordion title={'Accordion 1'} collapsed={false}/>
            <Accordion title={'Accordion 2'} collapsed={true}/>
            Article 1
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
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
