import { Container, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image404 from '../assets/404.png';

const NotFound = () => {
	return (
		<Container
			fluid
			className="d-flex flex-column justify-content-center align-items-center text-center"
			style={{
				minHeight: '100vh',
				background: 'linear-gradient(to right, #e0f7fa, #fce4ec)', // claro (azul a rosa)
				padding: '2rem',
			}}
		>
			<Image
				src={image404}
				alt="404 Illustration"
				style={{
					maxWidth: '400px',
					marginBottom: '1.5rem',
					borderRadius: '1rem',
					boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
				}}
			/>

			<h1
				style={{
					fontSize: '2.5rem',
					fontWeight: 'bold',
					background: 'linear-gradient(to right, #20c997, #6f42c1)',
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
				}}
			>
				Oops! Page not found.
			</h1>

			<p className="text-muted fs-5 mt-3 mb-4" style={{ maxWidth: '600px' }}>
				It seems that you missed! Don&apos;t worry, there is always something interesting
				to discover.
			</p>

			<Link to="/">
				<Button
					variant="dark"
					size="lg"
					style={{
						boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
						paddingInline: '2rem',
					}}
				>
					Go Home
				</Button>
			</Link>
		</Container>
	);
};

export default NotFound;
