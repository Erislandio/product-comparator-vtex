const parseImageTag = (imageTag) => {
	const image = imageTag.replace('#width#', '70').replace('#height#', '80px').replace('~/arquivos', '/arquivos');
	return image;
};

export { parseImageTag };
