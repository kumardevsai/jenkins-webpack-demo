const $ = require('jquery');
const content = `
${__webpack_hash__}
${JENKINS_URL}
`;

console.log(__webpack_require__);

$('body').after($('<pre>').text(content));