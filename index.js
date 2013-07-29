var tmpStream = require('tmp-stream');
var getPosition = require('geo-position');

module.exports = createNearbyStream;

function createNearbyStream (places, opts) {
  if (!opts) opts = {};
  var tmp = tmpStream();

  getPosition(opts, function (err, pos) {
    if (err) return tmp.emit('error', err);

    tmp.emit('position', pos);
    var nearby = places.createNearbyStream(pos, opts);
    tmp.replace(nearby);
  });

  return tmp;
}
