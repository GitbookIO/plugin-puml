var path = require('path');
var tester = require('gitbook-tester');
var assert = require('assert');

describe('PlantUML', function() {
  it('should correctly replace by img html tag', function() {
    return tester
      .builder()
      .withContent(
        'This is a diagram:\n\n{% plantuml %}\nBob->Alice : hello\n{% endplantuml %}'
      )
      .withBookJson({
        plugins: ['puml']
      })
      .withLocalPlugin(path.join(__dirname, '..'))
      .create()
      .then(function(result) {
        assert.equal(
          result[0].content,
          '<p>This is a diagram:</p>\n<p><img src="http://www.plantuml.com/plantuml/svg/UDhZSifFqhLppCbCJbMmKiX8pSd9vm80FC85_m00"></p>'
        );
      });
  });

  it('should use the PUML_SERVER server environment variable', function() {
    process.env.PUML_SERVER = 'MY_PUML_SERVER_URL';
    return tester
      .builder()
      .withContent(
        'This is a diagram:\n\n{% plantuml %}\nBob->Alice : hello\n{% endplantuml %}'
      )
      .withBookJson({
        plugins: ['puml']
      })
      .withLocalPlugin(path.join(__dirname, '..'))
      .create()
      .then(function(result) {
        assert.equal(
          result[0].content,
          '<p>This is a diagram:</p>\n<p><img src="MY_PUML_SERVER_URL/plantuml/svg/UDhZSifFqhLppCbCJbMmKiX8pSd9vm80FC85_m00"></p>'
        );
      });
  });
});
