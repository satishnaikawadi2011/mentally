import React from 'react';
import { Helmet } from 'react-helmet';
import { APP_NAME } from '../../constants';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import classes from './layout.module.css';

interface Props {
	title: string;
	children?: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
}

const Layout: React.FC<Props> = ({ title, children, className, style }) => {
	return (
		<React.Fragment>
			<Helmet>
				<title>
					{title} | {APP_NAME}
				</title>
			</Helmet>
			<Header />
			<div className={`${classes.content} ${className}`} style={{ ...style }}>
				{children}
			</div>
			<Footer />
		</React.Fragment>
	);
};

export default Layout;
