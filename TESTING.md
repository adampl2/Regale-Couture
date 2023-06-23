# Regalé-Couture - Testing

![multi screen img]()

[View deployed site here]()

- - -

## CONTENTS

* [`Automated Testing`](#automated-testing)
  * [`W3C Validator`](#w3c-validator)
  * [`JavaScript Validator`](#javascript-validator)
  * [`Lighthouse`](#lighthouse)
* [`Manual Testing`](#manual-testing)
  * [`User Stories`](#user-stories)
  * [`Full Testing`](#full-testing)

Testing progressed at every stage of this project. This ensured that most issues were fixed before the website was finished. Chrome DevTools were utilised when building the website to help with troubleshooting as the website transformed.

## Automated Testing

### W3C Validator

The [W3C validator](https://validator.w3.org/) was used to validate the HTML and CSS pages.

* HTML Validation

* base.html:

  ![base.html](docs/testing-base.html.jpg) - Unsuccessful

* CSS Validation
  * ![CSS](docs/testing-css.jpg)

- - -

### JavaScript Validator

[jshint](https://jshint.com/) was used to validate all JavaScript code on this page.

* script.js Validation

  * [`app.js`](docs/testing-script.js.jpg) - Warnings only relating to ES6 version.

* JavaScript in Bag HTML script tag

  * [`bag.html js`](docs/testing-bag-js.jpg) - ES6 related error.

* stripe_elements.js Validation

  * [`stripe_elements.js`](docs/testing-stripe_elements.js.jpg) - Warnings only relating to ES6 version.

* JavaScript in Product HTML script tag

  * [`edit/add_product.html js`](docs/testing-add-editproduct-js.jpg) - ES6 related error.

* country_fields.js Validation

  * [`country_fields.js`](docs/testing-countryfields.js.jpg) - Warnings only relating to ES6 version.

- - -

### Python Testing