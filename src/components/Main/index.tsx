import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPages } from '../../selectors/pages';
import { getPagesThunk } from '../../thunks/pages';

import style from './main.module.css';

export const Main: FC = () => {
	const dispatch = useDispatch();
	const pages = useSelector(getPages);

	useEffect(() => {
		dispatch(getPagesThunk());
	}, []);

	return (
		<section className={style.main}>
			<div className={style.image}></div>
			<ul className={style.container}>
				{pages.map(page => (
					<li className={style.item} key={page.id}>
						<h2 className={style.title}>{page.name}</h2>
						<p className={style.about}>{page.about}</p>
						<div className={style.img}></div>
					</li>
				))}
			</ul>
		</section>
	);
};
