import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import {
	Container,
	Row,
	Col,
	Image,
	Button,
	Card,
	Alert,
	Stack,
	Badge,
	ButtonGroup,
} from 'react-bootstrap';
import { BsDashLg, BsPlusLg, BsTrash3 } from 'react-icons/bs';

const Cart = () => {
	const { cartState, addItem, removeItem, deleteItem } = useContext(CartContext);
	const navigate = useNavigate();

	const total = cartState.reduce((acc, item) => acc + item.price * item.qtyItem, 0);

	const handleDeleteItem = (item) => {
		deleteItem(item);
	};

	const handleNavigatePayment = () => {
		navigate('../payment');
	};

	return (
		<Container className="py-5" style={{ minHeight: 'calc(100vh - 10rem)' }}>
			<h2 className="text-center mb-4">Cart Details</h2>

			{cartState.length === 0 ? (
				<Alert variant="info" className="text-center">
					Your cart is empty.
				</Alert>
			) : (
				<Stack gap={4}>
					{cartState.map((item) => (
						<Card key={item.id} className="p-3 shadow-sm">
							<Row className="align-items-center">
								<Col xs={12} md={2} className="mb-3 mb-md-0 text-center">
									<Image
										src={item.thumbnail}
										alt={item.title}
										fluid
										rounded
										style={{ maxHeight: '100px', objectFit: 'cover' }}
									/>
								</Col>

								<Col md={6}>
									<h5>{item.title}</h5>
									<div className="d-flex align-items-center gap-3">
										<span>
											Price: $
											{item.price.toLocaleString('en-US', {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</span>
										<ButtonGroup>
											<Button
												variant="light"
												size="sm"
												style={{
													backgroundColor: 'rgb(173, 172, 172)',
													color: '#333',
													borderColor: '#ccc',
												}}
												onClick={() => removeItem(item)}
												disabled={item.qtyItem === 1}
											>
												<BsDashLg />
											</Button>
											<Button
												variant="outline-secondary"
												size="sm"
												disabled
												style={{
													width: '40px',
													backgroundColor: '#f8f9fa',
													border: '1px solid #ccc',
													color: '#495057',
													fontWeight: 'bold',
												}}
											>
												{item.qtyItem}
											</Button>
											<Button
												variant="light"
												size="sm"
												style={{
													backgroundColor: 'rgb(173, 172, 172)',
													color: '#333',
													borderColor: '#ccc',
												}}
												onClick={() => addItem(item)}
												disabled={item.qtyItem >= item.stock}
											>
												<BsPlusLg />
											</Button>
										</ButtonGroup>
									</div>
								</Col>

								<Col md={3} className="text-md-end mt-3 mt-md-0">
									<p className="mb-1 fw-semibold">
										Subtotal: $
										{(item.price * item.qtyItem).toLocaleString('en-US', {
											minimumFractionDigits: 2,
											maximumFractionDigits: 2,
										})}
									</p>
									<Button
										variant="outline-danger"
										size="sm"
										onClick={() => handleDeleteItem(item)}
									>
										<BsTrash3 />
									</Button>
								</Col>
							</Row>
						</Card>
					))}

					<hr />

					<Row className="align-items-center">
						<Col>
							{/* <h4>Total: $ {total.toFixed(2)}</h4> */}
							<h4>
								Total: ${' '}
								{total.toLocaleString('en-US', {
									minimumFractionDigits: 2,
									maximumFractionDigits: 2,
								})}
							</h4>
						</Col>
						<Col className="text-end">
							<Button variant="dark" onClick={handleNavigatePayment}>
								Buy
							</Button>
						</Col>
					</Row>
				</Stack>
			)}
		</Container>
	);
};

export default Cart;
