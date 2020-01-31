import React, { useState, useEffect } from 'react';
import { Wrapper } from './Wrapper';
import { HeaderPage } from './headerPage';
import { ProductCompareContext } from './context';
import { ProductListPlaceholder } from './productPlaceholderList';
import { ButtonWrapper } from './button';
import { ToastProvider, withToast } from 'vtex.styleguide';

const ProductComparator = ({ showToast }) => {
	const [ state, setState ] = useState([
		{
			id: 1,
			value: '',
			active: true,
			products: [],
			selected: null,
			loading: false,
			image: null,
			edit: false
		},
		{
			id: 2,
			value: '',
			active: false,
			products: [],
			selected: null,
			loading: false,
			image: null,
			edit: false
		},
		{
			id: 3,
			value: '',
			active: false,
			products: [],
			selected: null,
			loading: false,
			image: null,
			edit: false
		}
	]);

	useEffect(
		() => {
			console.log(state);
		},
		[ state ]
	);

	return (
		<ProductCompareContext.Provider
			value={{
				state,
				setState,
				showToast
			}}
		>
			<ToastProvider positioning="window">
				<Wrapper>
					<HeaderPage />
					<ProductListPlaceholder />
					<ButtonWrapper />
				</Wrapper>
			</ToastProvider>
		</ProductCompareContext.Provider>
	);
};

export default withToast(ProductComparator);
