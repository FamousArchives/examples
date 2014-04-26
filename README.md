#Famous Examples
> This repository contains discrete examples of how to use every Famo.us class. It is meant to be an easy way to get started learning Famo.us primitives..

##Dependencies
It is actually quite simple really

First make sure you have node.js installed... without that nothing works!  You can either install it with your favorite package manager or with [the installer](http://nodejs.org/download) found on [nodejs.org](http://nodejs.org).

This project relies on grunt-cli, and bower to do all the heavy lifting for you

```
npm install -g grunt-cli bower
```

##Getting Started

```
npm install && bower install
```

That's it!!!

##Running the Development Server

Simply run ```grunt serve``` and you will start a local development server and open Chrome.  Watch tasks will be running, and your browser will be automatically refreshed whenever a file in the repo changes.

You can run serve with ```--port=9001``` to manually pick the port that the server will run on

*This option is currently borked...*
You can also change the port livereload is running on with the option ```--livereload=8675309```
*... if you think you can fix it check out the [issue on github](https://github.com/Famous/generator-famous/issues/22)*

If you would like to have your server be accessible to other devices on your local machine use the option ```--hostname=0.0.0.0```

##Production

If you would like to compile your project for distribution simply run the command ```grunt``` to build ```dist/``` which will be a deployment ready version of your app.  Preprocessing will be applied to html, all js will be concatenated and minified.  All js / css assets will also have their name prepended with a hash for cache busting.

## Contributing
All contributions are welcome! The simplest way to show your support for this project is to **"star" it**.

## License

All the code in the `src/examples` folder is licensed under the [MIT license][mit-license]. This is basically a better MIT license since it removes the ambiguous language from the original MIT.

The famous framework source code found in `/src/famous` is a git submodule cloned from the [famous/famous][famous-repo] git repo, and is licensed only under the MPL-2.0 license. More information about the licensing of that code can be found in the original repo.


### MIT License (everything in `src/examples`)

Copyright (c) 2014 Famous Industries, Inc.
 
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


### MPL-2.0 (everything in `src/famous`)

Copyright (c) 2014 Famous Industries, Inc.

This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.


[famous-repo]: https://github.com/famous/famous
[mit-license]: https://spdx.org/licenses/MIT#licenseText