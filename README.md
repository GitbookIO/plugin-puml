# PlantUML in GitBook

UML Diagrams rendering using PlantUML

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

The plugin will replace the `{% plantuml %}` by PNG images.
