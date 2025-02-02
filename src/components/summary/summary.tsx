import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import {Link} from 'components';
import {Article, Content, SummaryDate, Tags} from './summary.style';
import {IProps} from './summary.i';

export const Summary = ({title, content, date, tags, image, link, as=`h2`}: IProps) => {
	return (
		<Article>
			<Link to={link.href}>
				<Img fluid={image} alt={title} />
			</Link>
			{date && <SummaryDate>{date}</SummaryDate>}
			{as === `h2` &&
				<h2>
					<Link to={link.href}>{link.text}</Link>
				</h2>
			}
			{as === `h3` &&
				<h2>
					<Link to={link.href}>{link.text}</Link>
				</h2>
			}
			<Content>{content}</Content>
			<Tags>
				{tags.map(tag => <span key={tag}>{tag}</span>)}
			</Tags>
		</Article>
	);
};

Summary.propTypes = {
	title: PropTypes.string,
	content: PropTypes.string,
	date: PropTypes.string,
	image: PropTypes.object,
	link: PropTypes.object,
	tags: PropTypes.array,
	as: PropTypes.string,
}

export {Row} from './summary.style';
