import {
	Container,
	Row,
	Col,
	Image,
	Button,
	Stack,
	Card,
	Alert,
	ButtonGroup,
} from 'react-bootstrap';
import { MdLocalShipping } from 'react-icons/md';
import { BsPlusLg, BsDashLg } from 'react-icons/bs';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';

/** Stock status message */
const GetStockMessage = ({ stock }) => {
	let message = '';
	let color = 'success';

	if (stock === 0) {
		message = 'OUT OF STOCK - Soon available!';
		color = 'danger';
	} else if (stock <= 5) {
		message = `${stock} - Last available units!`;
		color = 'warning';
	} else {
		message = `${stock} available`;
		color = 'success';
	}

	return <span className={`text-${color} fw-bold`}>{message}</span>;
};

export const ItemDetailContainer = ({ item }) => {
	const { cartState, addItem, removeItem } = useContext(CartContext);
	const [count, setCount] = useState(0);

	useEffect(() => {
		const existing = cartState.find((it) => it.id === item.id);
		if (existing) {
			setCount(existing.qtyItem);
		}
	});

	const handleAddItem = () => {
		const newCount = count + 1;
		if (newCount <= item.stock) {
			setCount(newCount);
			addItem(item, newCount);
		} else {
			alert(`Stock insuficiente. Ya agregaste ${count} unidades.`);
		}
	};

	const handleRemoveItem = () => {
		if (count > 0) {
			setCount(count - 1);
			removeItem(item);
		} else {
			alert('No hay productos de este tipo en el carrito.');
		}
	};

	return (
		<Container className="py-5">
			<Row className="align-items-center">
				<Col md={6}>
					<Image
						src={item.thumbnail}
						alt={item.title}
						fluid
						rounded
						style={{
							boxShadow: '0 10px 24px rgba(0, 0, 0, 0.25)',
							borderRadius: '16px',
							maxHeight: '500px',
							objectFit: 'contain',
							width: '100%',
						}}
					/>
				</Col>

				<Col md={6}>
					<Card className="p-4 border-0 shadow-sm">
						<Card.Body>
							<Card.Title as="h2" className="mb-3">
								{item.title}
							</Card.Title>
							<h4 className="text-muted mb-4">${item.price} USD</h4>
							<p className="mb-4">{item.description}</p>

							<p>
								<strong>Stock:</strong> <GetStockMessage stock={item.stock} />
							</p>

							<ButtonGroup className="mb-3">
								<Button variant="dark" onClick={handleRemoveItem}>
									<BsDashLg />
								</Button>
								<Button variant="outline-dark" disabled>
									{count}
								</Button>
								<Button variant="dark" onClick={handleAddItem}>
									<BsPlusLg />
								</Button>
							</ButtonGroup>

							<hr />

							<div className="d-flex align-items-center gap-2 mt-3">
								<MdLocalShipping size={24} />
								<small className="text-muted">2-3 business days delivery</small>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};
