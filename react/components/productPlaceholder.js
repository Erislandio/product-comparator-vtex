import React, { useContext } from 'react';
import { Input } from 'vtex.styleguide';
import styles from './styles.css';
import { ProductCompareContext } from './context';
import axios from 'axios';

export const ProductPlaceholder = ({ image, product, id, active }) => {
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
				id,
				value,
				active: true,
				products: value ? data : [],
				error: false,
				selected: null,
				loading: data.length === 0 ? true : false
			},
			...newArray
		]);
	};

	return (
		<div className={`${styles.productPlaceholder} ${active ? ' active ' : ' '}`}>
			<div className="product-placeholder">
				{image ? (
					<div dangerouslySetInnerHTML={{ __html: image }} />
				) : (
					<img src="https://samsungbr.vteximg.com.br/arquivos/phone-placeholder.png" />
				)}
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
