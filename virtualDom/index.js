const createElement = (node) => {
	if (typeof node === 'string') {
		return document.createTextNode(node);
	}
	const element = document.createElement(node.type);

	const propsKeys = Object.keys(node.props);
	for (let i = 0; i < propsKeys.length; i++) {
		const propValue = node.props[propsKeys[i]];
		element.setAttribute(propsKeys[i], propValue);
	}
	node.children
		.forEach(item => element.appendChild(createElement(item)));
	return element;
};

const updateElement = (parent, newNode) => {
	parent.appendChild(createElement(newNode));
};

const composeNode = (type, props, children) => {
	return { type, props, children };
};

const initialData = composeNode('ul', {}, []);

const root = document.getElementById('root');
const reloadBtn = document.getElementById('reloadBtn');

reloadBtn.addEventListener('click', () => {
	updateElement(root, initialData);
});
