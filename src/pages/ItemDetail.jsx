/**
 * * ItemDetail.jsx
 * Implements and returns:
 *  - a spinner component called Loader, While the detail of the selected product is being loaded ;
 *  or
 *  - all complete detail for the product selected.
 */

import { useParams } from 'react-router';
import { ItemDetailContainer } from '../components/ItemDetailContainer';
import { useEffect, useState } from 'react';
import { Loader } from '../components/Loader';

const ItemDetail = () => {
	const { id } = useParams();

	const [product, setProduct] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`https://dummyjson.com/products/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setProduct(data);
				setLoading(false);
			})
			.catch((error) => {
				console.error('Error fetching product:', error);
				setLoading(false);
			});
	}, [id]);

	return loading ? <Loader /> : <ItemDetailContainer item={product} />;
};
export default ItemDetail;
