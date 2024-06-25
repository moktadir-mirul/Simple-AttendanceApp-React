import { useDispatch } from "react-redux";
import { addToCart } from "../ActionCreator/cartAction";

const ProductList = ({ product }) => {
    const dispatch = useDispatch();
    const AddItemHandler = () => {
            dispatch(addToCart(product))
            // alert(`${product.title} added to cart successfully.`)
    }
	return (
		<div className="ingredient">
			<div className="ingredient__image">
				<figure>
					<img src={product.image} alt={product.title} />
				</figure>
			</div>
			<div className="ingredient__title">
				<h3>{product.title}</h3>
			</div>
			<div className="ingredient__content">
				<p className="price">
					<span>${product.price}</span>
				</p>
			</div>
			<div className="ingredient__btn">
				<button
					className="btn-white"
                    onClick={AddItemHandler}>
					ADD TO CART
				</button>
			</div>
		</div>
	);
};

export default ProductList;