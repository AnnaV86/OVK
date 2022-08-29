import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import style from './navbarMenu.module.css';

export const NavBarMenu: FC = () => {
	return (
		<section className={style.navbarMenu}>
			<NavLink className={style.link} to="/">
				Главная
			</NavLink>
			<NavLink className={style.link} to="/cartoons">
				Мультфильмы
			</NavLink>
			<NavLink className={style.link} to="/tasks">
				Задания
			</NavLink>
			<NavLink className={style.link} to="/articles">
				Статьи
			</NavLink>
			<NavLink className={style.link} to="/forum">
				Форум
			</NavLink>
			<NavLink className={style.link} to="/logout">
				Выйти
			</NavLink>
		</section>
	);
};
