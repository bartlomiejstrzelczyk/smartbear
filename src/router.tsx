import {
		createBrowserRouter,
		createRoutesFromElements,
		Route
} from 'react-router-dom';
import Home from './pages/home/Home';
import Path from './pages/path/Path';

export const router = createBrowserRouter(
		createRoutesFromElements(
				<>
						<Route path="/" element={<Home />} />
						<Route path="/path/:pathId" element={<Path />} />
				</>
		)
);
