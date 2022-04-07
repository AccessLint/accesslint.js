# Looking for Accessibility CI?

Use the [AccessLint App](https://app.accesslint.com) for GitHub.

# accesslint.js

Accessibility warnings for dynamic web content.

## Usage

Include the javascript in your page before `</body>`.

```js
<script defer src="https://cdn.accesslint.com/a11y-logger-0.1.0.js"></script>
```

Then, run your acceptance tests to get accessibility warning logs,
or open your browser and get automatic warnings in the JavaScript console.

### Browser Console

![Firefox JavaScript console with accessibility warnings](https://cloud.githubusercontent.com/assets/108163/15451467/c36dd858-1f91-11e6-9c5f-7a945c7b38f7.png)

## How it works

accesslint.js runs assertions from the
[aXe-core](https://github.com/dequelabs/axe-core) accessibility library.

## Development

### Setup

    $ bin/setup

### Building

    $ yarn build
