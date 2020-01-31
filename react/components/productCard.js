import React from 'react';
import { Link } from 'vtex.render-runtime';
import { path } from 'ramda';

export const ProductCard = ({ selected, image, handleRemove }) => {
	console.log(selected);
	console.log(path([ 'linkText' ], selected));

	const params = {
		slug: path([ 'linkText' ], selected)
	};

	return (
		<React.Fragment>
			<Link page="store.product" params={params} className="link">
				<div className="product relative w-100 h-100" style={{ background: `url(${image})` }}>
					<h3>{selected.productName}</h3>
					<span className="remove-item">
						<button onClick={handleRemove}>X</button>
					</span>
				</div>
			</Link>
			<div>Price</div>
		</React.Fragment>
	);
};
