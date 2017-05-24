import React ,{Component} from 'react';
import {FormGroup,FormControl,InputGroup,Glyphicon,Button} from 'react-bootstrap';
import Gallery from './Gallery.js'

class Global extends Component {
		
		constructor(props){
			super(props);
			this.state={
				query:'',
				items:[]

			}

		}	
	search(){
		const BaseUrl='https://www.googleapis.com/books/v1/volumes?q=';
		fetch(`${BaseUrl}${this.state.query}`,{method:'GET'})
		.then(response => response.json())
		.then(json => {

			let {items} =json;
			this.setState({items})
		});


		console.log("search",this.state.query);

	}		

	render(){

		return (
			<div className="Global" >  
			<h2>Book Explorer!</h2>

			<FormGroup>
				<InputGroup>
					<FormControl type="text" placeholder="Search for a Book" onChange={event => this.setState({query:event.target.value})}
						onKeyPress={event => {

							if (event.key==='Enter')
							{
								this.search();

							}
						}}	 />
				<InputGroup.Addon  onClick={() => this.search()} >

        <a href=""><Glyphicon glyph="search" /></a>


					</InputGroup.Addon>
				</InputGroup>

			</FormGroup>	

			<Gallery items={this.state.items} />	
					

			</div>
			);
	}

}


export default Global;