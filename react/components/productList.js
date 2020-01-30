import React from 'react';
import styles from './styles';
import { parseImageTag } from './utils';

export const ProductList = ({ products, loading }) => {
	return (
		<div className={styles.productListWrapper}>
			{products.length ? (
				<ul className={styles.productList}>
					<h3>Produtos encontrados: </h3>
					{products.map((product) => {
						return (
							<li key={product.productName}>
								<div className={styles.productItem}>
									<div
										dangerouslySetInnerHTML={{
											__html: parseImageTag(product.items[0].images[0].imageTag)
										}}
									/>
									<h3>{product.productName}</h3>
								</div>
							</li>
						);
					})}
				</ul>
			) : loading ? (
				'carregando'
			) : null}
		</div>
	);
};
