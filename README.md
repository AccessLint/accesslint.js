# Looking for Accessibility CI?

Use the [AccessLint App](https://app.accesslint.com) for GitHub.

# accesslint.js

Accessibility warnings for dynamic web content.

## Usage

Include the javascript in your page before `</body>`.

```
<script src="https://cdn.accesslint.com/accesslint-1.1.2.js"></script>
```

Then, run your phantomjs browser tests to get accessibility warning logs,
or open your browser and get automatic warnings in the JavaScript console.

### Phantomjs tests

With RSpec, Capybara, and Poltergeist:

```
% bundle exec rspec spec/features

Randomized with seed 35702
<html> element must have a valid lang attribute [object HTMLHtmlElement]
Form elements must have labels [object HTMLInputElement]
.

Finished in 2.18 seconds (files took 1.11 seconds to load)
1 example, 0 failures

Randomized with seed 35702
```

### Browser Console

![Firefox JavaScript console with accessibility warnings](https://cloud.githubusercontent.com/assets/108163/15451467/c36dd858-1f91-11e6-9c5f-7a945c7b38f7.png)

## How it works

accesslint.js runs assertions from the
[aXe-core](https://github.com/dequelabs/axe-core) accessibility library wherever
you include the script once on page load, and again for each DOM change event.

This feature gives you feedback on new content introduced via AJAX, for example,
or updates to a single page app.

## Development

### Setup

    $ bin/setup

### Testing

    $ gulp

### Building

#### Development

    $ gulp build-dev # build and watch for changes

#### Production

    $ gulp build
