import {
		MappedMethod,
		MappedResponse,
		Methods,
		PathMapped,
		PathsObj,
		Responses
} from './types/paths';

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

export const mapPaths = (pathsObj: PathsObj): PathMapped[] => {
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