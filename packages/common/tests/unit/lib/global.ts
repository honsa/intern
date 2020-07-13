import _global from '../../../src/lib/global';

const { registerSuite } = intern.getInterface('object');
const { assert } = intern.getPlugin('chai');

registerSuite('lib/global', {
  'global points to the real global'() {
    const realGlobal = (function(glb) {
      return glb;
    })(new Function('return this;')());
    assert.strictEqual(_global, realGlobal);
  }
});
