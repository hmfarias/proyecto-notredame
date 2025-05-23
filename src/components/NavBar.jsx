import { Container, Image, Nav, Navbar, Dropdown, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import CartWidget from './CartWidget';
import { useEffect, useState } from 'react';

const NavBar = () => {
	const [itemsData, setItemsData] = useState([]);

	useEffect(() => {
		fetch('https://dummyjson.com/products/categories')
			.then((res) => res.json())
			.then((data) => {
				setItemsData(data);
			})
			.catch((error) => {
				console.error('Error fetching categories:', error);
			});
	}, []);

	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container fluid className="px-4">
				{/* IZQUIERDA: logo */}
				<Navbar.Brand as={Link} to="/">
					<Image src={logo} alt="Logo" height="40" />
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="main-navbar" />
				<Navbar.Collapse id="main-navbar" className="justify-content-between">
					{/* CENTRO: navegación */}
					<Nav className="ms-auto align-items-center gap-3">
						<Nav.Link as={Link} to="/">
							Home
						</Nav.Link>

						{/* Dropdown de Products con subcategorías */}
						<NavDropdown title="Products" id="products-dropdown">
							<NavDropdown.Item as={Link} to="/products">
								All Products
							</NavDropdown.Item>
							<NavDropdown.Divider />
							{itemsData?.map((category) => (
								<NavDropdown.Item
									key={category.slug}
									as={Link}
									to={`/category/${category.slug}`}
								>
									{category.name}
								</NavDropdown.Item>
							))}
						</NavDropdown>

						<Nav.Link as={Link} to="/about">
							About
						</Nav.Link>
						<Nav.Link as={Link} to="/contact">
							Contact
						</Nav.Link>
					</Nav>

					{/* DERECHA: ícono de carrito */}
					<Nav>
						<Nav.Link as={Link} to="/cart">
							<CartWidget />
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
