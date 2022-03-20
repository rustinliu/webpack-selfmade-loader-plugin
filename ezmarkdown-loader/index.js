const { getOptions } = require('loader-utils');
const validateOptions = require('schema-utils');
const MarkdownIt = require('markdown-it');

const schema = {
    type: 'object',
    properties: {
        html: {
            type: 'boolean',
        },
        xhtmlOut: {
            type: 'boolean',
        },
        breaks: {
            type: 'boolean',
        },
        langPrefix: {
            type: 'string',
        },
        linkify: {
            type: 'boolean',
        },
        typographer: {
            type: 'boolean',
        },
    },
};

module.exports = function (source) {
    const options = getOptions(this);
    const md = MarkdownIt(options);

    validateOptions(schema, options);

    return md.render(source);
};
