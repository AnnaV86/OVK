import { getResponse } from '../utils/response';

export const getPagesFetch = async () => {
	const response = await fetch('http://localhost:3010/pages');
	return await getResponse(response);
};
