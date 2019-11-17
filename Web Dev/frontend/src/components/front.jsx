import React, { Component } from 'react';
//import { BrowserRouter as Router, Link, Route } from "react-router-dom";
//import Inner10377 from './components/inner10377';
import '../main.css';
class Front extends Component {
	constructor(props) {
        super(props);
        this.state = {
            name: '',
            pass: ''
        };
	}
	handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
	}
	onSubmit = (e) => {
		e.preventDefault();
		const form = {
		 name: this.state.name,
		 pass: this.state.pass
		}
		if(this.state.name==10377&&this.state.pass==10377)
		this.props.history.push('./47457566253dea09d9191b95c4aa3f64')
		if(this.state.name==10385&&this.state.pass==10385)
		this.props.history.push('./a52fd55f42010405991a333187181f7e')
		if(this.state.name==10284&&this.state.pass==10284)
		this.props.history.push('./f17a33840b3e520949d36b24ebad7fb0')
	}
	
    render() { 
        return (  <div >
           <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<div className="login100-form-title" >
					<span className="login100-form-title-1">
						Sign In
					</span>
				</div>

				<form className="login100-form validate-form">
					<div className="wrap-input100 validate-input m-b-26" data-validate="Username is required">
						<span className="label-input100">Username</span>
						<input className="input100" type="text" name="name"value={this.state.name} onChange={e => this.handleChange(e)} placeholder="Enter username"></input>
						<span className="focus-input100"></span>
					</div>

					<div className="wrap-input100 validate-input m-b-18" data-validate = "Password is required">
						<span className="label-input100">Password</span>
						<input className="input100" type="password" name="pass"value={this.state.pass} onChange={e => this.handleChange(e)} placeholder="Enter password"></input>
						<span className="focus-input100"></span>
					</div>

					<div className="flex-sb-m w-full p-b-30">
						<div className="contact100-form-checkbox">
							<input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"></input>
							<label className="label-checkbox100" for="ckb1">
								Remember me
							</label>
						</div>

						<div>
							<a href="#" className="txt1">
								Forgot Password?
							</a>
						</div>
					</div>

					<div className="container-login100-form-btn">
						<button className="login100-form-btn" onClick={(e) => this.onSubmit(e)}>
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
            </div> );
    }
}
 
export default Front;