# PlantUML in GitBook

UML Diagrams rendering using PlantUML.

[![Build Status](https://travis-ci.org/GitbookIO/plugin-puml.png?branch=master)](https://travis-ci.org/GitbookIO/plugin-puml)
[![NPM version](https://badge.fury.io/js/gitbook-plugin-puml.svg)](http://badge.fury.io/js/gitbook-plugin-puml)

Configure the plugin in your `book.json`:

```js
{
    "plugins": ["puml"]
}
```

Then in your content:

```md
This is a diagram:

{% plantuml %}
Bob->Alice : hello
{% endplantuml %}
```

The plugin will replace the `{% plantuml %}` by SVG images (and PNG images for ebook output).

# PUML Server

To rendert UML diagrams the public PlantUML server http://www.plantuml.com is used.

However, if you wish to run your own server - for example in a corporated environment settings - you may wish to run your own PlantUML server.
To point the plugin to your server set the environment variable `PUML_SERVER`, e.g:

```bash
docker run -d -p 8080:8080 plantuml/plantuml-server:jetty
export PUML_SERVER=http://localhost:8080
gitbook serve
```
