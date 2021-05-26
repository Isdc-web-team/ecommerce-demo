import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FoodDataProvider from '../provider/reducers/cartProvider';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
import Home from './Home/Home';
import ProductDetails from './Home/ProductDetails';
import Navbar from './Navbar/Navbar';


const App = () => {


	return (
		<FoodDataProvider>
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path="/" >
						<Home />
					</Route>
					<Route path="/product/:id">
						<ProductDetails />
					</Route>
					<Route path="/cart">
						<Cart />
					</Route>
					<Route path="/checkout" >
						<Checkout />
					</Route>
				</Switch>
			</BrowserRouter>
		</FoodDataProvider>
	);
};

export default App;