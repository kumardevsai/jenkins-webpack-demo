const $ = require('jquery');
const content = `
${__webpack_hash__}
${JENKINS_URL}
${process.env.GIT_COMMIT}
${process.env.BUILD_ID}
${process.env.GIT_BRANCH}
${process.env.BUILD_URL}
`;

console.log(__webpack_require__);

$('body').after($('<pre>').text(content));