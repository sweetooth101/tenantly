import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import logo from '../../images/logo.png'

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [search, setSearch] = useState(false);
    const [isLandLord, setLandlord] = useState(false);


    return(
        <div className="form-container">
				<form onSubmit={null}>
					<Link to={'/'}>
						<img className="logo-login" src={logo} alt="Logo" />
					</Link>
					<div className="register-radio-container">
						<input type="radio" onClick={null} value="LANDLORD" name="account" />{' '}
						<p className="radio-p">Landlord</p>
						<input type="radio" onClick={null} value="TENANT" name="account" />{' '}
						<p className="radio-p">Tenant</p>
					</div>
					<div className="input-form">
						<input
							placeholder="Email"
							name="email"
							value={email}
							onChange={null}
							type="text"
							required
						/>
					</div>
					<div className="input-form">
						<input
							placeholder="Password"
							name="password"
							value={password}
							onChange={null}
							type="password"
							required
						/>
					</div>
					<div>
						{search ? (
							<div className="lds-ring">
								<div />
							</div>
						) : (
							<button className="form__button ">Login</button>
						)}
					</div>
					<div className="no-account">
						<p className="login-p">Don't have an account?</p>
						<Link to={'/register'}>
							<button className="register-button">Register</button>
						</Link>
					</div>
				</form>
			</div>
    )
}

export default Login;