import { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';
import { Badge } from 'react-bootstrap';

const CartWidget = () => {
	const { cartState } = useContext(CartContext);
	const totalItemsCart = cartState.reduce((sum, item) => sum + item.qtyItem, 0);

	return (
		<div className="d-flex align-items-center gap-1">
			<FaShoppingCart size={22} />
			<Badge bg="secondary">{totalItemsCart}</Badge>
		</div>
	);
};

export default CartWidget;
