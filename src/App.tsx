import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
const Footer = React.lazy(() => import("./components/common/Footer"));
const Header = React.lazy(() => import("./components/common/Header"));
const Bookings = React.lazy(() => import("./pages/Bookings"));
const Home = React.lazy(() => import("./pages/Home"));
const SignIn = React.lazy(() => import("./pages/SignIn"));
const SignUp = React.lazy(() => import("./pages/SignUp"));
const TripPage = React.lazy(() => import("./pages/TripPage"));

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route
					path="/"
					element={
						<React.Suspense fallback={<div>Loading...</div>}>
							<Home />
						</React.Suspense>
					}
				/>
				<Route
					path="sign-up"
					element={
						<React.Suspense fallback={<div>Loading...</div>}>
							<SignUp />
						</React.Suspense>
					}
				/>
				<Route
					path="sign-in"
					element={
						<React.Suspense fallback={<div>Loading...</div>}>
							<SignIn />
						</React.Suspense>
					}
				/>
				<Route
					path="trip/:id"
					element={
						<React.Suspense fallback={<div>Loading...</div>}>
							<TripPage />
						</React.Suspense>
					}
				/>
				<Route
					path="bookings"
					element={
						<React.Suspense fallback={<div>Loading...</div>}>
							<Bookings />
						</React.Suspense>
					}
				/>
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
