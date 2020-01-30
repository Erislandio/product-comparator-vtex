import React, { useContext } from 'react';
import styles from './styles';
import { parseImageTag } from './utils';
import { LoadingSamsung } from './utils/loading';
import { ProductCompareContext } from './context';

export const ProductList = ({ edit, item, products, loading, id }) => {
	const { setState, state } = useContext(ProductCompareContext);

	const onSelectProduct = (product) => {
		const nextArray = state.splice(id, 1);
		const setNextArray = nextArray.length
			? nextArray.map((value) => {
					return { ...value, active: true };
				})
			: [];

		const newState = [
			{
				...item,
				active: false,
				selected: product,
				image: parseImageTag(product.items[0].images[0].imageTag, true)
			},
			...setNextArray,
			...state.filter((item) => {
				return item.id !== id;
			})
		];

		if (edit) {
			const getNextArrayAvariable = nextArray.map((item) => {
				if (item.selected) {
					return { ...item };
				}

				return { ...item, active: true };
			});

			setState([
				{
					...item,
					active: false,
					selected: product,
					edit: false,
					image: parseImageTag(product.items[0].images[0].imageTag, true)
				},
				...getNextArrayAvariable,
				...state
					.filter((item) => {
						return item.id !== id;
					})
					.map((item) => {
						if (!item.selected) {
							return { ...item, active: true };
						}

						return { ...item };
					})
			]);
		} else {
			setState(newState);
		}
	};

	return (
		<div className={styles.productListWrapper}>
			{products.length && item.active ? (
				<ul className={styles.productList}>
					<h3>Produtos encontrados: </h3>
					{products.map((product) => {
						return (
							<li key={product.productName} onClick={() => onSelectProduct(product)}>
								<div className={styles.productItem}>
									<div
										dangerouslySetInnerHTML={{
											__html: parseImageTag(product.items[0].images[0].imageTag, false)
										}}
									/>
									<h3>{product.productName}</h3>
								</div>
							</li>
						);
					})}
				</ul>
			) : loading ? (
				<LoadingSamsung />
			) : null}
		</div>
	);
};
