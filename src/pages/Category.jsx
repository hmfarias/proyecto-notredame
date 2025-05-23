import { useEffect, useState } from 'react';
import { ItemListContainer } from '../components/ItemListContainer';
import { Loader } from '../components/Loader';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Category = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const { id } = useParams();

	useEffect(() => {
		fetch(`https://dummyjson.com/products/category/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setProducts(data.products);
				setLoading(false);
			})
			.catch((error) => {
				console.error('Error fetching products:', error);
				setLoading(false);
			});
	});

	return (
		<>
			<Container className="mt-4 mb-3  mx-4">
				<h2>Products</h2>
			</Container>

			{loading ? <Loader /> : <ItemListContainer products={products} />}
		</>
	);
};

export default Category;
