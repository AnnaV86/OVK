import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../selectors/users';
import { getUsersThunk } from '../../thunks';

import style from './main.module.css';

export const Main: FC = () => {
	// const dispatch = useDispatch();
	// const users = useSelector(getUsers);

	// useEffect(() => {
	// 	dispatch(getUsersThunk());
	// }, []);

	return (
		<section className={style.main}>
			<div className={style.image}></div>
		</section>
	);
};
