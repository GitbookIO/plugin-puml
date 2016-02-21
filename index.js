var plantumlEncoder = require('plantuml-encoder');

module.exports = {
    blocks: {
        plantuml: {
            process: function(block) {
                var format = block.kwargs.format || 'png';
                var encoded = plantumlEncoder.encode(block.body);
                var href = 'http://www.plantuml.com/plantuml/' + format + '/' + encoded;

                return '<img src="' + href + '" />';
            }
        }
    }
};
