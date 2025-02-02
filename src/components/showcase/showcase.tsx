import React, {useRef, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import dayjs from 'dayjs';
import {Link} from 'components';
import {Section, Image, Content, Markdown, Button, Tags, Tag} from './showcase.style';
import {IProps} from './showcase.i';

export const Showcase = ({image, title, content, link, align='right', date, tags, button=false, mobile=false}: IProps) => {
	const section = useRef<HTMLElement>(null);
	const [show, setShow] = useState(false);

	const handleAnimate = () => {
		const scroll = window.scrollY + window.innerHeight;
		const element = section.current ? section.current.offsetTop + 200 : 0;
		if (scroll > element) setShow(true);
	}

	useEffect(() => {
		handleAnimate();
		addEventListener(`scroll`, handleAnimate);
		return () => removeEventListener(`scroll`, handleAnimate);
	}, [])

	return (
		<Section ref={section} data-testid='showcase'>
			<Image align={align} mobile={mobile} link={link ? link.image : false}>
				{link && link.image &&
					<Link to={link.to}>
						<Img fluid={image} alt={title.text} />
					</Link>
				}
				{(!link || !link.image) && <Img fluid={image} alt={title.text} />}
			</Image>
			<Content align={align} mobile={mobile} show={show}>
				{date && <small data-testid='date'>{dayjs(date.date).format(date.year ? `YYYY` : `MM-DD-YYYY`)}</small>}
				{(link && link.title) && title.type === `h2` &&
					<h2>
						<Link to={link.to}>{title.text}</Link>
					</h2>
				}
				{(link && link.title && title.type === `h3`) &&
					<h3>
						<Link to={link.to}>{title.text}</Link>
					</h3>
				}
				{(!link || !link.title && title.type === `h2`) &&
					<h2>{title.text}</h2>
				}
				{(!link || !link.title && title.type === `h3`) &&
					<h3>{title.text}</h3>
				}
				<Tags align={align}>
					{tags.split(/\,? /ig).map((tag, i) => <Tag key={i}>{tag}</Tag>)}
				</Tags>
				{content &&
					<Markdown dangerouslySetInnerHTML={{__html: content}} />
				}
				{!link || !link.title && button &&
					<Link to={link.to}>
						<Button>{link.text}</Button>
					</Link>
				}
				{!link || !link.title && !button &&
					<Link to={link.to}>{link.text}</Link>
				}
			</Content>
		</Section>
	);
};

Showcase.propTypes = {
	image: PropTypes.object,
	title: PropTypes.object,
	content: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.string,
	]),
	link: PropTypes.object,
	align: PropTypes.string,
	mobile: PropTypes.bool,
	date: PropTypes.object,
	tags: PropTypes.string,
	type: PropTypes.string,
	button: PropTypes.bool,
}
