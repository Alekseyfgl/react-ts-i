import React, {useEffect, useState} from 'react';
import './App.css';


function App() {

    const [value, setValue] = useState(0);

    useEffect(() => {
        getLocalStorageHandler()
    }, []);


    useEffect(() => {
        setLocalStorageHandler()
    }, [value]);




    const onclickIncHandler = () => {
        setValue(value + 1);
    }
    const setLocalStorageHandler = () => {
        localStorage.setItem('counter', JSON.stringify(value))
    }
    const getLocalStorageHandler = () => {
        const valueJSON: string | null = localStorage.getItem('counter');
        if (valueJSON) {
            const value = JSON.parse(localStorage.getItem('counter')!)
            setValue(value)
        }

    }

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={onclickIncHandler}>inc</button>
            <button onClick={setLocalStorageHandler}>setLocalStorage</button>
            <button onClick={getLocalStorageHandler}>getLocalStorage</button>
        </div>
    );
}


export default App;
