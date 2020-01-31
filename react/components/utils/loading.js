import React from 'react';
import styles from './utils.css';

const LoadingSamsung = () => {
	return (
		<div className={`${styles.spinner} flex w-100 justify-center  items-center `}>
			<div className={`${styles.bounce1} bg-blue`} />
			<div className={`${styles.bounce2} bg-blue`} />
			<div className={`${styles.bounce3} bg-blue`} />
		</div>
	);
};

export { LoadingSamsung };
