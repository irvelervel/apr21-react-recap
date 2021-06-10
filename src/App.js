import './App.css'
import Books from './components/Books'
// import Hooks from './components/Hooks'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Detail from './components/Detail'
import Footer from './components/Footer'
import Comments from './components/Comments'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Route exact path="/" component={Books} />
          {/* if you use the component prop in a Route, history location & match are passed automatically */}
          <Route exact path="/detail" render={(routerProps) => <Detail {...routerProps} title="strive school" />} />
          {/* if you use the render prop you need to pass history location & match by hand */}
          <Route path="/comments/:movieID" component={Comments} />
        </header>
      </div>
      <Footer />
    </Router>
  )
}

export default App
