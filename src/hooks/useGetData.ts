export function useGetData() {
		return async () => {
				const response = await fetch('https://petstore.swagger.io/v2/swagger.json');
				return response.json();
		};
}