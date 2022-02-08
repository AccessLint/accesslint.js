# Looking for Accessibility CI?

Use the [AccessLint App](https://app.accesslint.com) for GitHub.

# a11y-explorer.js

Accessibility warnings for dynamic web content.

## Usage

Include the javascript in your page before `</body>`.

Then, run your acceptance tests to get accessibility warning logs,
or open your browser and get automatic warnings in the JavaScript console.

### Browser Console

![Firefox JavaScript console with accessibility warnings](https://cloud.githubusercontent.com/assets/108163/15451467/c36dd858-1f91-11e6-9c5f-7a945c7b38f7.png)

## How it works

a11y-logger.js runs assertions from the
[aXe-core](https://github.com/dequelabs/axe-core) accessibility library wherever
you include the script once on page load, and again for each click, at idle time.

## Development

### Setup

    $ bin/setup

### Building

    $ yarn build
