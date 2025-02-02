import React, {useContext, useState} from 'react';
import {FaLinkedinIn, FaTwitter, FaGithub, FaDev, FaEnvelope} from 'react-icons/fa';
import {Link} from 'gatsby';
import {Toggle, Aside, Nav, Social, Icon} from './offcanvas.style';
import {Store} from 'store';

const sites = [
	{url: `https://www.linkedin.com/in/tim-smith-1a651aa0/`, title: `LinkedIn`, icon: <FaLinkedinIn />},
	{url: `https://twitter.com/iam_timsmith`, title: `Twitter`, icon: <FaTwitter />},
	{url: `https://github.com/iamtimsmith`, title: `Github`, icon: <FaGithub />},
	{url: `https://dev.to/iam_timsmith`, title: `Dev.to`, icon: <FaDev />},
	{url: `mailto:tim@iamtimsmith.com`, title: `Email`, icon: <FaEnvelope />}
];

export const Offcanvas = () => {
	const [offcanvas, setOffcanvas] = useState(false);
	// const {offcanvas, setOffcanvas} = useContext(Store);

	const handleToggle = (show = offcanvas) => {
		setOffcanvas(!show);
	}

	return (
		<React.Fragment>
			<Toggle onClick={() => handleToggle()} show={offcanvas} aria-label='Toggle'>
				<span />
				<span />
			</Toggle>
			<Aside show={offcanvas}>
				<Nav data-testid='mobile'>
					<Link
						to='/'
						onClick={() => handleToggle(false)}
						data-testid='mobilehome'
					>Home</Link>
					<Link
						to='/projects'
						onClick={() => handleToggle(false)}
						data-testid='mobileprojects'
					>Projects</Link>
					<Link
						to='/blog'
						onClick={() => handleToggle(false)}
						data-testid='mobileblog'
					>Blog</Link>
				</Nav>
				<Social>
					{sites.map((site, key) => (
						<Icon
							key={key}
							href={site.url}
							aria-label={site.title}
							target='_blank'
							rel='noopenner nofollow'
						>{site.icon}</Icon>
					))}
				</Social>
			</Aside>
		</React.Fragment>
	);
};
