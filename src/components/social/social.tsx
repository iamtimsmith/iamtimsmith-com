import React from 'react';
import {FaLinkedinIn, FaTwitter, FaGithub, FaDev, FaEnvelope} from 'react-icons/fa';
import {BackToTop} from 'components';
import {Aside, Nav, Icon} from './social.style';

const sites = [
	{url: `https://www.linkedin.com/in/tim-smith-1a651aa0/`, title: `LinkedIn`, icon: <FaLinkedinIn />},
	{url: `https://twitter.com/iam_timsmith`, title: `Twitter`, icon: <FaTwitter />},
	{url: `https://github.com/iamtimsmith`, title: `Github`, icon: <FaGithub />},
	{url: `https://dev.to/iam_timsmith`, title: `Dev`, icon: <FaDev />},
	{url: `mailto:tim@iamtimsmith.com`, title: `Email`, icon: <FaEnvelope />}
];

export const Social = () => {
	return (
		<Aside data-testid='social'>
			<Nav aria-label='social nav'>
				<BackToTop />
				{sites.map((site, key) => (
					<Icon
						key={key}
						href={site.url}
						aria-label={site.title}
						target='_blank'
						rel='noopenner nofollow'
					>{site.icon}</Icon>
				))}
			</Nav>
		</Aside>
	);
};
