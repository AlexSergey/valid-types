"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isType = function (obj) {
    var type = typeof obj;
    if (typeof obj === 'object') {
        // is Null
        if (obj === null) {
            type = 'null';
        }
        // is DOM
        else if ((typeof window !== 'undefined' && obj instanceof HTMLElement) || obj.toString() === '[object HTMLDocument]') {
            if (obj.toString() === '[object HTMLDocument]') {
                type = 'document';
            }
            else {
                type = 'dom';
            }
        }
        // is Array
        else if (Array.isArray(obj)) {
            type = 'array';
        }
        // is Date
        else if (obj instanceof Date) {
            type = 'date';
        }
        // is Arguments
        else if (typeof obj.length === 'number' && typeof obj === 'object' && Array.isArray(obj) === false) {
            type = 'arguments';
        }
    }
    else if (typeof obj === 'number') {
        type = 'number';
        // is NaN
        if (isNaN(obj)) {
            type = 'NaN';
        }
    }
    else if (typeof obj === 'function') {
        type = 'function';
        if (obj.toString) {
            var fnString = obj.toString();
            var isClass_1 = fnString.indexOf('class') === 0;
            if (isClass_1) {
                type = 'class';
            }
        }
    }
    return type;
};
function _isUrl(s) {
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regexp.test(s);
}
exports.isArray = function (obj) { return isType(obj) === 'array'; };
exports.isNan = function (obj) { return isNaN(obj); };
exports.isString = function (obj) { return isType(obj) === 'string'; };
exports.isNumber = function (obj) { return isType(obj) === 'number' && isNaN(obj) === false; };
exports.isBoolean = function (obj) { return isType(obj) === 'boolean'; };
exports.isUndefined = function (obj) { return isType(obj) === 'undefined'; };
exports.isDefined = function (obj) { return typeof obj !== 'undefined'; };
exports.isEmpty = function (obj) { return (obj === '' || obj === 0 || obj === '0' || obj === null || obj === false || !obj); };
exports.isClass = function (obj) { return isType(obj) === 'class'; };
exports.isFunction = function (obj) { return isType(obj) === 'function'; };
exports.isObject = function (obj) { return isType(obj) === 'object'; };
exports.isNull = function (obj) { return isType(obj) === 'null'; };
exports.isDOM = function (obj) { return isType(obj) === 'dom'; };
exports.isArguments = function (obj) { return isType(obj) === 'arguments'; };
exports.isDate = function (obj) { return isType(obj) === 'date'; };
exports.isAsync = function (cb) { return cb instanceof Promise; };
exports.isUrl = function (url) { return isType(url) === 'string' && _isUrl(url); };
exports.isBase64 = function (str) { return exports.isString(str) && str.indexOf('base64') >= 0 && str.indexOf('data:') === 0; };
exports.isEmptyObject = function (obj) { return exports.isObject(obj) ? Object.keys(obj).length === 0 : false; };
exports.isEmptyArray = function (obj) { return exports.isArray(obj) ? obj.length === 0 : false; };
