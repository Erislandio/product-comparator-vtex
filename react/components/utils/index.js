const parseImageTag = (imageTag, productImage) => {
	if (productImage) {
		return imageTag
			.split(/"(.*?)"/gi)[1]
			.replace('~/', '/')
			.replace(/#width#/gi, '600')
			.replace(/#height#/gi, '600');
	}

	const width = '70';
	const height = '80';

	const image = imageTag.replace(/#width#/gi, width).replace(/#height#/gi, height).replace('~/arquivos', '/arquivos');
	return image;
};

export { parseImageTag };
