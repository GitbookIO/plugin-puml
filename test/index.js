var path = require('path');
var tester = require('gitbook-tester');
var assert = require('assert');

describe('PlantUML', function() {
    it('should correctly replace by img html tag', function() {
        return tester.builder()
            .withContent('This is a diagram:\n\n{% plantuml %}\nBob->Alice : hello\n{% endplantuml %}')
            .withBookJson({
                plugins: ['puml']
            })
            .withLocalPlugin(path.join(__dirname, '..'))
            .create()
            .then(function(result) {
                console.log(result[0]);
                assert.equal(result[0].content, '<h1 id="test-me">test me</h1>\n<p>Hello world. <sup>superscript text!</sup></p>')
            });
    });
});