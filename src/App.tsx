import React from 'react';
import './App.css';
import {Accordion} from "./components/acccordion/Accordion";
import {Rating} from "./components/rating/Rating";

function App() {
    return (
        <div>
            <AppTitle/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

//fragment
function AppTitle() {
    return <>Some Title</>
}

export default App;
