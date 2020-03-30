const isType = (obj) => {
    let type = typeof obj;
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
            let fnString = obj.toString();
            let isClass = fnString.indexOf('class') === 0;
            if (isClass) {
                type = 'class';
            }
        }
    }
    return type;
};
function _isUrl(s) {
    let regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regexp.test(s);
}
export const isArray = (obj) => isType(obj) === 'array';
export const isNan = (obj) => isNaN(obj);
export const isString = (obj) => isType(obj) === 'string';
export const isNumber = (obj) => isType(obj) === 'number' && isNaN(obj) === false;
export const isBoolean = (obj) => isType(obj) === 'boolean';
export const isUndefined = (obj) => isType(obj) === 'undefined';
export const isDefined = (obj) => typeof obj !== 'undefined';
export const isEmpty = (obj) => (obj === '' || obj === 0 || obj === '0' || obj === null || obj === false || !obj);
export const isClass = (obj) => isType(obj) === 'class';
export const isFunction = (obj) => isType(obj) === 'function';
export const isObject = (obj) => isType(obj) === 'object';
export const isNull = (obj) => isType(obj) === 'null';
export const isDOM = (obj) => isType(obj) === 'dom';
export const isArguments = (obj) => isType(obj) === 'arguments';
export const isDate = (obj) => isType(obj) === 'date';
export const isAsync = (cb) => cb instanceof Promise;
export const isUrl = (url) => isType(url) === 'string' && _isUrl(url);
export const isBase64 = (str) => isString(str) && str.indexOf('base64') >= 0 && str.indexOf('data:') === 0;
export const isEmptyObject = (obj) => isObject(obj) ? Object.keys(obj).length === 0 : false;
export const isEmptyArray = (obj) => isArray(obj) ? obj.length === 0 : false;
