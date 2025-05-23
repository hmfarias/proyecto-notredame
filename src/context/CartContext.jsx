/**
 * *CartContext
 * Define the context for application shopping cart
 */

import { createContext, useState, useEffect } from 'react'; // Added useEffect

// From this, you can find the 'CartContext' and its elements at any point in the application
export const CartContext = createContext();

// Definition of PROVIDER --- (children are all consumers of this context)
export const CartProvider = ({ children }) => {
	//The shopping cart counter ("cartState") is application-wide in scope and can therefore be defined in this context
	const [cartState, setCartState] = useState(() => {
		// Load cartState from local storage if it exists
		const savedCart = localStorage.getItem('cartState');
		return savedCart ? JSON.parse(savedCart) : [];
	}); //cartState and its updater function are now GLOBAL

	// Save cartState to local storage whenever it changes
	useEffect(() => {
		localStorage.setItem('cartState', JSON.stringify(cartState));
	}, [cartState]);

	//Definition of actions that can be performed on the shopping cart

	/**
	 * @description Receive the product and the quantity that is being added to the shopping cart
	 * @param {*} product is the object containing all the data of the product to be added
	 * @param {*} qtyItem
	 */
	const addItem = (product, qtyItem) => {
		//First validate if the received product already exists in the shopping cart.
		const existingProduct = cartState.find((item) => item.id === product.id);

		//If the product already exists, the product is not added but only increased in quantity.
		if (existingProduct) {
			setCartState(
				cartState.map((item) =>
					item.id === product.id ? { ...item, qtyItem: item.qtyItem + 1 } : item
				)
			);
		} else {
			//If the product doesn't exist in the shopping cart, it will only be added
			setCartState([...cartState, { ...product, qtyItem: qtyItem }]);
		}
	};

	/**
	 * @description Remove an item from the shopping cart, receive the product that is being added to the shopping cart (quantity isn't neccesary)
	 * @param {*} product is the object containing all the data of the product to be removed
	 */
	const removeItem = (product) => {
		//First validate if the received product already exists in the shopping cart.
		const existingProduct = cartState.find((item) => item.id === product.id);

		//If the product already exists, its quantity is decreased by one.
		if (existingProduct) {
			// If the quantity of the product is equal to one, it will be zero when decremented by one, so it is removed from the array.
			if (existingProduct.qtyItem === 1) {
				setCartState(cartState.filter((item) => item.id != product.id));
			} else {
				// If the quantity of the product is greater than one, the quantity is only decreased by one.
				setCartState(
					cartState.map((item) =>
						item.id === product.id ? { ...item, qtyItem: item.qtyItem - 1 } : item
					)
				);
			}
		}
	};

	/**
	 * @description completely removes the product from the shopping cart
	 * @param {*} product is the object containing all the data of the product to be deleted
	 */
	const deleteItem = (product) => {
		setCartState(cartState.filter((item) => item.id != product.id));
	};

	return (
		<CartContext.Provider
			value={{
				// here are passed the elements that will be global for all 'children' (see App.jsx)
				cartState,
				setCartState,
				addItem,
				removeItem,
				deleteItem,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
