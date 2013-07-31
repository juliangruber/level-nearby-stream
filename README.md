
# level-nearby-stream

Stream in nearby places using the browser's geolocation, a convenient
client-side counterpart to
[level-places](https://github.com/Wayla/level-places).

## Usage

Add some cities, then query for ones nearby.

```js
var Places = require('level-places');
var createNearbyStream = require('level-nearby-stream');

// get db from multilevel or level-js
var places = Places(db);

places.add('NYC', 40.7142, -74.0064);
places.add('KFB', 47.8800, 10.6225);

createNearbyStream(places).on('data', console.log);
// => 'KFB'
//    'NYC'
```

## API

### createNearbyStream(places, options)

Create a readable stream that emits nearby places.

Possible options are:

* `timeout (Number)`: Give up finding the current position after x miliseconds
* plus all the options from [places#createReadStream](https://github.com/Wayla/level-places#placescreatereadstream-latitude-longitude--options)
* plus all the options from [trie#createSearchStream](https://github.com/juliangruber/level-trie#triecreatesearchstreamstring-options)

### stream#on('position', fn(position))

Emits `position` when `geo-position` finds it.

## Installation

With [npm](http://npmjs.org) do

```bash
$ npm install level-nearby-stream
```

Then bundle for the client using [browserify](http://browserify.org/).

## License

Copyright (c) 2013 Julian Gruber &lt;julian@wayla.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
