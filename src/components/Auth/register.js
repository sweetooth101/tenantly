import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import logo from '../../images/logo.png'


function Register(){
    const [firstName, setFName] = useState('');
    const [lastName, setLName] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [isLandlord, setLandlord] = useState(true);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');


    return(
        <div className="form-container">
				<form onSubmit={null}>
					<Link to={'/'}>
						<img className="logo-register" src={logo} alt="Logo" />
					</Link>
					<div className="register-radio-container">
						<input type="radio" onClick={null} value="LANDLORD" name="account" />{' '}
						<p className="radio-p">Landlord</p>
						<input type="radio" onClick={null} value="TENANT" name="account" />{' '}
						<p className="radio-p">Tenant</p>
					</div>

					<div className="input-form">
						<input
							placeholder="First Name"
							name="firstName"
							value={firstName}
							onChange={null}
							type="text"
							required
						/>
					</div>
					<div className="input-form">
						<input
							placeholder="Last Name"
							name="lastName"
							value={lastName}
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
					<div className="input-form">
						<input
							placeholder="Confirm password"
							name="password2"
							value={password2}
							onChange={null}
							type="password"
							required
						/>
					</div>
					<div className="input-form"> 
						<input
							placeholder="E-mail"
							name="email"
							type="email"
							size="30"
							value={email}
							onChange={null}
							required
						/>
					</div>
					<div className="input-form">
						<input
							placeholder="Phone Number"
							name="phone"
							value={phone}
							onChange={null}
							type="text"
							required
						/>
					</div>
					<div>
						<button className="form__button">Register</button>
					</div>
					<div className="no-account">
						<p className="login-p">Already have an account?</p>
						<Link to={'/login'}>
							<button className="register-button">Login here</button>
						</Link>
					</div>
				</form>
			</div>
    )

}

export default Register;