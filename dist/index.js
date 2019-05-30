"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _fn = null;
var flag = {};
var privateFlag = false;
function checkFn() { }
Object.defineProperty(flag, 'opened', {
    get: function () {
        return privateFlag;
    },
    set: function (v) {
        privateFlag = v;
        if (v) {
            setTimeout(function () {
                _fn && _fn();
            });
        }
    }
});
checkFn.toString = function () {
    flag['opened'] = true;
};
console.log('%c', checkFn);
exports.default = {
    setup: function (callbackFn) {
        _fn = callbackFn;
    },
    getIsOpen: function () {
        flag['opened'] = false;
        console.log('%c', checkFn);
        return flag['opened'];
    }
};
//# sourceMappingURL=index.js.map