import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Products from '../pages/Products';
import About from '../pages/About';
import NavBar from '../components/NavBar';
import Cart from '../pages/Cart';
import ItemDetail from '../pages/ItemDetail';
import Footer from '../components/Footer';
import Payment from '../pages/Payment';
import Category from '../pages/Category';

const MainRouter = () => {
	return (
		<Router>
			<div className="d-flex flex-column min-vh-100">
				<NavBar />
				<main className="flex-grow-1">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/products" element={<Products />} />
						<Route path="/item/:id" element={<ItemDetail />} />
						<Route path="/category/:id" element={<Category />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/payment" element={<Payment />} />
					</Routes>
				</main>

				<Footer />
			</div>
		</Router>
	);
};

export default MainRouter;
