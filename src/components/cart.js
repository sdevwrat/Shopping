import React, {Component} from 'react';
import {connect} from 'react-redux';
import{RemoveItem, AddQty, SubQty} from '../actions/cartAction';
import { Link } from 'react-router-dom';
import '../CSS/cart.css';

class Cart extends Component{

	handleRemove= (id) =>{
	this.props.RemoveItem(id);
	}

	handleAddQty = (id) =>{
		this.props.AddQty(id);
	}

	handleSubQty = (id) =>{
		this.props.SubQty(id);
	}

	render(){
		let addeditems = this.props.items.length ?
		(
			this.props.items.map(item=>{
				let itemPrice = item.price * item.quantity;
				return(
						<li className="items">
					    <div className="infoWrap"> 
					        <div className="cartSection">
					        <img src={item.img} alt="" className="itemImg" />
					          <h3>{item.title}</h3>
					        
					           <p> <input type="text" value={item.quantity} className="qty" disabled/> x ${item.price}</p>
					           <br />
					           <p className="add-qty"> 
					           	<i className="glyphicon glyphicon-minus" aria-hidden="true" onClick={() => this.handleSubQty(item.id)}></i>
					           	Quantity
					           	<i className="glyphicon glyphicon-plus" aria-hidden="true" onClick={() => this.handleAddQty(item.id)}></i>
					           	</p>
					        </div>  
					    
					        <div className="prodTotal cartSection">
					          <p>${itemPrice}</p>
					        </div>
					        <div className="cartSection removeWrap">
					           <i className="glyphicon glyphicon-trash" onClick={() => this.handleRemove(item.id)}></i>
					        </div>
					      </div>
      				</li>
				)
			})
		):
		(
			<p className="Empty"> Your cart is Empty.</p>
		)
		let Shipping = (this.props.total)?5:0;
		let total = this.props.total+Shipping;
		return(
			<div className="wrap cf">
			  <div className="heading cf">
			    <h1>My Cart</h1>
			    <Link to="/" className="continue">Continue Shopping</Link>
			  </div>
			  <div className="cart">
			    <ul className="cartWrap">
			 		{addeditems}
			    </ul>
			  </div>
			  
			  <div className="promoCode"><label for="promo">Have A Promo Code?</label><input type="text" name="promo" placholder="Enter Code" />
			  <a href="#0" className="btn"></a></div>
			  
			  <div className="subtotal cf">
			    <ul >
			      <li className="totalRow"><span className="label">Subtotal</span><span className="value">${this.props.total}.00</span></li>
			      
			      <li className="totalRow"><span className="label">Shipping</span><span className="value">${Shipping}.00</span></li>

			      <li class="totalRow final"><span class="label">Total</span><span class="value">${total}.00</span></li>

			      <li className="totalRow"><a href="#0" className="btn continue">Checkout</a></li>
			    </ul>
			  </div>
			</div>

		)
	}
}

const mapStateToProps = (state) =>{
	return{
		items:state.addedItems,
		total:state.total
	}
}
const mapDispatchToProps = (dispatch) => {
	return{
		RemoveItem: (id)=>{dispatch(RemoveItem(id))},
		AddQty: (id)=>{dispatch(AddQty(id))},
		SubQty: (id)=>{dispatch(SubQty(id))}
	}
}

export default connect(mapStateToProps,mapDispatchToProps) (Cart)