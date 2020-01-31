import React, { useContext } from 'react';
import { Button } from 'vtex.styleguide';
import styles from './styles.css';
import { ProductCompareContext } from './context';

export const ButtonWrapper = () => {
	const { state, setState } = useContext(ProductCompareContext);

	const handleClick = () => {
		return setState(
			state.map((item) => {
				return { ...item, show: true };
			})
		);
	};

	return (
		<div className={styles.button}>
			<Button onClick={handleClick}>Comparar</Button>
		</div>
	);
};
