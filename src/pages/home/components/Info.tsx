import { ProjectInfo } from '../../../types/info';

type Props = {
		readonly info: ProjectInfo;
}

export function Info({ info }: Props) {
		return (
				<div className="pb-2">
						<p>
								{info.title} {info.version}
						</p>

						<p>
								Contact email: {info.contact.email}
						</p>

						<p>
								License: {info.license.name}
						</p>

						<p className="py-2">
								{info.description}
						</p>
				</div>
		)
}