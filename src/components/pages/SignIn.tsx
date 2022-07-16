import React, { useState } from "react";
import { Link } from "react-router-dom";
import isValidEmail from "src/helpers/isValidEmail";
import useRouter from "src/hooks/useRouter";

const SignIn: React.FC = () => {
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState("");
	const { navigate } = useRouter();
	const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!isValidEmail(email)) {
			setEmailError("Invalid email");
			return;
		}
		navigate("/");
	};

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmailError("");
		setEmail(e.target.value);
	};

	return (
		<main className="sign-in-page">
			<h1 className="visually-hidden">Travel App</h1>
			<form className="sign-in-form" autoComplete="off" onSubmit={handleSignIn}>
				<h2 className="sign-in-form__title">Sign In</h2>
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
					Sign In
				</button>
			</form>
			<span>
				Already have an account?
				<Link to="/sign-up" className="sign-in-form__link">
					Sign Up
				</Link>
			</span>
		</main>
	);
};

export default SignIn;
