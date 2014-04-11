Famous Examples
===============

This repository contains discrete examples of how to use every Famo.us class. It is meant to be an easy way to get started learning Famo.us primitives.

To use clone this repo with the recursive option

    git clone git@github.com:Famous/examples.git --recursive

You'll see the following directory structure

```
├── content
├── css
├── src
│   ├── examples
│   ├── famous
│   ├── lib
│   ├── main.js
├── index.html
```

The `index.html` page loads an example in `src/main.js`. The default example is `src/examples/views/Scrollview/example.js`. If you want to change the current example, edit string in the require statement to point to any other file in the folder `src/examples`.

The examples folder has a one-to-one relationship to each Famo.us module in the famous folder, and includes a folder of examples for each file in its respective module that is considered a public interface.


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
