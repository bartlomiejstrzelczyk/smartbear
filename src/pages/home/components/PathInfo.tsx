import { Link } from "react-router-dom";
import { PathMapped } from '../../../types/paths';

type Props = {
		readonly path: PathMapped;
}

export function PathInfo({ path }: Props) {
		return (
				<div className="py-4">
						<Link to={`path/${path.id}`} className="underline text-blue-600">
								Path name: {path.pathName}
						</Link>

						<div>
								{path.methods.map((method) => (
										<div key={method.method} className="py-2">
												{method.method.toUpperCase()}

												<div>
														{method.responses.map((response) => (
																<div key={response.code} className="py-1">
																		<p>
																				Response code: {response.code}
																		</p>
																		<p>
																				Response description: {response.description}
																		</p>
																</div>
														))}
												</div>
										</div>
								))}
						</div>
				</div>
		)
}