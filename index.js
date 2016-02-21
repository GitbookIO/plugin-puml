var plantumlEncoder = require('plantuml-encoder');

module.exports = {
    blocks: {
        plantuml: {
            process: function(block) {
                var encoded = plantumlEncoder.encode(block.body);
                var href = 'http://www.plantuml.com/plantuml/img/' + encoded;

                return '<img src="' + href + '" />';
            }
        }
    }
};
