const isType = (obj: any) => {
    let type: string = typeof obj;

    if (typeof obj === 'object') {
        // is Null
        if (obj === null) {
            type = 'null';
        }
        // is DOM
        else if ((typeof window !== 'undefined' && obj instanceof HTMLElement) || obj.toString() === '[object HTMLDocument]') {
            if (obj.toString() === '[object HTMLDocument]') {
                type = 'document';
            } else {
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

function _isUrl(s: string) {
    let regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    return regexp.test(s);
}

export const isArray = (obj: any): boolean => Array.isArray(obj);
export const isNan = (obj: any): boolean => isNaN(obj);
export const isString = (obj: any): boolean => isType(obj) === 'string';
export const isNumber = (obj: any): boolean => isType(obj) === 'number' && isNaN(obj) === false;
export const isBoolean = (obj: any): boolean => isType(obj) === 'boolean';
export const isUndefined = (obj: any): boolean => isType(obj) === 'undefined';
export const isDefined = (obj: any): boolean =>  typeof obj !== 'undefined';
export const isEmpty = (obj: any): boolean => (obj === '' || obj === 0 || obj === '0' || obj === null || obj === false || !obj);
export const isClass = (obj: any): boolean => isType(obj) === 'class';
export const isFunction = (obj: any): boolean => isType(obj) === 'function';
export const isObject = (obj: any): boolean => isType(obj) === 'object';
export const isNull = (obj: any): boolean => isType(obj) === 'null';
export const isDOM = (obj: any): boolean => isType(obj) === 'dom';
export const isArguments = (obj: any): boolean => isType(obj) === 'arguments';
export const isDate = (obj: any): boolean => isType(obj) === 'date';
export const isAsync = (cb: any): boolean => cb instanceof Promise;
export const isUrl = (url: any): boolean => isType(url) === 'string' && _isUrl(url);
export const isBase64 = (str: any): boolean => isString(str) && str.indexOf('base64') >= 0 && str.indexOf('data:') === 0;
export const isEmptyObject = (obj: any): boolean => isObject(obj) ? Object.keys(obj).length === 0 : false;
export const isEmptyArray = (obj: any): boolean => isArray(obj) ? obj.length === 0 : false;
