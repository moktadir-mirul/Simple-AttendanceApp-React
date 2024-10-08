import { Link } from "react-router-dom";

export const Nav = () => {
    return (
		<header className="header">
			<div className="container">
				<nav className="header__navbar">
					<ul>
						<li>
							<Link to="/">Shop</Link>
						</li>
						<li>
							<Link to="/cart">Cart</Link>
						</li>
						<li>
							<Link to="/posts">Posts</Link>
						</li>
						<li>
							<Link to="/user">User</Link>
						</li>
						<li>
							<Link to="/counter">Counter</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
    )
}