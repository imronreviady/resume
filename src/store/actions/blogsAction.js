import { GET_BLOGS, GET_BLOGS_LOADING, GET_BLOGS_LOADED, GET_BLOG, GET_BLOG_LOADING, GET_BLOG_LOADED, SAVE_BLOG } from '../actionTypes';
import { blogsDb } from '../../firebase';

export function getBlogs() {
	return dispatch => {
		dispatch({
			type: GET_BLOGS_LOADING
		});
		blogsDb.on('value', snapshot => {
			dispatch({
				type: GET_BLOGS,
				payload: snapshot.val()
			});
			dispatch({
				type: GET_BLOGS_LOADED
			});
		});
	}
}

export function saveBlog(blog) {
	return dispatch => {
		dispatch({
			type: SAVE_BLOG
		});
		blogsDb.push(blog);
	};
}