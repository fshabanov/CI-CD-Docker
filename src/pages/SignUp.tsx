import React, { useState } from "react";
import { Link } from "react-router-dom";
import isValidEmail from "src/helpers/isValidEmail";
import useRouter from "src/hooks/useRouter";
import "src/assets/css/sign.css";

const SignUp: React.FC = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState("");
	const { navigate } = useRouter();

	const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!isValidEmail(email)) {
			setEmailError("Invalid email");
			return;
		}
		navigate("/");
	};
	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setName(e.target.value);

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmailError("");
		setEmail(e.target.value);
	};

	return (
		<main className="sign-up-page">
			<h1 className="visually-hidden">Travel App</h1>
			<form className="sign-up-form" autoComplete="off" onSubmit={handleSignUp}>
				<h2 className="sign-up-form__title">Sign Up</h2>
				<label className="trip-popup__input input">
					<span className="input__heading">Full name</span>
					<input
						name="full-name"
						type="text"
						required
						value={name}
						onChange={handleNameChange}
					/>
				</label>
				<label className="trip-popup__input input">
					<span className="input__heading">Email</span>
					<input
						name="email"
						type="email"
						required
						value={email}
						onChange={handleEmailChange}
						id={emailError ? "input-error" : ""}
					/>
					{emailError && <span className="input__error">{emailError}</span>}
				</label>
				<label className="trip-popup__input input">
					<span className="input__heading">Password</span>
					<input
						name="password"
						type="password"
						autoComplete="new-password"
						required
						minLength={3}
						maxLength={20}
					/>
				</label>
				<button className="button" type="submit">
					Sign Up
				</button>
			</form>
			<span>
				Already have an account?
				<Link to="/sign-in" className="sign-up-form__link">
					Sign In
				</Link>
			</span>
		</main>
	);
};

export default SignUp;
