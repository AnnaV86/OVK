import { getCartoonsFetch } from '../api/cartoons';
import { getCartoons } from '../store/modules/cartoons';

export const getCartoonsThunk = () => async dispatch => {
	const response = await getCartoonsFetch();
	if (response) {
		dispatch(getCartoons(response));
	}
};
