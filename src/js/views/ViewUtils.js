import templates from '../templates.js';

const ViewUtils = () => {
	const me = {};

	me.templates = templates.call(me, Handlebars);

	me.getTemplate = templateName => me.templates[templateName];

	me.render = (template, targetSelector, data) => {
		document.querySelector(targetSelector).innerHTML = template(data);
		return me;
	};

	return me;
};

module.exports = ViewUtils;