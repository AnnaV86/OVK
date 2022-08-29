import React, { FC } from 'react';
import { NavBarAuth } from './NavBarAuth';
import { NavBarMenu } from './NavBarMenu';

export const NavBar: FC = () => {
	const login = true;

	return <>{login ? <NavBarMenu /> : <NavBarAuth />}</>;
};
