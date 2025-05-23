import { Container, Row, Col } from 'react-bootstrap';
import { Item } from './Item';

export const ItemListContainer = ({ products }) => {
	return (
		<Container fluid className="py-4 min-vh-100">
			<Row className="justify-content-center g-4">
				{products.map((item) => (
					<Col key={item.id} xs={10} sm={6} md={4} lg={3}>
						<Item item={item} />
					</Col>
				))}
			</Row>
		</Container>
	);
};
