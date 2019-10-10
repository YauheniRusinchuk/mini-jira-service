import React, {Fragment} from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Home from './components/Home/Home'


function App() {
  	return (
    	<Fragment>
		   	<Router>
				<Header />
				<Switch>
					<Main>
						<Route path='/' component={Home} />
					</Main>
				</Switch>
			</Router>
    	</Fragment>
  );
}

export default App;
