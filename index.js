var plantumlEncoder = require('plantuml-encoder');

var PUML_SERVER = process.env.PUML_SERVER || 'http://www.plantuml.com';

module.exports = {
  blocks: {
    plantuml: {
      process: function(block) {
        var defaultFormat = this.generator == 'ebook' ? 'png' : 'svg';
        var format = block.kwargs.format || defaultFormat;

        // Generate url
        var encoded = plantumlEncoder.encode(block.body);
        var href = PUML_SERVER + '/plantuml/' + format + '/' + encoded;

        return '<img src="' + href + '" />';
      }
    }
  }
};
