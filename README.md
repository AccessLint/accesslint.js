[![Build Status](https://travis-ci.org/accesslint/monitor.svg)](https://travis-ci.org/accesslint/monitor)

# Accessibility Monitoring for Your Website

AccessLint Monitor will alert you of accessibility errors in your website.

## Usage

Install AccessLint Monitor by including the javascript in at the end of any page
you want to monitor.

## How it works

AccessLint Monitor is similar to client side performance measurement tools like
NewRelic or Google Analytics in the way it is included and run on your website.
When a visitor arrives at a page that has the script installed, an audit will
run in the background automatically. If there are any accessibility issues on
that page, AccessLint Monitor track the error for review.

## Development

AccessLint Monitor uses babel and webpack to transpile and package ES2015
code for inclusion clientside. It uses karma and mocha to run tests.

### Setup

    $ bin/setup

### Building

#### Development

    $ gulp build-dev

#### Production

    $ gulp build

### Testing

From the application root: `$ karma start`

#### Smoke testing

1. Start the node test app `$ DEBUG=express:* node test/integration/app.js`.
1. Visit `localhost:3000`.
1. Open the network panel and review the response from the host.
