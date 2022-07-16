import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Bookings from "./components/pages/Bookings";
import Home from "./components/pages/Home";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import TripPage from "./components/pages/TripPage";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="sign-up" element={<SignUp />} />
				<Route path="sign-in" element={<SignIn />} />
				<Route path="trip/:id" element={<TripPage />} />
				<Route path="bookings" element={<Bookings />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
