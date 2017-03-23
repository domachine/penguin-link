# penguin-link

## Installation

	$ npm i -S penguin-link

Then edit your `package.json` file to include the component.

```json
{
  "penguin": {
    "components": {
      "Link": "penguin-link"
    }
  }
}
```

## Usage

```html
<a data-component='Link' data-props='{"href":"/mypage"}'>
  My page
</a>
```

This component adds the current language to your links. `/mypage` is converted to `/<current-language>/mypage`.

### Props

  * `href` - The link-target.