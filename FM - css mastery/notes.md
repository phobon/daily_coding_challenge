# CSS Introduction

- Use external stylesheets to cache styles where possible
  - Allows reusability
  - Eases maintainability
  - Changes are sitewide
  - Changes are instantaneous
  - Interchangable presentation layer
- Use embedded styles `<style>...</style>` to improve performance with critical CSS
- Avoid inline styles

# Selectors

- Always use the lowest specificity as possible
- ID, class, element selectors (#, ., etc.)
- A space `ul li` is considered a combinator

## Specificity

- 0-0-0 weights
- Whichever has the highest number left-to-right has the highest specificity
  - 1-0-0 `ID #`
  - 0-1-0 `class . attribute [] & pseudoclass ::`
  - 0-0-1 `element div`
- Items with equal specificity are ordered by the cascade (ie: later on in the document)