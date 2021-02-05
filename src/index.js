import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
ReactDOM.render(<App/>, document.getElementById('root'));
// class WhoAmI extends Component {
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			years: props.age
// 		}
// 		// this.nextYear = this.nextYear.bind(this)
// 		this.nextYear = ( ) => {
// 			this.setState(state =>({
// 						years: ++state.years
// 					}))
// 		}
// 		this.prevYear = () => {
// 			this.setState(state => ({
// 				years: --state.years
// 			}))
// 		}
// 		this.reset = () => {
// 			this.setState(state => ({
// 				years: props.age
// 			}))
// 		}
// 	}
// 	// nextYear(){
// 	// 	this.setState(state =>({
// 	// 		years: ++state.years
// 	// 	}))
// 	// }
// 	render(){
// 		const {name, surname, link} = this.props,
// 				{years} = this.state;
// 		return (
// 			<div>
// 				<button onClick= {this.nextYear}>++</button>
// 				<button onClick= {this.prevYear}>--</button>
// 				<button onClick= {this.reset}>Reset</button>
// 				<h1>My name is {name}, surname -{surname}, years-{years} </h1>
// 				<a href={link}>My profile</a>
// 			</div>
				
// 		)
// 	}
// }



// const All = () => {
// 	return (
// 		<>
// 			<WhoAmI name="Mykhailo" surname="Bobrykov" link="facebook.com" age="21"/>
// 			<WhoAmI name="SomeName" surname="SomeSurname" link="facebook.com" age="25"/>
// 			<WhoAmI name="dfgsdfgsdfg" surname="sdfgsdfgsfdg" link="facebook.com" age="19"/>
// 		</>
// 	)
// }
// ReactDOM.render(<All/>, document.getElementById('root'));