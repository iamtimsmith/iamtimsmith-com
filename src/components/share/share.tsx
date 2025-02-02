import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {FaFacebookF, FaTwitter, FaLinkedin, FaPinterest, FaEnvelope} from 'react-icons/fa';
import {ShareBar, ShareNav, ShareText, ShareButton} from './share.style';
import {IShareProps} from './share.i';

export const Share = ({url, title, image}: IShareProps) => {
	const [visible, setVisible] = useState(false);

	const handleScroll = () => setVisible(window.scrollY > 1000);

	useEffect(() => {
		document.addEventListener(`scroll`, handleScroll);
		return () => document.removeEventListener(`scroll`, handleScroll);
	}, []);

	return (
		<ShareBar visible={visible} data-testid='share'>
			<ShareNav>
				<ShareButton
					site='facebook'
					href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
					target='_blank'
				><FaFacebookF/></ShareButton>

				<ShareButton
					site='twitter'
					href={`https://twitter.com/share?url=${url}&text=Check out this article!`}
					target='_blank'
				><FaTwitter/></ShareButton>

				<ShareButton
					site='linkedin'
					href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`}
					target='_blank'
				><FaLinkedin/></ShareButton>

				<ShareButton
					site='pinterest'
					href={`https://pinterest.com/pin/create/button/?url=${url}&media=${image}&description=${title}`}
					target='_blank'
				><FaPinterest/></ShareButton>

				<ShareButton
					site='email'
					href={`mailto:?&body=Check%20this%20article%20out!%0A%0A${url}`}
				><FaEnvelope/></ShareButton>

			</ShareNav>
		</ShareBar>
	);
}

Share.propTypes = {
	url: PropTypes.string,
	title: PropTypes.string,
	image: PropTypes.string,
}
