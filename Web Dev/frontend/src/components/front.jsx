import React, { Component } from 'react';
import '../main.css';
import '../util.css';
class Front extends Component {
    state = {  }
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
						<input className="input100" type="text" name="username" placeholder="Enter username"></input>
						<span className="focus-input100"></span>
					</div>

					<div className="wrap-input100 validate-input m-b-18" data-validate = "Password is required">
						<span className="label-input100">Password</span>
						<input className="input100" type="password" name="pass" placeholder="Enter password"></input>
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
						<button className="login100-form-btn">
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