import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import * as style from './App.css';
import HogeComponent from './containers/HomeContainer';
import AboutContainer from './containers/AboutContainer';
import logo from './logo.svg';

class App extends React.Component {
	public render() {
		return (
			<Router>
				<div className={style.root}>
					<header className={style.header}>
						<img src={logo} className={style.logo} alt="logo" />
						<h1 className={style.title}>Welcome to React</h1>
						<div className={style.menu}>
							<ul>
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/about">About</Link>
								</li>
							</ul>
						</div>
					</header>
					<Switch>
						<Route exact={true} path="/" component={HogeComponent} />
						<Route exact={true} path="/about" component={AboutContainer} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
