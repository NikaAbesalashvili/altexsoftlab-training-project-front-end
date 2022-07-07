import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { UserProvider } from './context/UserContext';
import { Authentication, Profile, Search, Bookings, Guests } from './pages';

const App = () => {

	return (
		<BrowserRouter>
			<UserProvider>

				<Navbar />
				<Routes>
					<Route path='/auth' element={<Authentication />} />
					<Route path='/search' element={<Search />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/guests' element={<Guests />} />
					<Route path='/bookings' element={<Bookings />} />
				</Routes>
			</UserProvider>
		</BrowserRouter>
	);
};

export default App;
