const data = {
	data: {
		results: [
			{
				name: {
					first: "Jhon",
					last: "Doe"
				},
				picture: {
					large: "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__480.jpg"
				},
				login: {
					username: "TheDeep"
				}
			}
		]
	}
};

const mockResponse = {
	get: jest.fn().mockResolvedValue(data)
};

export default mockResponse;
