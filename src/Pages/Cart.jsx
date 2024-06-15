import { useSelector, useDispatch } from "react-redux";
import { CartItem } from "../Components/CartItem";
import { clearCart } from "../ActionCreator/cartAction";

export const Cart = () => {

	const cart = useSelector((storeState) => storeState.cart);

	const dispatch = useDispatch();
    
    let totalPrice = 0;
    cart.forEach((item) => {
        totalPrice += item.quantity*item.price
    });
    return (
		<>
			<div className="account-setting__content">
				<div className="account-setting__content__title">
					<h4>Product list in your cart</h4>
				</div>
				<div className="product-table-container">
					<table>
						<thead>
							<tr>
								<th>Image</th>
								<th>PRODUCT Title</th>
								<th>Price</th>
								<th>Quantity</th>
								<th>Subtotal</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{cart.map((item) => (
                                <CartItem key={item.id} item={item} />
                            ))}
						</tbody>
					</table>
				</div>
				<h2 className="total-price">
					Your Total Price Will be ${totalPrice} 
				</h2>
				<div className="mt-50">
					<button
						type="button"
						className="btn-big"
                        onClick={() => dispatch(clearCart())}
					>
						Clear Cart
					</button>
				</div>
			</div>
		</>
	);
}