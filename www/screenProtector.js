var exec = require('cordova/exec');

exports.detectScreenShot = function (arg0, success, error) {
    exec(success, error, 'screenProtector', 'detectScreenShot', [arg0]);
};
