import React from 'react';
import 	PostListItem from '../post-list-item/post-list-item';
import './post-list.css';

const PostList = (props) => {
	const {posts, onDelete, onToggleImportant, onToggleLiked} = props;
	const elements = posts.map((item) =>  {
		const {id, ...itemProps} = item;
		if(typeof(item) === 'object'){
			return (
				<li key={id} className="list-group-item">
					<PostListItem
					{...itemProps}
					 onDelete = {() => onDelete(id)}
					 onToggleImportant = {() => onToggleImportant(id)}
					 onToggleLiked = {() => onToggleLiked(id)}
					 />
				</li>
			)
		}
		return null;
	})
	return  (
		<ul className="app-list list-group">
			{elements}
		</ul>
	)
}
export default  PostList;

