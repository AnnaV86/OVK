import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import style from './navbarAuth.module.css';

export const NavBarAuth: FC = () => {
	return (
		<section className={style.navbarAuth}>
			<NavLink className={style.link} to="/">
				Главная
			</NavLink>
			<NavLink className={style.link} to="/login">
				Войти
			</NavLink>
			<NavLink className={style.link} to="/registration">
				Регистрация
			</NavLink>
		</section>
	);
};
