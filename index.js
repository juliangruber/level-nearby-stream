var tmpStream = require('tmp-stream');
var getPosition = require('geo-position');

module.exports = createNearbyStream;

function createNearbyStream (places, opts) {
  if (!opts) opts = {};
  var tmp = tmpStream();

  getPosition(opts, function (err, pos) {
    if (err && !opts.ignoreErrors) return tmp.emit('error', err);
    if (!pos) pos = {};

    tmp.emit('position', pos);
    var nearby = places.createReadStream(pos, opts);
    tmp.replace(nearby);
  });

  return tmp;
}
