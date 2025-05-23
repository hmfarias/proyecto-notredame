import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo.png'; // Importá el logo

const Footer = () => {
	return (
		<footer className="bg-dark text-light py-3 mt-auto">
			<Container>
				<Row className="align-items-center">
					{/* Logo  */}
					<Col md={4} className="text-center text-md-start mb-2 mb-md-0">
						<Image src={logo} alt="Logo" height="40" className="me-2" />
					</Col>

					{/* Copyright */}
					<Col md={4} className="text-center mb-2 mb-md-0">
						<small>&copy; {new Date().getFullYear()} All rights reserved</small>
					</Col>

					{/* Social Media */}
					<Col md={4} className="text-center text-md-end">
						<a
							href="https://facebook.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-light me-3"
						>
							<FaFacebookF size={24} />
						</a>
						<a
							href="https://twitter.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-light me-3"
						>
							<FaTwitter size={24} />
						</a>
						<a
							href="https://instagram.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-light"
						>
							<FaInstagram size={24} />
						</a>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
