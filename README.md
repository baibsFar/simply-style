- [Installation](#installation)
- [Variables](#variables): 
  * [Font Family](#font-family)
  * [Colors](#colors)
  * [Sizes](#sizes)
  * [Screen Breakpoints](#screen-breakpoints)
- [Adding color preset](#adding-color-preset)
- [Flexbox](#flexbox)
- [Animations](#animations)

# Installation
- Clone the repository
```bash
git clone https://github.com/baibsFar/simply-style.git
```

- Install dependencies
```bash
npm install
# or
yarn
```

# Variables
In the variables, we have by default font families, colors, sizes and screen breakpoints. Make sure to import the variables module into your style file.

## Font Family
```scss
$quicksand: "Quicksand";
$shantell: "Shantell Sans";
$montserrat: "Montserrat";
```

## Colors
In colors variables, each color has 7 levels of opacity down 100 to 700. More the number is higher, less is the opacity.
```scss
$blue-100: #2075f9; // opacity ff in hex code
$blue-700: #2075f933; // opacity 33 in hex code
```

Available colors by default:
* blue - #2075f9 (with opacity)
* red - #ff4757 (with opacity)
* pink - #ff13b0 (with opacity)
* yellow - #ffba00 (with opacity)
* green - #46c93a (with opacity)
* gray - #464646 (with opacity)
* dark - #1e1e1e
* white - #ffffff

## Sizes
The size metrics is in pixels(px). So, as usage the size variable is like:
```scss
$size-2: 2px;
$size-500: 500px;
```

Available sizes:
```txt
2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 40, 50, 56, 64, 80, 96, 100, 200, 500
```

You can also use for example 1000px even if there is no 1000 in the size variable list:
```scss
div {
  width: calc($size-200 * 5); //  1000px
}
```

## Screen breakpoints
Available screen breakpoints: 
```scss
$mobile-screen-1: 475px;
$mobile-screen-2: 640px;
$mobile-screen-3: 768px;
$tablet: 1024px;
$desktop-1: 1280px;
$desktop-2: 1536px;
```

# Adding Color preset
- Open "src/presets/colors.json"
- Add color preset in the colors array. "name" property is for calling variables in styling and "code" for the value of the color in hexa.
```json
{
  "colors": [
    {
      "name": "hello",
      "code": "#ff0000"
    }
  ]
}
```

- Verify imports in "src/scss/main.scss"
```scss
@import "./partials/fontFaces";
@import "./mixins/display";
@import "./mixins/background";
@import "./partials/variables";
@import "./partials/presetColors";  // Here is the import to verify
@import "./partials/reset";
```

# Flexbox
We can use mixins to decrease the length of code to write and minimize time.
- First, import flex module into your scss:
```scss
// Here is an import into main.scss
@import "./mixins/flex";
```

- Available options:
  * flex-start
  * flex-end
  * center
  * baseline
  * left
  * right

- Usage: 
```scss
/*
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
*/
@include flex-flexStart-flexEnd;
```

# Animations
There are many basic animation:
- fade-in
- fade-out
- fade-in-left
- fade-in-right
- fade-out-left
- fade-out-right
- fade-in-top
- fade-in-bottom
- fade-out-top
- fade-out-bottom
- bounce-vertical
- bounce-horizontal

## Usage
- Import animation module in your scss:
```scss
// Here is an import into main.scss
@import "./partials/animations";
```

- Example:
```scss
h1 {
  // parameters: animation-name, animation-duration- animation-timing-function
  @include animate-with(fade-in, 2s, ease-in-out);
}
```

Happy stylizing ...