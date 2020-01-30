import React, { useContext } from 'react';
import { Input } from 'vtex.styleguide';
import styles from './styles.css';
import { ProductCompareContext } from './context';
import axios from 'axios';

export const ProductPlaceholder = ({ item, image, selected, id, active }) => {
	const { state, setState } = useContext(ProductCompareContext);

	const searchProduct = async (value) => {
		return await axios.get(`/api/catalog_system/pub/products/search/${value}`);
	};

	const handleChange = async (e) => {
		const newArray = state.filter((item) => item.id !== id);
		const value = e.target.value;

		const { data } = await searchProduct(e.target.value);

		setState([
			{
				...item,
				id,
				value,
				active: true,
				products: value ? data : [],
				selected: null,
				loading: data.length === 0 ? true : false
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
			...state
				.filter((value) => {
					return value.id !== id;
				})
				.map((item) => {
					return { ...item, active: false };
				})
		]);
	};

	return (
		<div className={`${styles.productPlaceholder} ${active ? ' active ' : ' '}`}>
			{image ? (
				<div className="product relative w-100 h-100" style={{ background: `url(${image})` }}>
					<h3>{selected.productName}</h3>
					<span className="remove-item">
						<button onClick={handleRemove}>X</button>
					</span>
				</div>
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
