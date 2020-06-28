import React ,{Component} from 'react';
import {connect} from 'react-redux';
import { addToCart } from '../actions/cartAction'
import '../CSS/Home.css';
class Home extends Component{

	constructor(){
		super();
		this.state = {
			added :false,
			key : 0
		}
	}
	handleClick = (id) =>{
		if(this.state.added && this.state.key==id)
			return;
		this.setState({
			added: true,
			key : id
		},
		function() {
        setTimeout(() => {
          this.setState({
            added: false,
            key:0
          });
        }, 2000);
      });

	this.props.addToCart(id); 
	}
	render() {
		let itemlist = this.props.items.map(item =>{
			return(
				<div className="box-wrapper" key={item.id}>
			  		<img src={item.img} alt={item.title} />
			  		<div className="box-content">
		    			<div className="buy" onClick={() => this.handleClick(item.id)}><span><i className={(this.state.added && this.state.key===item.id)?"fa fa-check":"fa fa-cart-plus"} ></i>
</span></div>
					    <div className="title">{item.title}</div>
					    <div className="desc">{item.desc}</div>
					    <span className="price">${item.price}</span>
					</div>
				</div>
			)
		})
		return(
			<div className="container">
			<h2 className="text-center"> Our Items </h2>
				{itemlist}
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return{
		items:state.items
	}
}

const mapDispatchToProps = (dispatch) =>{
	return{
		addToCart:(id)=>{dispatch(addToCart(id))}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)

