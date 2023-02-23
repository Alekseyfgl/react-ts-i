import React, {ChangeEvent, useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {
    console.log('===>DifficultCountingExample')
    const [a, setA] = useState<number>(0);
    const [b, setB] = useState<number>(0);

    let resultA = 1
    let resultB = 1

    resultA = useMemo<number>(() => { // функция запускается когда меняется а
        //а так она запоминает значение (мемоизирует)
        // помогает избежать черезмерной нагрузки на устройство
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a]);


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }
    return (
        <>
            <input value={a} onChange={(e: ChangeEvent<HTMLInputElement>) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e: ChangeEvent<HTMLInputElement>) => setB(+e.currentTarget.value)}/>

            <hr/>
            <div>
                Result A: {resultA}
            </div>
            <div>
                Result B: {resultB}
            </div>
        </>
    )
}



export const HelpsToReactMemo = () => {
    console.log('===>HelpsToReactMemo')
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dimich', 'Valera', 'Lexa']);

    const newArray = useMemo(() => {
       return  users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users]);

    const addUser = () => {
        setUsers([...users,'Steva' + new Date().getTime() ])
    }

    return <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        {counter}
        <Users users={newArray}/>
    </div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('UsersSecret')
    return <div>{props.users.map((u: any, i: number) => {
        return <div key={i}>{u}</div>
    })}</div>
}

//by default use shallow compare, but there is (a,b) => check props
const Users = React.memo(UsersSecret)