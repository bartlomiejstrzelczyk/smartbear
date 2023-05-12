export type Parameters = {
		readonly description: string;
		readonly in: string;
		readonly name: string;
		readonly required: boolean;
}

export type Response = {
		readonly description: string;
}

export type MethodSecurityInfo = {
		readonly petstore_auth: string[];
}

export type Responses = {
		[key: string]: Response; // Key has to be valid response code
};

export type MethodData = {
		readonly consumes: string[];
		readonly description: string;
		readonly operationId: string;
		readonly parameters: Parameters[];
		readonly produces: string[];
		readonly responses: Responses;
		readonly security: MethodSecurityInfo;
		readonly summary: string;
		readonly tags: string[];
}

export type Methods = {
		readonly post?: MethodData;
		readonly put?: MethodData;
		readonly get?: MethodData;
		readonly delete?: MethodData;
}

export type PathsObj = {
		readonly [key: string]: Methods;
}

export type MappedMethod = Omit<MethodData, 'responses'> & { method: string; responses: MappedResponse[] };

export type PathMapped = {
		readonly id: number;
		readonly pathName: string;
		readonly methods: MappedMethod[]
}

export type MappedResponse = {
		readonly code: string;
		readonly description: Response['description'];
}