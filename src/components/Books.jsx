import { Component } from 'react'
import Hooks from './Hooks'
import { Link } from 'react-router-dom'

class Books extends Component {

    // the constructor is part of the component initialization
    // but nowadays this lifecycle method can be safely omitted
    // React will launch the constructor for us if not present
    // constructor(props) {
    //     super(props)
    //     // two main purposes
    //     // 1) initializing the state
    //     // 2) binding the this into event handlers
    //     // nowadays 1) the state can be declared outside the constructor
    //     // 2) the event handlers are given the this automatically if declared as arrow functions
    //     this.handleClick = this.handleClick.bind(this)
    // }

    state = {
        name: 'Aizada',
        todoObject: null,
        show: true
    }

    handleClick = () => {
        // using an arrow function will make this present in the event handler
        // if you use a normal function, you'll need to bind the this in the constructor
        console.log(this)
        this.setState({
            show: !this.state.show
        })
    }

    // constructor
    // render (the only mandatory one)
    // componentDidMount
    // componentDidUpdate
    // componentWillUnmount

    componentDidMount = async () => {

        // let querystring = new URLSearchParams(this.props.location.search)
        // let query = querystring.get('query')
        // let type = querystring.get('type')

        // this method gets fired automatically by react once your component has finished loading
        // so effectively AFTER the initial render() invocation
        console.log('componentDidMount')
        // it will ALWAYS fire ONCE for every component mounting
        // the most common use case is to do here expensive or remote operations
        // because this just happens once and under the hood
        // another common thing is after a fetch set the state of your component
        // and this is safe to do because you'll just set the state once for every fetch
        // and setting the state will make render() fire again reflecting your new state
        setTimeout(() => {
            this.setState({
                name: 'Maksym'
            })
        }, 5000)

        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        console.log(response)
        let todo = await response.json()
        console.log(todo)
        this.setState({
            todoObject: todo
        })
    }

    componentDidUpdate() {
        // was made for dealing with UPDATES in your component
        // specifically UPDATES means changes in the state or in the props of the component
        console.log('component just got updated!')
        // it's useful when you want to deal with a component that is STILL present in the page
    }

    componentWillUnmount() {
        // will be triggered automatically by react just once for every mounting of the component
        // a moment before the removal of this component from the DOM
        console.log('bye bye')
        // reserved for cleaning operations
        // 1) destroying an interval
        // 2) closing a socket in a real-time application
    }

    render() {
        console.log('render')
        // render is invoked every time there's a change in the component's props or state
        // every render method must return some JSX
        return (
            <div>
                <Link to="/detail">
                    <h1>{this.state.name}</h1>
                </Link>
                {this.state.show && <Hooks title="Ingrid" todo={this.state.todoObject} />}
            </div>
        )
    }

}

export default Books