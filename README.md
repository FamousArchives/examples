Famous Examples
===============

This repository contains discrete examples of how to use every Famo.us class. It is meant to be an easy way to get started learning Famo.us primitives.

To use clone this repo with the recursive option

    git clone https://github.com/Famous/examples.git --recursive

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

## Overview

##### List of all examples by submodule
| Core | Events | Inputs |
| --------- | ----------- | ----------- |
| [Context - Base example](https://github.com/Famous/examples/blob/master/src/examples/core/Context/example.js) | [EventArbiter - Base example](https://github.com/Famous/examples/blob/master/src/examples/events/EventArbiter/example.js) | [GenericSync - Base example](https://github.com/Famous/examples/blob/master/src/examples/inputs/GenericSync/example.js) |
| [Context - Context in an existing DOM element](https://github.com/Famous/examples/blob/master/src/examples/core/Context/context-in-existing-element.js) | [EventFilter - Piping](https://github.com/Famous/examples/blob/master/src/examples/events/EventFilter/pipe-filter.js) | [MouseSync - Base example](https://github.com/Famous/examples/blob/master/src/examples/inputs/MouseSync/example.js) |
| [Context - Setting perspective](https://github.com/Famous/examples/blob/master/src/examples/core/Context/setting-perspective.js) | [EventFilter - Subscribing](https://github.com/Famous/examples/blob/master/src/examples/events/EventFilter/subscribe-filter.js) | [MouseSync - Single direction](https://github.com/Famous/examples/blob/master/src/examples/inputs/MouseSync/single-dimensional.js) |
| [Engine - Base example](https://github.com/Famous/examples/blob/master/src/examples/core/Engine/example.js) | [EventMapper - Base example](https://github.com/Famous/examples/blob/master/src/examples/events/EventMapper/example.js) | [PinchSync - Base example](https://github.com/Famous/examples/blob/master/src/examples/inputs/PinchSync/example.js) |
| [EventHandler - Base example](https://github.com/Famous/examples/blob/master/src/examples/core/EventHandler/example.js) | []() | [RotateSync - Base example](https://github.com/Famous/examples/blob/master/src/examples/inputs/RotateSync/example.js) |
| [EventHandler - Trigger](https://github.com/Famous/examples/blob/master/src/examples/core/EventHandler/trigger.js) | []() | [ScaleSync - Base example](https://github.com/Famous/examples/blob/master/src/examples/inputs/ScaleSync/example.js) |
| [Modifier - Base example](https://github.com/Famous/examples/blob/master/src/examples/core/Modifier/example.js) | []() | [ScrollSync - Base example](https://github.com/Famous/examples/blob/master/src/examples/inputs/ScrollSync/example.js) |
| [Modifier - Origin](https://github.com/Famous/examples/blob/master/src/examples/core/Modifier/origin.js) | []() | [TouchSync - Base example](https://github.com/Famous/examples/blob/master/src/examples/inputs/TouchSync/example.js) |
| [Modifier - Size](https://github.com/Famous/examples/blob/master/src/examples/core/Modifier/size.js) | []() | [TouchSync - Single direction](https://github.com/Famous/examples/blob/master/src/examples/inputs/TouchSync/single-dimensional.js) |
| [Modifier - Opacity](https://github.com/Famous/examples/blob/master/src/examples/core/Modifier/opacity.js) | []() | []() |
| [Modifier - Chaining](https://github.com/Famous/examples/blob/master/src/examples/core/Modifier/chaining.js) | []() | []() |
| [Modifier - Branching](https://github.com/Famous/examples/blob/master/src/examples/core/Modifier/branching.js) | []() | []() |
| [Scene - Base example](https://github.com/Famous/examples/blob/master/src/examples/core/Scene/example.js) | []() | []() |
| [Surface - Base example](https://github.com/Famous/examples/blob/master/src/examples/core/Surface/example.js) | []() | []() |
| [Surface - True size](https://github.com/Famous/examples/blob/master/src/examples/core/Surface/true-sizing.js) | []() | []() |
| [Transform - Base example](https://github.com/Famous/examples/blob/master/src/examples/core/Transform/example.js) | []() | []() |
| [View - Base example](https://github.com/Famous/examples/blob/master/src/examples/core/View/example.js) | []() | []() |

| Math | Modifiers | Physics |
| --------- | ----------- | ----------- |
| [Matrix - Base example](https://github.com/Famous/examples/blob/master/src/examples/math/Matrix/example.js) | [Draggable - Base example](https://github.com/Famous/examples/blob/master/src/examples/modifiers/Draggable/example.js) | []() |
| [Quaternion - Base example](https://github.com/Famous/examples/tree/master/src/examples/math/Quaternion) | [ModifierChain - Base example](https://github.com/Famous/examples/blob/master/src/examples/modifiers/ModifierChain/example.js) | []() |
| [Quaternion - Rotating box](https://github.com/Famous/examples/blob/master/src/examples/math/Quaternion/rotating_box.js) | [StateModifier - Base example](https://github.com/Famous/examples/blob/master/src/examples/modifiers/StateModifier/example.js) | []() |
| [Random - Base example](https://github.com/Famous/examples/blob/master/src/examples/math/Random/example.js) | []() | []() |
| [Vector - Base example](https://github.com/Famous/examples/blob/master/src/examples/math/Vector/example.js) | []() | []() |

| Surfaces | Transitions | Utilities |
| --------- | ----------- | ----------- |
| [ContainerSurface - Base example](https://github.com/Famous/examples/blob/master/src/examples/surfaces/ContainerSurface/example.js) | [Easing - Base example](https://github.com/Famous/examples/blob/master/src/examples/transitions/Easing/example.js) | [KeyCodes - Base example](https://github.com/Famous/examples/blob/master/src/examples/utilities/KeyCodes/example.js) |
| [ImageSurface - Base example](https://github.com/Famous/examples/blob/master/src/examples/surfaces/ImageSurface/example.js) | [SnapTransition - Base example](https://github.com/Famous/examples/blob/master/src/examples/transitions/SnapTransition/example.js) | [Timer - After](https://github.com/Famous/examples/blob/master/src/examples/utilities/Timer/after.js) |
| [InputSurface - Base example](https://github.com/Famous/examples/blob/master/src/examples/surfaces/InputSurface/example.js) | [SpringTransition - Base example](https://github.com/Famous/examples/blob/master/src/examples/transitions/SpringTransition/example.js) | [Timer - Every](https://github.com/Famous/examples/blob/master/src/examples/utilities/Timer/every.js) |
| []() | [Transitionable - Base example](https://github.com/Famous/examples/blob/master/src/examples/transitions/Transitionable/example.js) | [Timer - setTimeout](https://github.com/Famous/examples/blob/master/src/examples/utilities/Timer/setTimeout.js) |
| []() | [TransitionableTransform - Base example](https://github.com/Famous/examples/blob/master/src/examples/transitions/TransitionableTransform/example.js) | [Timer - setInterval](https://github.com/Famous/examples/blob/master/src/examples/utilities/Timer/setInterval.js) |
| []() | [TweenTransition - Base example](https://github.com/Famous/examples/blob/master/src/examples/transitions/TweenTransition/example.js) | [Timer - Clear](https://github.com/Famous/examples/blob/master/src/examples/utilities/Timer/clear.js) |
| []() | [WallTransition - Base example](https://github.com/Famous/examples/blob/master/src/examples/transitions/WallTransition/example.js) | [Utility - After](https://github.com/Famous/examples/blob/master/src/examples/utilities/Utility/after.js) |


| Views | Widgets |
| --------- | ----------- |
| [Deck - Base example](https://github.com/Famous/examples/blob/master/src/examples/views/Deck/example.js) | []() |
| [EdgeSwapper - Base example](https://github.com/Famous/examples/blob/master/src/examples/views/EdgeSwapper/example.js) | []() |
| [GridLayout - Base example](https://github.com/Famous/examples/blob/master/src/examples/views/GridLayout/example.js) | []() |
| [GridLayout - With sized Modifier](https://github.com/Famous/examples/blob/master/src/examples/views/GridLayout/with-sized-modifier.js) | []() |
| [HeaderFooterLayout - Base example](https://github.com/Famous/examples/blob/master/src/examples/views/HeaderFooterLayout/example.js) | []() |
| [HeaderFooterLayout - With sized Modifier](https://github.com/Famous/examples/blob/master/src/examples/views/HeaderFooterLayout/with-sized-modifier.js) | []() |
| [RenderController - Base example](https://github.com/Famous/examples/blob/master/src/examples/views/RenderController/example.js) | []() |
| [Scrollview - Base example](https://github.com/Famous/examples/blob/master/src/examples/views/Scrollview/example.js) | []() |
| [SequentialLayout - Base example](https://github.com/Famous/examples/blob/master/src/examples/views/SequentialLayout/example.js) | []() |



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
