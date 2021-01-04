import React from 'react'
import Home from './components/Home/Home'
import Api from './components/Api/HomeApi'
import Contact from './components/Contact/Contact'
import Navbar from './components/Navbar/Navbar'
import Provinsi from './components/Provinsi/Provinsi'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends React.Component{
    render(){
        return(
            <Router>
            <div>
                <Navbar/>
            <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/api" component={Api}/>
            <Route path="/contact" component={Contact}/>
            <Route component={Provinsi}/>
            </Switch>
            
            </div>
            </Router>
            
        )
    }
}

export default App;