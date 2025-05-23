import { CartProvider } from './context/CartContext';
import MainRouter from './routes/MainRouter';

const App = () => {
	return (
		<CartProvider>
			<MainRouter />
		</CartProvider>
	);
};

export default App;
