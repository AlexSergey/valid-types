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
var isArray = function (obj) { return isType(obj) === 'array'; };
var isNan = function (obj) { return isNaN(obj); };
var isString = function (obj) { return isType(obj) === 'string'; };
var isNumber = function (obj) { return isType(obj) === 'number' && isNaN(obj) === false; };
var isBoolean = function (obj) { return isType(obj) === 'boolean'; };
var isUndefined = function (obj) { return isType(obj) === 'undefined'; };
var isDefined = function (obj) { return typeof obj !== 'undefined'; };
var isEmpty = function (obj) { return (obj === '' || obj === 0 || obj === '0' || obj === null || obj === false || !obj); };
var isClass = function (obj) { return isType(obj) === 'class'; };
var isFunction = function (obj) { return isType(obj) === 'function'; };
var isObject = function (obj) { return isType(obj) === 'object'; };
var isNull = function (obj) { return isType(obj) === 'null'; };
var isDOM = function (obj) { return isType(obj) === 'dom'; };
var isArguments = function (obj) { return isType(obj) === 'arguments'; };
var isDate = function (obj) { return isType(obj) === 'date'; };
var isAsync = function (cb) { return cb instanceof Promise; };
var isUrl = function (url) { return isType(url) === 'string' && _isUrl(url); };
var isBase64 = function (str) { return isString(str) && str.indexOf('base64') >= 0 && str.indexOf('data:') === 0; };
var isEmptyObject = function (obj) { return isObject(obj) ? Object.keys(obj).length === 0 : false; };
var isEmptyArray = function (obj) { return isArray(obj) ? obj.length === 0 : false; };
module.exports = { isType: isType, isArray: isArray, isNan: isNan, isString: isString, isNumber: isNumber, isBoolean: isBoolean, isUndefined: isUndefined, isDefined: isDefined, isEmpty: isEmpty, isClass: isClass, isFunction: isFunction, isObject: isObject, isNull: isNull, isDOM: isDOM, isArguments: isArguments, isDate: isDate, isAsync: isAsync, isUrl: isUrl, isBase64: isBase64, isEmptyObject: isEmptyObject, isEmptyArray: isEmptyArray };
