import { useEffect, useState } from 'react'

// hooks were introduced for a couple of reasons:
// 1) to get MORE developers onboard, because they're easier to start with and
// a dev doesn't need to know what a class is to get started with react
// so functions now have bigger powers then before (state + lifecycle)
// 2) to get your code more reusable, for enforcing DRY (don't repeat yourself)

// hooks are just functions that will allow your FUNCTIONAL COMPONENTS to get access
// to the concept of the STATE in react and access the LIFECYCLE methods of a component

// useState
// useEffect

// useRef
// useMemo
// useCallback

const Hooks = (props) => {
    console.log('hello!!')

    const [counter, setCounter] = useState(0)
    // const [anotherCounter, setAnotherCounter] = useState
    const [name, setName] = useState('stefano')

    // const obj = {
    //     name: 'Stefano',
    //     age: 34
    // }

    // const {name, age} = obj

    // const name = obj.name
    // const age = obj.age



    // const arrayOfStateValues = useState(0)

    // const counter = arrayOfStateValues[0]
    // const setCounter = arrayOfStateValues[1]

    // useState will allow you to use state variables into functionl component
    // a state variable is a place that will keep your value through time, through different render

    // useEffect will allow you to somehow mimic class components' lifecycle methods
    // componentDidMount
    // componentDidUpdate
    // componentWillUnmount

    // mounted
    useEffect(
        // two parameters, the first is mandatory
        // 1) the code you want to execute, in a function
        () => {
            console.log('my first useEffect!')
        },
        // 2) an array of dependencies that will determinate how often
        // the function is going to be re-executed
        [
            // everytime one of the variables you put here changes
            // the function in the first parameter will get fired again
        ] // if you leave this empty, your function will be executed JUST ONCE
        // like componentDidMount
    )

    // unmounted
    useEffect(
        () => {
            return () => {
                // the code you'll put here will be executed JUST
                // when Hooks is about to be unmounted
                // the same as a componentWillUnmount
                console.log('UNMOUNTING BYEE')
            }
        }, [
        // without any repeat
    ])

    // updated every time
    useEffect(() => {
        console.log("we'll see this at every render")
    })
    // without the array of dependencies in second place, we're going to fire
    // this function at EVERY render

    // updated just when name changes
    useEffect(() => {
        console.log('the name just changed')
    }, [name])

    return (
        <div>
            <h1>{props.todo ? props.todo.title : 'still null'}</h1>
            <h2>My name is {name}, the counter is {counter}</h2>
            <button onClick={() => setName('Gamze')}>CHANGE NAME</button>
            <button onClick={() => setCounter(10)}>INCREMENT COUNTER</button>
        </div>

    )
}

export default Hooks