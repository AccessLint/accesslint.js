[![Build Status](https://travis-ci.org/accesslint/monitor.svg)](https://travis-ci.org/accesslint/monitor)

# Accessibility Monitoring for Your Website

AccessLint.js warns you of accessibility errors in your website.

## Usage

Install AccessLint.js by including the javascript in at the end of any page you
want to monitor.

Include the compiled library through the AccessLint CDN:

```
<script src="http://cdn.accesslint.com/accesslint-0.1.js" type="text/javascript">
```

## How it works

When a visitor arrives at a page that has the script installed, an audit will
run in the background automatically. If there are any accessibility issues on
that page, AccessLint.js will raise the error and track it for review.

AccessLint.js runs assertions from the
[aXe-core](https://github.com/dequelabs/axe-core) accessibility library wherever
you include the script. It the raises JavaScript errors in the page and posts
results to the [AccessLint service](https://beta.accesslint.com), where you can
add reporting and notification integrations.

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

### Deploying

AccessLint.js is hosted on Amazon S3 behind Cloudfront. You must have AWS
credentials with the AccessLint account to publish an updated version.

    $ gulp publish
