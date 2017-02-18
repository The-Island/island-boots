var boots = require('../lib/boots');
var assert = require('assert');

describe('island-boots', function() {
  this.timeout(10000);
  describe('#start()', function() {
    it('should start', function(done) {
      boots.start(function (client) {
        assert.ok(client.get('db'))
        assert.ok(client.get('events'))
        assert.ok(client.get('search'))
        done();
      });
    });
  });
});
