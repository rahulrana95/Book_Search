import React, {Component } from 'react';

class Gallery extends Component {

	render(){


			return (
				<div>{

					this.props.items.map((items,index) => {

						let {title,imageLinks,infoLink,pageCount,categories,retailPrice,pdf} =items.volumeInfo;
								
								return (
							<a href={infoLink} target="_blank">
							<div key={index} className="book">
							<img src={imageLinks != undefined ? imageLinks.thumbnail:''} alt="book img" className="book-img"/>

							<div className="book-text">{title}</div> 

							

							</div>

							</a>
							)	

					})
				}</div>

				)
	}

}


export default Gallery;