import { getResponse } from '../utils/response';

export const getCartoonsFetch = async () => {
	const response = await fetch('http://localhost:3010/cartoons');
	return await getResponse(response);
};
