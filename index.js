var plantumlEncoder = require('plantuml-encoder');
var fs = require('fs');

module.exports = {
    blocks: {
        plantuml: {
            process: function(block) {
                var source;
                if (!!block.kwargs.src) {
                    source = fs.readFileSync(block.kwargs.src);
                } else {
                    source = block.body;
                }

                var defaultFormat = this.output.name == 'ebook' ? 'png' : 'svg';
                var format = block.kwargs.format || defaultFormat;

                // Generate url
                var encoded = plantumlEncoder.encode(source);
                var href = 'http://www.plantuml.com/plantuml/' + format + '/' + encoded;

                return '<img src="' + href + '" />';
            }
        }
    }
};
