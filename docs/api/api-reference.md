# API Reference

## Parameters
| Name          | Description                                  | Type               | Default   |
| ------------- | -------------------------------------------- | ------------------ | --------- |
| elementId     | selected element tag `id`                    | `string`           | --        |
| options       | see `Options` section below                  | `PaperizerOption`  | see below |
| callBack      | method triggered after closing print window  | `Function`         | --        |

## Options

### PaperizerOption

| Name          | Description                                  | Type               | Default   |
| ------------- | -------------------------------------------- | ------------------ | --------- |
| target     | same as the target parameter for [`Window: open()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#syntax) method | `string`           | `_blank`        |
| features       | same as the windowFeatures parameter for  [`Window: open()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#syntax) method  | `string[]` | `['fullscreen=yes', 'titlebar=yes', 'scrollbars=yes']` |
| styles      | links to your CSS    | `string[]`         | `[]`        |
| autoClose      | automatically closes the print preview window after the print window is closed  | `boolean`         | `true`        |
| windowTitle      | custom window title of the print preview window  | `string`         | (Current window title)        |
| autoPrint      | automatically start printer printing function  | `boolean`         | `true`        |
| bodyClass      | add class in body   | `string`         |         |
