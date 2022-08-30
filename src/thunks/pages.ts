import { getPagesFetch } from '../api';
import { getPages } from '../store/modules/pages';

export const getPagesThunk = () => async dispatch => {
	const response = await getPagesFetch();
	if (response) {
		dispatch(getPages(response));
	}
};
