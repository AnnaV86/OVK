import React, { FC } from 'react';
import style from './header.module.css';
import logo from '../../images/logoNew.png';
import { NavBar } from './components/NavBar';

export const Header: FC = () => {
	return (
		<header className={style.header}>
			<img className={style.logo} src={logo} alt="logo"></img>
			<NavBar />
		</header>
	);
};
