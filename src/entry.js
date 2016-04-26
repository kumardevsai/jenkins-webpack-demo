const $ = require('jquery');
const content = `hash:${__webpack_hash__};jenkins:${JENKINS_URL}`;

console.log(__webpack_require__);

$('body')
  .after($('<pre>').text(content))
  .after($('<pre>').text(JSON.stringify(process.env, null, 2)))
  .after($('<a>').text(process.env.BUILD_URL))
  .after($('<button>').text('click').click(function () {
    require.ensure([], function (require) {
      var lazy = require('./lazy');
      lazy('haha')
    })
  }));
