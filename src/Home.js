import React from "react";
import logo from "./react.svg";
import "./Home.css";
import {Grommet} from "grommet";
import {PasswordInput} from "grommet-controls";

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			password: null
		};
	}

	render() {
		let {password} = this.state;

		return (
			<Grommet full={true}>
				<div className="Home">
					<div className="Home-header">
						<img src={logo} className="Home-logo" alt="logo"/>
						<h2>Welcome to Razzle</h2>
					</div>
					<PasswordInput
						id="password"
						name="password"
						onChange={() => this.setState({password: event.target.value})}
						placeholder="Password"
						plain={true}
						value={password || ""}
					/>

					<p className="Home-intro">
						To get started, edit <code>src/App.js</code> or{" "}
						<code>src/Home.js</code> and save to reload.
					</p>
					<ul className="Home-resources">
						<li>
							<a href="https://github.com/jaredpalmer/razzle">Docs</a>
						</li>
						<li>
							<a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
						</li>
						<li>
							<a href="https://palmer.chat">Community Slack</a>
						</li>
					</ul>
				</div>
			</Grommet>
		);
	}
}

export default Home;
