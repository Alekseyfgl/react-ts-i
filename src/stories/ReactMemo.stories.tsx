import React, {useState} from 'react';

export default {
    title: 'React memo demo'
}

const NewMessagesCounter = (props: { count: number }) => {
    console.log('NewMessagesCounter')
    return <div>{props.count}</div>
}
const UsersSecret = (props: { users: Array<string> }) => {
    console.log('UsersSecret')
    return <div>{props.users.map((u: any, i: number) => {
        return <div key={i}>{u}</div>
    })}</div>
}

//by default use shallow compare, but there is (a,b) => check props
const Users = React.memo(UsersSecret)

export const Example1 = () => {
    console.log('Example1')
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dimich', 'Valera', 'Lexa']);

    const addUser = () => {
        setUsers([...users,'Steva' + new Date().getTime() ])
    }
    return <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </div>
}