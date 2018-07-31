## IE Design System

This project is a design system starter kit, it is not a framework like Bootstrap. It has no opinions on how your site looks (apart from including [normalize.css](https://necolas.github.io/normalize.css/), which can be exluded)

It is a collection of mixins and tokens to help you develop lightweight and consistent components using a system, rather than writing bespoke CSS per component.

### Getting started

To build the stylesheet and the SASS Documentation, simply run:

```bash
npm run build
```

The documentation will then be available in a folder called `./sassdoc`.

When working on the design system, run the following command to update the stylesheet. This will also watch for any changes to the SASS files.

```bash
npm run dev
```

## Features

The below is just a brief overview of what's included, to get more extensive documentation, generate the Sassdoc documentation.

##### Accessibility
- `visually-hidden` mixin to hide elements but still make them available to screenreaders, useful for skip links, transcripts, etc.
- `focus` and `focus-inline` mixins to add a focus border around elements.

###### Tokens
- `$focus-offset-default` length
- `$focus-radius` length

##### Animation
- `transition` mixin to add a basic transition to any property
- `transition-opacity` a shortcut mixin to transition the opacity of an element only
- `transition-transform` a shortcut mixin to transition the transform of an element only, useful for scaling/sliding elements.

###### Tokens
- `$animation-duration` map
- `$animation-easing-base` string
- `$animation-easing` map

##### Borders
- `border` mixin to add a simple border
- `border-outside` mixin to add a border that won't break the grid
- `border-radius` mixin to add a border radius
- `border-triangle` mixin to add a triangle to any element, useful for tooltips/speech bubbles.

###### Tokens
- `$border-radius`
- `$border-radius--small`

##### Breakpoints
- `media-breakpoint-up` mixin to target a particular media breakpoint and up
- `media-breakpoint-down` mixin to target a particular media breakpoint and lower
- `media-breakpoint-only` mixin to target a particular media breakpoint only
- `media-breakpoint-between` mixin to target between two breakpoints
- `media-pixelratio-up` mixin to target devices with different pixel ratios (e.g. high-res devices vs standard)

###### Tokens
- `$pixelratios` map
- `$breakpoints` map

##### Colours
- `colour` function that looks up a colour value by name and variation e.g. `background: colour('blue', 'lighter')`
-
###### Tokens
- `$colours` map


##### Spacing
- `spacing` function that returns a length by variant e.g. `padding: spacing(xxl)`
- `fibonacci` function that returns the fibonacci value for a given number e.g. `fibonacci(7)` will return `13`.

###### Tokens
- `$spacing-base-unit` length
- `$spacing-base-factor` length
- `$spacing-map` string
- `$spacing-linear` map
- `$spacing-geometric` map
- `$spacing-fibonacci` map

##### Typography
- `font-family` mixin that looks up a font-family value by name
- `break-word-without-hyphen` mixin that breaks words that are too long for a container without a hyphen
- `break-word-with-hyphen` mixin that breaks words that are too long for a container with a hypen
- `truncate-with-ellipsis` mixin that truncates text that is too long for a container with an ellipsis

###### Tokens
- `$font-family` string

### In Development
- Better README
- Examples
- Improved naming conventions
- Modular scale typography
