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

Happy stylizing ...