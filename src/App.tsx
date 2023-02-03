import React, {useEffect} from 'react';
import s from './App.module.css'
import {Navigate, NavLink, Route, Routes, useNavigate, useSearchParams,} from 'react-router-dom';


export function Profile() {
    const [searchParams, setSearchParams] = useSearchParams();

    console.log(searchParams.get('name'))
    console.log(Object.fromEntries(searchParams))

    return (
        <div>
            <button onClick={() => {
                setSearchParams({...Object.fromEntries(searchParams), age: '34'})
            }}>
                add age
            </button>
        </div>
    )
}

function App() {
    return (
        <div className={s.li}>
            <NavLink to={'/'}>main</NavLink>
            <NavLink to={'/login'}>login</NavLink>
            <NavLink to={'/profile'}>profile</NavLink>
            <NavLink to={'/profile/settings'}>settings</NavLink>


            <Routes>
                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>main</div>}/>
                <Route path={'/login'} element={<div>login</div>}/>
                <Route path={'/profile'} element={<div><Profile/></div>}/>
                <Route path={'/profile/settings'} element={<div>settings</div>}/>
            </Routes>
        </div>
    )
}


export default App;
