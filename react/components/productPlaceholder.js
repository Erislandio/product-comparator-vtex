import React, { useContext } from 'react';
import { Input } from 'vtex.styleguide';
import styles from './styles.css';
import { ProductCompareContext } from './context';
import axios from 'axios';
import { ProductCard } from './productCard';

export const ProductPlaceholder = ({ item, image, selected, id, active }) => {
	const { state, setState } = useContext(ProductCompareContext);

	const searchProduct = async (value) => {
		return await axios.get(`/api/catalog_system/pub/products/search/${value}`);
	};

	const handleChange = async (e) => {
		const newArray = state.filter((item) => item.id !== id);
		const value = e.target.value;

		const { data } = await searchProduct(e.target.value);

		const filterId = state
			.filter((item) => item.selected)
			.reduce((accumulator, currentValue) => accumulator.concat(currentValue.selected.productId), []);

		const productsFilter = data.filter((el) => {
			return filterId.every((f) => {
				return f !== el.productId;
			});
		});

		setState([
			{
				...item,
				id,
				value,
				active: true,
				products: value ? productsFilter : [],
				selected: null,
				loading: productsFilter.length === 0 ? true : false
			},
			...newArray
		]);
	};

	const handleRemove = () => {
		setState([
			{
				id,
				value: '',
				products: [],
				selected: '',
				active: true,
				loading: false,
				edit: true
			},
			...state.filter((value) => value.id !== id).map((item) => {
				return { ...item, active: false, products: [] };
			})
		]);
	};

	return (
		<div className={`${styles.productPlaceholder} ${active ? ' active ' : ' '}`}>
			{image ? (
				<ProductCard selected={selected} image={image} handleRemove={handleRemove} />
			) : (
				<img src="https://samsungbr.vteximg.com.br/arquivos/phone-placeholder.png" />
			)}
			<div className="product-placeholder">
				{active ? (
					<div className="ph2 flex items-center space-between">
						<Input
							autoFocus
							name="search"
							placeholder="Pesquise pelo aparelho"
							onChange={(e) => handleChange(e)}
						/>
					</div>
				) : null}
			</div>
		</div>
	);
};
