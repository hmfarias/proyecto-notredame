import { Card } from 'react-bootstrap';
import { BsArrowUpRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const Item = ({ item }) => {
	return (
		<Card
			className="h-100 mx-auto border card-hover"
			style={{
				background: 'rgba(108, 114, 157, 0.28)',
				boxShadow: '7px 7px 14px rgba(0, 0, 0, 0.3)',
				borderRadius: '14px', // Esquinas más redondeadas
				maxWidth: '350px',
				transition: 'transform 0.3s ease, box-shadow 0.3s ease',
				borderColor: 'rgba(206, 46, 11, 0.28)',
			}}
		>
			{/* Imagen con más altura */}
			<div style={{ height: '300px', borderBottom: '1px solid black' }}>
				<Card.Img
					variant="top"
					src={item.thumbnail}
					alt={item.title}
					style={{ height: '100%', objectFit: 'scale-down' }}
				/>
			</div>

			<Card.Body>
				<Card.Title className="text-truncate">{item.title}</Card.Title>

				<div className="mb-2">
					<span className="bg-warning px-2 py-1 text-secondary small fw-medium">
						★ {item.rating}
					</span>
				</div>
				<div className="mb-2">
					<span className="bg-dark text-white px-2 py-1 small fw-medium">
						${item.price}
					</span>
				</div>
			</Card.Body>

			<Card.Footer className="border-top border-dark">
				<Link
					to={`/item/${item.id}`}
					className="view-more-link d-flex justify-content-between align-items-center text-decoration-none px-3 py-2"
				>
					<span className="fw-semibold">View more</span>
					<BsArrowUpRight />
				</Link>
			</Card.Footer>
		</Card>
	);
};
