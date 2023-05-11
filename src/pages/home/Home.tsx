import {
		useContext,
} from 'react';
import { ApiContext } from '../../App';
import { Info } from './components/Info';
import { PathInfo } from './components/PathInfo';

export default function Home() {
		const apiData = useContext(ApiContext);

		return (
				<div>
						{apiData.info && (
								<Info info={apiData.info} />
						)}

						{apiData.paths?.length && (
								<div>
										{apiData.paths.map((path) => {
												return <PathInfo path={path} key={path.pathName} />
										})}
								</div>
						)}
				</div>
		);
}