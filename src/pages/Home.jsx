import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AnimatedImg from '../components/AnimatedImg';

const Home = () => {
	return (
		<Container className="mt-4">
			<Row
				className="align-items-center justify-content-center"
				style={{ minHeight: '80vh' }} // Centrado vertical visible
			>
				<Col md={6} className="mb-4 mb-md-0 text-center text-md-start">
					<h1>
						<span className="text-primary">Welcome to </span>
						<strong>NotreDame!</strong>
					</h1>
					<p className="lead mt-3">
						An online multi-shop where you can find any product you need!
					</p>

					<Link to="/products">
						<Button variant="primary" size="lg" className="mt-4">
							Start →
						</Button>
					</Link>
				</Col>

				<Col md={6}>
					<AnimatedImg />
				</Col>
			</Row>
		</Container>
	);
};

export default Home;
