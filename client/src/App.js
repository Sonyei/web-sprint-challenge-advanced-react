import React, { useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import PlantList from "./components/PlantList";
import ShoppingCart from "./components/ShoppingCart";
import CheckoutForm from "./components/CheckoutForm";
import useLocalStorage from "./hooks/useLocalStorage";
import NavBar from "./components/NavBar";

import "./App.css";

function App() {
	// array of plants that have been added to the cart
	const [cart, setCart] = useState([]);
	const [darkMode, setDarkMode] = useLocalStorage(
		"Theme Preference: Dark Mode",
		false
	);

	// add a plant to the cart
	const addToCart = (plant) => {
		setCart([...cart, plant]);
	};

	// remove a plant from the cart
	const removeFromCart = (plant) => {
		setCart(cart.filter((p) => p.id !== plant.id));
	};

	return (
		<div className="parent-wrapper">
			<div className={darkMode ? "dark-mode parent-wrapper" : "parent-wrapper"}>
				<NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
				<Router>
					<nav className="container">
						<ul className="steps">
							<li>
								<NavLink exact to="/">
									Plants
								</NavLink>
							</li>
							<li>
								<NavLink to="/cart">
									Cart
									<span className="cart-badge">
										{cart.length > 0 && cart.length}
									</span>
								</NavLink>
							</li>
						</ul>
					</nav>
					<Route
						exact
						path="/"
						render={() => <PlantList addToCart={addToCart} />}
					/>
					<Route
						path="/cart"
						render={(props) => (
							<ShoppingCart
								{...props}
								cart={cart}
								removeFromCart={removeFromCart}
							/>
						)}
					/>
					<Route path="/checkout" component={CheckoutForm} />
				</Router>
			</div>
		</div>
	);
}

export default App;
