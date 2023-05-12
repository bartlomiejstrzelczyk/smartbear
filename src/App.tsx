import React, {
		createContext,
		useEffect,
		useState
} from 'react';
import { RouterProvider, } from 'react-router-dom';

import './App.css';
import { useGetData } from './hooks/useGetData';
import {
		MappedResponseShape,
		ResponseShape,
} from './types/types';
import { router } from './router';
import { mapPaths } from './helpers';

export const ApiContext = createContext({} as MappedResponseShape);

function App() {
		const [apiData, setApiData] = useState<MappedResponseShape>({} as MappedResponseShape);
		const [isLoading, setIsLoading] = useState(true);
		const getData = useGetData();

		const fetchApiShape = async () => {
				setIsLoading(true);
				const apiShape: ResponseShape = await getData();

				setApiData({
						...apiShape,
						paths: mapPaths(apiShape.paths)
				});
				setIsLoading(false);
		}

		useEffect(() => {
			fetchApiShape();
		}, []);


		if (isLoading) {
				return (
						<div className="grid place-content-center">
								Loading data...
						</div>
				)
		}

		return (
				<div className="px-8 py-4">
				    <ApiContext.Provider value={apiData}>
						    <RouterProvider router={router} />
				    </ApiContext.Provider>
				</div>
		);
}

export default App;
