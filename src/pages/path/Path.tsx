import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { ApiContext } from '../../App';

export default function Path() {
		const apiData = useContext(ApiContext)
		let { pathId } = useParams();

		console.log(apiData);
		console.log(pathId);
		return (
				<div>
						Path
				</div>
		);
}