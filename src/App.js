import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Authentication from "./pages/Authentication/Authentication";
import Search from './pages/Search/Search';

const App = () => {

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/auth' element={<Authentication />} />
				<Route path='/search' element={<Search />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
