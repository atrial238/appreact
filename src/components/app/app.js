import React, {Component} from  'react';
import nextId from "react-id-generator";
import AppHeader from '../app-header/'
import SearchPanel from '../search-panel/'
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form'

import './app.css';

export default class App extends Component {

	constructor(){
		super();
		
		this.state = {
			data:  [
				{label: "Going to learn React", important: true,  like: false, id: nextId()},
				{label: "That is so good", important: false, like: false, id: nextId()},
				{label: "I realy need a break...", important: false,  like: false,id: nextId()}
			],
			term: '',
			filter: 'all'
		};
		this.deleteItem = this.deleteItem.bind(this);
		this.addItem = this.addItem.bind(this);
		this.onToggleImportant = this.onToggleImportant.bind(this);
		this.onToggleLiked = this.onToggleLiked.bind(this);
		this.onUpdateSearch = this.onUpdateSearch.bind(this);
		this.onFilterSelect = this.onFilterSelect.bind(this);
	}
	 
	addItem(body){
		const newItem = {
			label: body,
			important: false,
			like: false,
			id: nextId()
		}
		this.setState(({data}) => {
			const newArr = [...data, newItem];
			return {
				data: newArr
			}
		})

	}
	deleteItem(id){
		this.setState(({data}) => {
			const index = data.findIndex(elem => elem.id === id);
			const before = data.slice(0, index);
			const after = data.slice(index + 1);
			const newArr = [...before, ...after];
			return {
				data: newArr
			}
		})
	}
	onToggleLikeAndImportant(id, toggleElement){
		this.setState(({data})=> {
			const index = data.findIndex(elem => elem.id === id);
			const old  = data[index];
			const newItem = {...old, [toggleElement]: !old[toggleElement]};
			const before = data.slice(0, index);
			const after = data.slice(index + 1);
			const newArr = [...before, newItem, ...after];
			return {
				data: newArr
			}
		})
	}
	onToggleImportant(id){
		this.onToggleLikeAndImportant(id, 'important');
		
	}
	onToggleLiked(id){
		this.onToggleLikeAndImportant(id, 'like');
	}
	searchPost(items, term){
		if(term.length === 0){
			return items
		}

		return items.filter((item) =>  {
					return item.label.indexOf(term) > -1
				})
	}
	onUpdateSearch(term){
		this.setState({term});
	}
	filterPost(items, filter){
		if( filter === 'like'){
			return items.filter(item => item.like)
		}else {
			return items;
		}
	}
	onFilterSelect(filter){
		this.setState({filter});
	}
	render(){
		const {data, term, filter} = this.state;
		const liked = data.filter(item => item.like).length;
		const allPosts = data.length;
		const visiblePosts = this.filterPost(this.searchPost(data, term), filter);
		return (
			<div className="app">
				<AppHeader
					liked = {liked}
					allPosts = {allPosts}
				/>
					<div className="search-panel d-flex">
					<SearchPanel
						onUpdateSearch={this.onUpdateSearch}
					/>
					<PostStatusFilter
						filter={filter}
						onFilterSelect = {this.onFilterSelect}
					/>
					</div>
				<PostList 
					posts = {visiblePosts} 
					onDelete = {this.deleteItem}
					onToggleImportant = {this.onToggleImportant}
					onToggleLiked = {this.onToggleLiked}
					/> 
				<PostAddForm onAdd = {this.addItem}/>
			</div>
		)
	}
}

