# How a Browser Works

# CSS

## Specificity

## Selectors

- Selectors are patterns used to select the elements to style

## Functions

- CSS functions are used as a value for various CSS properties

- attr()
- calc()
- cubic-bezier()
- hsl()
- hsla()
- linear-gradient()
- radial-gradient()
- repeating-linear-gradient()
- repeating-radial-gradient()
- rbg()
- rgba()
- var()

## CSS Custom Properties (Cascading variables)

- Reusable variables that can be used throughout a document
- Denoted by `--` in front of the declaration

```css
:root {
  --main-bg-color: brown;
}

.one {
  background-color: var(--main-bg-color);
}
```

- Can be set through style tags, or updated with javascript

```html
<section class="one" style="--main-bg-color: 'blue';">
</section>
```

- Can be inherited or scoped to any element or class name