const _detectObjectSubtype = (obj: null | object): string => {
  if (obj === null) return "null";
  if (typeof window !== "undefined" && obj instanceof HTMLElement) return "dom";
  if (Object.prototype.toString.call(obj) === "[object HTMLDocument]")
    return "document";
  if (Array.isArray(obj)) return "array";
  if (obj instanceof Date) return "date";
  if (obj instanceof Promise) return "promise";
  if (obj instanceof RegExp) return "regexp";
  if (obj instanceof Map) return "map";
  if (obj instanceof Set) return "set";
  if (obj instanceof Error) return "error";
  if (Object.prototype.toString.call(obj) === "[object Arguments]")
    return "arguments";

  return "object";
};

const _detectFunctionSubtype = (obj: unknown): string => {
  const fnString = Function.prototype.toString.call(obj);
  if (/^\s*class[\s{]/.test(fnString)) return "class";
  if (Object.prototype.toString.call(obj) === "[object AsyncFunction]")
    return "async";

  return "function";
};

const isType = (obj: unknown): string => {
  const type = typeof obj;
  if (type === "object") return _detectObjectSubtype(obj as null | object);
  if (type === "number") return isNaN(obj as number) ? "NaN" : "number";
  if (type === "function") return _detectFunctionSubtype(obj);

  return type;
};

function _isUrl(s: string): boolean {
  try {
    const url = new URL(s);

    return (
      url.protocol === "http:" ||
      url.protocol === "https:" ||
      url.protocol === "ftp:"
    );
  } catch {
    return false;
  }
}

export { isType };
export const isArray = (obj: unknown): obj is unknown[] => Array.isArray(obj);
export const isNan = (obj: unknown): boolean =>
  typeof obj === "number" && isNaN(obj);
export const isString = (obj: unknown): obj is string =>
  typeof obj === "string";
export const isNumber = (obj: unknown): obj is number =>
  typeof obj === "number" && !isNaN(obj);
export const isBoolean = (obj: unknown): obj is boolean =>
  typeof obj === "boolean";
export const isUndefined = (obj: unknown): obj is undefined =>
  typeof obj === "undefined";
export const isDefined = (obj: unknown): boolean => typeof obj !== "undefined";
export const isEmpty = (obj: unknown): boolean =>
  obj === "" ||
  obj === 0 ||
  obj === "0" ||
  obj === null ||
  obj === false ||
  !obj;
export const isClass = (obj: unknown): boolean => isType(obj) === "class";
export const isFunction = (
  obj: unknown,
): obj is (...args: unknown[]) => unknown => isType(obj) === "function";
export const isObject = (obj: unknown): obj is Record<string, unknown> =>
  isType(obj) === "object";
export const isNull = (obj: unknown): obj is null => obj === null;
export const isDOM = (obj: unknown): boolean => isType(obj) === "dom";
export const isArguments = (obj: unknown): boolean =>
  Object.prototype.toString.call(obj) === "[object Arguments]";
export const isDate = (obj: unknown): obj is Date => obj instanceof Date;
export const isAsync = (obj: unknown): boolean =>
  Object.prototype.toString.call(obj) === "[object AsyncFunction]";
export const isPromise = (obj: unknown): obj is Promise<unknown> =>
  obj instanceof Promise;
export const isUrl = (url: unknown): boolean => isString(url) && _isUrl(url);
export const isBase64 = (str: unknown): boolean =>
  isString(str) && str.startsWith("data:") && str.includes("base64,");
export const isEmptyObject = (obj: unknown): boolean =>
  isObject(obj) ? Object.keys(obj).length === 0 : false;
export const isEmptyArray = (obj: unknown): boolean =>
  isArray(obj) ? obj.length === 0 : false;
export const isRegExp = (obj: unknown): obj is RegExp => obj instanceof RegExp;
export const isMap = (obj: unknown): obj is Map<unknown, unknown> =>
  obj instanceof Map;
export const isSet = (obj: unknown): obj is Set<unknown> => obj instanceof Set;
export const isError = (obj: unknown): obj is Error => obj instanceof Error;
export const isSymbol = (obj: unknown): obj is symbol =>
  typeof obj === "symbol";
