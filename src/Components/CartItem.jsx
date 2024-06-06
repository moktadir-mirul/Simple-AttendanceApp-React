import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";



export const CartItem = ({element}) => {
	console.log(element, 'CartItem');

	const [itemQuantity, setItemQuantity] = useState(item.quantity);

    const { dispatch } =useContext(CartContext);

	return (
		<tr>
			<td>
				<div className="product">
					<img
						src={item.image}
						className="product-img"
						alt={item.title}
					/>
				</div>
			</td>
			<td>
				<p>{item.title}</p>
			</td>
			<td>$ {item.price}</td>
			<td>
				<div className="qty_input">
					<button
						className="qty-count qty-count--minus"
						data-action="minus"
						type="button"
						onClick={()=> {if (itemQuantity > 1) {
                            dispatch({type: "MODIFY-QUANTITY", payload: {id:item.id, quantity: itemQuantity - 1}})
							setItemQuantity(itemQuantity-1)
                        } else {
                            alert('Quantity cannot be zero')
                        }
                    }}
					>
						<figure>
							-
						</figure>
					</button>
					<input
						className="product-qty"
						type="number"
						name="product-qty"
						value={itemQuantity}
						
						min="1"
                        onClick={(event)=> {dispatch({type: "MODIFY-QUANTITY", payload: {id:item.id, quantity: Number(event.target.value)}})
                        setItemQuantity(Number(event.target.value))}
                    }
					/>
					<button
						className="qty-count qty-count--add"
						data-action="add"
						type="button"
                        onClick={()=> {dispatch({type: "MODIFY-QUANTITY", payload: {id:item.id, quantity: itemQuantity + 1}});
                        setItemQuantity(itemQuantity+1); }
                        }>
						<figure>
							+
						</figure>
					</button>
				</div>
			</td>
			<td>$ {item.price * item.quantity}</td>
			<td>
                <button
                        onClick={() =>
                            dispatch({
                                type: "REMOVE-ITEM",
                                payload: item.id,
                            })
                        }
                        className="cross-icon"
                    >
                        x
                    </button>
			</td>
		</tr>
	);
}

