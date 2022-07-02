import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { UserProvider, useUser } from './context/UserContext';
import Authentication from "./pages/Authentication/Authentication";
import Profile from './pages/Profile/Profile';
import Search from './pages/Search/Search';

const App = () => {

	return (
		<BrowserRouter>
			<UserProvider>

				<Navbar />
				<Routes>
					<Route path='/auth' element={<Authentication />} />
					<Route path='/search' element={<Search />} />
					<Route path='/profile' element={<Profile />} />
				</Routes>
			</UserProvider>
		</BrowserRouter>
	);
};

export default App;
