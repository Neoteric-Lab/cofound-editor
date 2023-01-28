let count = 0;
let prefix: string;

const generateId = () => {
	count += 1;
	return `${prefix}-${count}`;
};

export const getId = (prefixParam = 'cofound') => {
	prefix = prefixParam.toLowerCase();
	return { generateId };
};
