import React, { useState } from "react";
import { Link } from "react-router-dom";
import useRouter from "src/hooks/useRouter";
interface Props {}

const SignUp: React.FC<Props> = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const { navigate } = useRouter();
	const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		navigate("/");
	};
	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setEmail(e.target.value);

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setName(e.target.value);

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
					/>
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
