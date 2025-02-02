import React, {useState, useEffect} from 'react';
import {FiArrowUp} from 'react-icons/fi';
import {BackToTopStyle} from './backToTop.style';

export const BackToTop = () => {
	const [show, setShow] = useState(false);

	const handleShow = () => setShow(window.scrollY > 1000);
	const handleClick = () => {
		window[`scrollTo`]({ top: 0, behavior: `smooth` })
}

	useEffect(() => {
		document.addEventListener(`scroll`, handleShow);
		return () => document.removeEventListener(`scroll`, handleShow);
	}, [])

	return (
		<BackToTopStyle
			show={show}
			onClick={handleClick}
			aria-label='Back to Top'
		>
			<FiArrowUp />
		</BackToTopStyle>
	);
}
