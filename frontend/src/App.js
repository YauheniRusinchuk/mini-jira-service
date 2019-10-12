import React, {Fragment} from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Home from './components/Home/Home'
import Login from './components/Login/Login'


function App() {
  	return (
    	<Fragment>
		   	<Router>
				<Header />
				<Switch>
					<Main>
						<Route exact path='/' component={Home} />
						<Route path='/login' component={Login} />
					</Main>
				</Switch>
			</Router>
    	</Fragment>
  );
}

export default App;
