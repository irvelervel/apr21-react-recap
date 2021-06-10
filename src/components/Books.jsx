import { Component } from 'react'

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
        name: 'Aizada'
    }

    handleClick = () => {
        // using an arrow function will make this present in the event handler
        // if you use a normal function, you'll need to bind the this in the constructor
        console.log(this)
    }

    // constructor
    // render (the only mandatory one)
    // componentDidMount
    // componentDidUpdate
    // componentWillUnmount

    componentDidMount() {
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
            <h1 onClick={this.handleClick}>{this.state.name}</h1>
        )
    }

}

export default Books