const parseImageTag = (imageTag, productImage) => {
	const width = productImage ? '176' : '70';
	const height = productImage ? '329' : '80';

	const image = imageTag.replace('#width#', width).replace('#height#', height).replace('~/arquivos', '/arquivos');
	return image;
};

export { parseImageTag };
