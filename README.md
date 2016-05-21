[![Build Status](https://travis-ci.org/accesslint/accesslint.js.svg)](https://travis-ci.org/accesslint/accesslint.js)

# Accessibility Monitoring for Your Website

accesslint.js warns you of accessibility errors in your website.

## Usage

Download the [latest release](https://github.com/accesslint/accesslint.js/releases/latest) and
include the javascript in your page:

```
<script src="accesslint.js" type="text/javascript">
```

## How it works

When a visitor arrives at a page that has the script installed, an audit will
run in the background automatically. If there are any accessibility issues on
that page, accesslint.js will log the error to the console, and post to a server
endpoint that you can optionally configure.

The audit will run once on page load, and **again for each DOM change event.**
This feature gives you feedback on new content introduced via AJAX, for example.

accesslint.js runs assertions from the
[aXe-core](https://github.com/dequelabs/axe-core) accessibility library wherever
you include the script. It the logs the violations the browser's Javascript
console. It also POSTs the results to `/access_lint/errors` in your app. If you
set up and endpoint with that path, you can log the errors on the server too.
See [AccessLint::Rails](https://github.com/thoughtbot/access_lint-rails) for a
Rails implementation of server side logging of accessibility errors.

![animated screencapture of accesslint warnings to the console](https://cloud.githubusercontent.com/assets/108163/15450990/693ce7e4-1f7c-11e6-8778-6a6aced77679.gif)


## Development

AccessLint Monitor uses babel and webpack to transpile and package ES2015
code for inclusion clientside. It uses karma and mocha to run tests.

### Setup

    $ bin/setup

### Testing

    $ gulp

### Building

#### Development

    $ gulp build-dev # build and watch for changes

#### Production

    $ gulp build
