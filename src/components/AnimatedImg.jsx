import { motion } from 'framer-motion'; // Usamos framer-motion directamente
import { Image } from 'react-bootstrap'; // Opcional, podés usar <img /> si querés
import heroDesktop from '../assets/hero-desktop.png'; // Importá el logo
import heroMobile from '../assets/hero-mobile.png'; // Importá el logo

/**
 * @description The Animated Image component returns a component that animates an image on the page
 */
const AnimatedImg = () => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
				duration: 0.7,
				scale: { type: 'spring', bounce: 0.5 },
			}}
			className="d-flex justify-content-center align-items-center p-4"
		>
			{/* Imagen para escritorio */}
			<Image
				src={heroDesktop}
				alt="Screenshots of the dashboard"
				width="1000"
				height="760"
				className="d-none d-md-block"
				fluid
			/>

			{/* Imagen para móvil */}
			<Image
				src={heroMobile}
				alt="Screenshots of the dashboard"
				width="560"
				height="620"
				className="d-block d-md-none"
				fluid
			/>
		</motion.div>
	);
};

export default AnimatedImg;
