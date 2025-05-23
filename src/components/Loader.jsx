import { Spinner, Container } from 'react-bootstrap';

export const Loader = () => {
	return (
		<Container
			fluid
			className="d-flex justify-content-center align-items-center"
			style={{ height: '90vh' }}
		>
			<Spinner animation="border" variant="primary" size="xl" />
		</Container>
	);
};
