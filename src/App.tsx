import React from 'react';
import './App.css';
import {Accordion} from "./components/acccordion/Accordion";
import {Rating} from "./components/rating/Rating";

function App() {
    return (
        <div>
            <input/>
            <input/>
              Article 1
            <Rating value={3}/>
            <AppTitle/>
            <Accordion/>
            Article 1
            <Rating value={4}/>
        </div>
    );
}

//fragment
function AppTitle() {
    return <>Some Title</>
}

export default App;
