import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { ApiContext } from '../../App';
import { PathInfo } from '../../components/PathInfo';

export default function Path() {
		const apiData = useContext(ApiContext)
		let { pathId } = useParams();

		const pathData = apiData.paths.find((path) => {
				return path.id.toString() === pathId;
		});

		if (pathData) {
				return (
						<PathInfo path={pathData} />
				);
		}

		return null;
}