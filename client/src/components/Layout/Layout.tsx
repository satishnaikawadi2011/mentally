import React from 'react';
import { Helmet } from 'react-helmet';
import { APP_NAME } from '../../constants';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import classes from './layout.module.css';

interface Props {
	title: string;
	children?: any;
	className?: string;
	style?: React.CSSProperties;
	header?: boolean;
	footer?: boolean;
}

const Layout: React.FC<Props> = ({ title, children, className, style, footer = true, header = true }) => {
	return (
		<React.Fragment>
			<Helmet>
				<title>
					{title} | {APP_NAME}
				</title>
			</Helmet>
			{header && <Header />}
			<div className={`${classes.content} ${className}`} style={{ ...style }}>
				{children}
			</div>
			{footer && <Footer />}
		</React.Fragment>
	);
};

export default Layout;
