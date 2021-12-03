mvcblog-front
=============
A "single-page" application for
[mvcblog](https://github.com/lipido/mvcblog) based on
[fronty.js](https://github.com/lipido/fronty.js),
[jQuery.js](https://jquery.com/) and [Handlebars](http://handlebarsjs.com/), for
educational purposes.

This front-end of [mvcblog](https://github.com/lipido/mvcblog) uses JavaScript
and AJAX and interacts with the backend via its REST API.

## Architecture overview

The base architecture is defined by
[fronty.js](https://github.com/lipido/fronty.js).  In this sense, the main
artifacts are:

- Models, which are JavaScript objects containing application state, like
  `PostsModel` and `UserModel`.
- Components, which are JavaScript objects in charge of rendering different
  parts of the application.
- Renderers in [Handlebars](http://handlebarsjs.com/) language containing the
  HTML fragments separated from JavaScript.

In addition, this application includes a library for Internationalization (I18n)
in `js/i18n` folder.

## Installation

A quick installation process could be:

1. Download and install [mvcblog](https://github.com/lipido/mvcblog), the
   backend-app (you will need a PHP-enabled server and MySQL).
2. Download
[mvcblog-front](https://github.com/lipido/mvcblog-front/archive/master.zip) and copy
it inside the backend app, for example in `/frontend`.
3. Start your server and access it: http://localhost/mvcblog/frontend/index.html.
