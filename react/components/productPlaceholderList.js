import React, { useContext } from 'react';
import styles from './styles.css';
import { ProductPlaceholder } from './productPlaceholder';
import { ProductCompareContext } from './context';
import { ProductList } from './productList';
import { parseImageTag } from './utils';

export const ProductListPlaceholder = () => {
	const { state } = useContext(ProductCompareContext);

	return (
		<div className={styles.productListPlaceholder}>
			{state &&
				state.map((item) => {
					return (
						<div className="relative">
							<ProductPlaceholder active={item.active} value={item.value} id={item.id} />
							<ProductList products={item.products} loading={item.loading} />
						</div>
					);
				})}
		</div>
	);
};
