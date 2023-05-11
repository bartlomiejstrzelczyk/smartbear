import React, {
		createContext,
		useEffect,
		useState
} from 'react';
import {
		RouterProvider,
} from 'react-router-dom';

import './App.css';
import { useGetData } from './hooks/useGetData';
import {
		MappedResponseShape,
		ResponseShape,
} from './types/types';
import { router } from './router';
import {
		MappedMethod,
		MappedResponse,
		Methods,
		PathMapped,
		PathsObj,
		Responses
} from './types/paths';

export const ApiContext = createContext({} as MappedResponseShape);

function mapResponses(responses: Responses): MappedResponse[] {
		return Object.entries(responses).map(([key, value]) => {
				return {
						code: key,
						description: value.description,
				}
		});
}

function mapMethods(methods: Methods): MappedMethod[] {
		return Object.entries(methods).map(([key, value]) => {
				return {
						...value,
						responses: mapResponses(value.responses),
						method: key,
				};
		});
}

const mapPaths = (pathsObj: PathsObj): PathMapped[] => {
		let id = 0;
		return Object.entries(pathsObj).map(([key, value]) => {
				id++;
				return {
						pathName: key,
						methods: mapMethods(value),
						id,
				}
		});
}

function App() {
		const [apiData, setApiData] = useState<MappedResponseShape>({} as MappedResponseShape);
		const getData = useGetData();

		const fetchApiShape = async () => {
				const apiShape: ResponseShape = await getData();

				setApiData({
						...apiShape,
						paths: mapPaths(apiShape.paths)
				});
		}

		useEffect(() => {
			fetchApiShape();
		}, []);

  return (
    <div className="px-8 py-4">
		    <ApiContext.Provider value={apiData}>
				    <RouterProvider router={router} />
		    </ApiContext.Provider>
    </div>
  );
}

export default App;
