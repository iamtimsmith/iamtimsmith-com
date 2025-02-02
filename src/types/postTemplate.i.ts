import {IPost} from 'types';

export interface IPostTemplate {
	data: {
		post: IPost;
		recent: {
			nodes: IPost[];
		};
	}
}
