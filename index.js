var tmpStream = require('tmp-stream');
var getPosition = require('geo-position');

function createNearbyStream (places) {
  var tmp = tmpStream();
  getPosition(function (err, pos) {
    if (err) return tmp.emit('error', err);
    tmp.replace(places.createReadStream(pos.latitude, pos.longitude));
  });
  return tmp;
}
