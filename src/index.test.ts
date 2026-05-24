import {
  isArguments,
  isArray,
  isAsync,
  isBase64,
  isBoolean,
  isClass,
  isDate,
  isDefined,
  isEmpty,
  isEmptyArray,
  isEmptyObject,
  isError,
  isFunction,
  isMap,
  isNan,
  isNull,
  isNumber,
  isObject,
  isPromise,
  isRegExp,
  isSet,
  isString,
  isSymbol,
  isType,
  isUndefined,
  isUrl,
} from "./index";

describe("isType", () => {
  describe("positive cases", () => {
    it("returns string for strings", () => {
      expect(isType("hello")).toBe("string");
    });
    it("returns number for numbers", () => {
      expect(isType(42)).toBe("number");
    });
    it("returns boolean for booleans", () => {
      expect(isType(true)).toBe("boolean");
    });
    it("returns undefined for undefined", () => {
      expect(isType(undefined)).toBe("undefined");
    });
    it("returns null for null", () => {
      expect(isType(null)).toBe("null");
    });
    it("returns symbol for symbols", () => {
      expect(isType(Symbol())).toBe("symbol");
    });
    it("returns NaN for NaN", () => {
      expect(isType(NaN)).toBe("NaN");
    });
    it("returns array for arrays", () => {
      expect(isType([1, 2, 3])).toBe("array");
    });
    it("returns object for plain objects", () => {
      expect(isType({ a: 1 })).toBe("object");
    });
    it("returns date for Date instances", () => {
      expect(isType(new Date())).toBe("date");
    });
    it("returns function for regular functions", () => {
      expect(isType((): undefined => undefined)).toBe("function");
    });
    it("returns class for class declarations", () => {
      class Foo {}
      expect(isType(Foo)).toBe("class");
    });
    it("returns async for async functions", () => {
      // eslint-disable-next-line @typescript-eslint/require-await
      expect(isType(async (): Promise<void> => undefined)).toBe("async");
    });
    it("returns promise for Promise instances", () => {
      expect(isType(Promise.resolve())).toBe("promise");
    });
    it("returns regexp for RegExp", () => {
      expect(isType(/abc/)).toBe("regexp");
    });
    it("returns map for Map", () => {
      expect(isType(new Map())).toBe("map");
    });
    it("returns set for Set", () => {
      expect(isType(new Set())).toBe("set");
    });
    it("returns error for Error", () => {
      expect(isType(new Error())).toBe("error");
    });
    it("returns arguments for arguments object", () => {
      function fn(): void {
        // eslint-disable-next-line prefer-rest-params
        expect(isType(arguments)).toBe("arguments");
      }
      fn();
    });
  });
});

describe("isArray", () => {
  describe("positive cases", () => {
    it("returns true for empty array", () => {
      expect(isArray([])).toBe(true);
    });
    it("returns true for array with values", () => {
      expect(isArray([1, 2, 3])).toBe(true);
    });
  });
  describe("negative cases", () => {
    it("returns false for plain object", () => {
      expect(isArray({})).toBe(false);
    });
    it("returns false for array-like object with length", () => {
      expect(isArray({ length: 0 })).toBe(false);
    });
    it("returns false for null", () => {
      expect(isArray(null)).toBe(false);
    });
    it("returns false for string", () => {
      expect(isArray("string")).toBe(false);
    });
  });
});

describe("isNan", () => {
  describe("positive cases", () => {
    it("returns true for NaN", () => {
      expect(isNan(NaN)).toBe(true);
    });
  });
  describe("negative cases", () => {
    it("returns false for a number", () => {
      expect(isNan(1)).toBe(false);
    });
    it("returns false for a string", () => {
      expect(isNan("NaN")).toBe(false);
    });
    it("returns false for undefined", () => {
      expect(isNan(undefined)).toBe(false);
    });
  });
});

describe("isString", () => {
  describe("positive cases", () => {
    it("returns true for empty string", () => {
      expect(isString("")).toBe(true);
    });
    it("returns true for non-empty string", () => {
      expect(isString("hello")).toBe(true);
    });
  });
  describe("negative cases", () => {
    it("returns false for number", () => {
      expect(isString(1)).toBe(false);
    });
    it("returns false for null", () => {
      expect(isString(null)).toBe(false);
    });
    it("returns false for undefined", () => {
      expect(isString(undefined)).toBe(false);
    });
    it("returns false for array", () => {
      expect(isString([])).toBe(false);
    });
  });
});

describe("isNumber", () => {
  describe("positive cases", () => {
    it("returns true for zero", () => {
      expect(isNumber(0)).toBe(true);
    });
    it("returns true for positive number", () => {
      expect(isNumber(42)).toBe(true);
    });
    it("returns true for negative float", () => {
      expect(isNumber(-3.14)).toBe(true);
    });
  });
  describe("negative cases", () => {
    it("returns false for NaN", () => {
      expect(isNumber(NaN)).toBe(false);
    });
    it("returns false for numeric string", () => {
      expect(isNumber("42")).toBe(false);
    });
    it("returns false for null", () => {
      expect(isNumber(null)).toBe(false);
    });
  });
});

describe("isBoolean", () => {
  describe("positive cases", () => {
    it("returns true for true", () => {
      expect(isBoolean(true)).toBe(true);
    });
    it("returns true for false", () => {
      expect(isBoolean(false)).toBe(true);
    });
  });
  describe("negative cases", () => {
    it("returns false for 1", () => {
      expect(isBoolean(1)).toBe(false);
    });
    it("returns false for 0", () => {
      expect(isBoolean(0)).toBe(false);
    });
    it('returns false for string "true"', () => {
      expect(isBoolean("true")).toBe(false);
    });
    it("returns false for null", () => {
      expect(isBoolean(null)).toBe(false);
    });
  });
});

describe("isUndefined", () => {
  describe("positive cases", () => {
    it("returns true for undefined", () => {
      expect(isUndefined(undefined)).toBe(true);
    });
  });
  describe("negative cases", () => {
    it("returns false for null", () => {
      expect(isUndefined(null)).toBe(false);
    });
    it("returns false for 0", () => {
      expect(isUndefined(0)).toBe(false);
    });
    it("returns false for empty string", () => {
      expect(isUndefined("")).toBe(false);
    });
  });
});

describe("isDefined", () => {
  describe("positive cases", () => {
    it("returns true for null", () => {
      expect(isDefined(null)).toBe(true);
    });
    it("returns true for 0", () => {
      expect(isDefined(0)).toBe(true);
    });
    it("returns true for empty string", () => {
      expect(isDefined("")).toBe(true);
    });
    it("returns true for false", () => {
      expect(isDefined(false)).toBe(true);
    });
  });
  describe("negative cases", () => {
    it("returns false for undefined", () => {
      expect(isDefined(undefined)).toBe(false);
    });
  });
});

describe("isEmpty", () => {
  describe("positive cases", () => {
    it("returns true for empty string", () => {
      expect(isEmpty("")).toBe(true);
    });
    it("returns true for 0", () => {
      expect(isEmpty(0)).toBe(true);
    });
    it('returns true for string "0"', () => {
      expect(isEmpty("0")).toBe(true);
    });
    it("returns true for null", () => {
      expect(isEmpty(null)).toBe(true);
    });
    it("returns true for false", () => {
      expect(isEmpty(false)).toBe(true);
    });
    it("returns true for undefined", () => {
      expect(isEmpty(undefined)).toBe(true);
    });
  });
  describe("negative cases", () => {
    it("returns false for non-empty string", () => {
      expect(isEmpty("hello")).toBe(false);
    });
    it("returns false for positive number", () => {
      expect(isEmpty(1)).toBe(false);
    });
    it("returns false for true", () => {
      expect(isEmpty(true)).toBe(false);
    });
  });
});

describe("isClass", () => {
  describe("positive cases", () => {
    it("returns true for class declaration", () => {
      class Animal {}
      expect(isClass(Animal)).toBe(true);
    });
    it("returns true for class extending another class", () => {
      class Animal {}
      class Dog extends Animal {}
      expect(isClass(Dog)).toBe(true);
    });
  });
  describe("negative cases", () => {
    it("returns false for arrow function", () => {
      expect(isClass((): undefined => undefined)).toBe(false);
    });
    it("returns false for regular function", () => {
      expect(
        isClass(function (): undefined {
          return;
        }),
      ).toBe(false);
    });
    it("returns false for number", () => {
      expect(isClass(42)).toBe(false);
    });
  });
});

describe("isFunction", () => {
  describe("positive cases", () => {
    it("returns true for arrow function", () => {
      expect(isFunction((): undefined => undefined)).toBe(true);
    });
    it("returns true for regular function", () => {
      expect(
        isFunction(function (): undefined {
          return;
        }),
      ).toBe(true);
    });
  });
  describe("negative cases", () => {
    it("returns false for async function", () => {
      // eslint-disable-next-line @typescript-eslint/require-await
      expect(isFunction(async (): Promise<void> => undefined)).toBe(false);
    });
    it("returns false for class", () => {
      class Foo {}
      expect(isFunction(Foo)).toBe(false);
    });
    it("returns false for number", () => {
      expect(isFunction(42)).toBe(false);
    });
    it("returns false for null", () => {
      expect(isFunction(null)).toBe(false);
    });
  });
});

describe("isObject", () => {
  describe("positive cases", () => {
    it("returns true for empty object", () => {
      expect(isObject({})).toBe(true);
    });
    it("returns true for object with keys", () => {
      expect(isObject({ a: 1 })).toBe(true);
    });
  });
  describe("negative cases", () => {
    it("returns false for array", () => {
      expect(isObject([])).toBe(false);
    });
    it("returns false for null", () => {
      expect(isObject(null)).toBe(false);
    });
    it("returns false for Date", () => {
      expect(isObject(new Date())).toBe(false);
    });
    it("returns false for Map", () => {
      expect(isObject(new Map())).toBe(false);
    });
    it("returns false for Set", () => {
      expect(isObject(new Set())).toBe(false);
    });
  });
});

describe("isNull", () => {
  describe("positive cases", () => {
    it("returns true for null", () => {
      expect(isNull(null)).toBe(true);
    });
  });
  describe("negative cases", () => {
    it("returns false for undefined", () => {
      expect(isNull(undefined)).toBe(false);
    });
    it("returns false for 0", () => {
      expect(isNull(0)).toBe(false);
    });
    it("returns false for empty string", () => {
      expect(isNull("")).toBe(false);
    });
  });
});

describe("isArguments", () => {
  describe("positive cases", () => {
    it("returns true for arguments object", () => {
      function fn(): void {
        // eslint-disable-next-line prefer-rest-params
        expect(isArguments(arguments)).toBe(true);
      }
      fn();
    });
  });
  describe("negative cases", () => {
    it("returns false for array-like object with length", () => {
      expect(isArguments({ length: 0 })).toBe(false);
    });
    it("returns false for array", () => {
      expect(isArguments([1, 2, 3])).toBe(false);
    });
    it("returns false for null", () => {
      expect(isArguments(null)).toBe(false);
    });
  });
});

describe("isDate", () => {
  describe("positive cases", () => {
    it("returns true for new Date()", () => {
      expect(isDate(new Date())).toBe(true);
    });
    it("returns true for Date from string", () => {
      expect(isDate(new Date("2024-01-01"))).toBe(true);
    });
  });
  describe("negative cases", () => {
    it("returns false for date string", () => {
      expect(isDate("2024-01-01")).toBe(false);
    });
    it("returns false for timestamp number", () => {
      expect(isDate(1704067200000)).toBe(false);
    });
    it("returns false for null", () => {
      expect(isDate(null)).toBe(false);
    });
  });
});

describe("isAsync", () => {
  describe("positive cases", () => {
    it("returns true for async arrow function", () => {
      // eslint-disable-next-line @typescript-eslint/require-await
      expect(isAsync(async (): Promise<void> => undefined)).toBe(true);
    });
    it("returns true for async named function", () => {
      // eslint-disable-next-line @typescript-eslint/require-await
      async function fn(): Promise<void> {
        return undefined;
      }
      expect(isAsync(fn)).toBe(true);
    });
  });
  describe("negative cases", () => {
    it("returns false for regular function", () => {
      expect(isAsync((): undefined => undefined)).toBe(false);
    });
    it("returns false for Promise instance", () => {
      expect(isAsync(Promise.resolve())).toBe(false);
    });
    it("returns false for null", () => {
      expect(isAsync(null)).toBe(false);
    });
  });
});

describe("isPromise", () => {
  describe("positive cases", () => {
    it("returns true for Promise.resolve()", () => {
      expect(isPromise(Promise.resolve())).toBe(true);
    });
    it("returns true for new Promise()", () => {
      expect(
        isPromise(
          new Promise<void>((resolve) => {
            resolve();
          }),
        ),
      ).toBe(true);
    });
  });
  describe("negative cases", () => {
    it("returns false for async function", () => {
      // eslint-disable-next-line @typescript-eslint/require-await
      expect(isPromise(async (): Promise<void> => undefined)).toBe(false);
    });
    it("returns false for thenable-like object", () => {
      expect(isPromise({ then: (): undefined => undefined })).toBe(false);
    });
    it("returns false for null", () => {
      expect(isPromise(null)).toBe(false);
    });
  });
});

describe("isUrl", () => {
  describe("positive cases", () => {
    it("returns true for https url", () => {
      expect(isUrl("https://example.com")).toBe(true);
    });
    it("returns true for http url with path and query", () => {
      expect(isUrl("http://example.com/path?q=1")).toBe(true);
    });
    it("returns true for ftp url", () => {
      expect(isUrl("ftp://files.example.com")).toBe(true);
    });
    it("returns true for localhost with port", () => {
      expect(isUrl("https://localhost:3000")).toBe(true);
    });
  });
  describe("negative cases", () => {
    it("returns false for url without protocol", () => {
      expect(isUrl("example.com")).toBe(false);
    });
    it("returns false for plain string", () => {
      expect(isUrl("not a url")).toBe(false);
    });
    it("returns false for empty string", () => {
      expect(isUrl("")).toBe(false);
    });
    it("returns false for null", () => {
      expect(isUrl(null)).toBe(false);
    });
    it("returns false for number", () => {
      expect(isUrl(42)).toBe(false);
    });
    it("returns false for javascript: protocol", () => {
      expect(isUrl("javascript:alert(1)")).toBe(false);
    });
  });
});

describe("isBase64", () => {
  describe("positive cases", () => {
    it("returns true for image data url with base64", () => {
      expect(isBase64("data:image/png;base64,abc123==")).toBe(true);
    });
    it("returns true for text data url with base64", () => {
      expect(isBase64("data:text/plain;base64,SGVsbG8=")).toBe(true);
    });
  });
  describe("negative cases", () => {
    it("returns false for raw base64 string without data prefix", () => {
      expect(isBase64("SGVsbG8=")).toBe(false);
    });
    it("returns false for data url without base64", () => {
      expect(isBase64("data:image/png;utf8,abc")).toBe(false);
    });
    it("returns false for null", () => {
      expect(isBase64(null)).toBe(false);
    });
    it("returns false for number", () => {
      expect(isBase64(42)).toBe(false);
    });
  });
});

describe("isEmptyObject", () => {
  describe("positive cases", () => {
    it("returns true for empty object", () => {
      expect(isEmptyObject({})).toBe(true);
    });
  });
  describe("negative cases", () => {
    it("returns false for object with keys", () => {
      expect(isEmptyObject({ a: 1 })).toBe(false);
    });
    it("returns false for array", () => {
      expect(isEmptyObject([])).toBe(false);
    });
    it("returns false for null", () => {
      expect(isEmptyObject(null)).toBe(false);
    });
    it("returns false for empty string", () => {
      expect(isEmptyObject("")).toBe(false);
    });
  });
});

describe("isEmptyArray", () => {
  describe("positive cases", () => {
    it("returns true for empty array", () => {
      expect(isEmptyArray([])).toBe(true);
    });
  });
  describe("negative cases", () => {
    it("returns false for array with elements", () => {
      expect(isEmptyArray([1])).toBe(false);
    });
    it("returns false for plain object", () => {
      expect(isEmptyArray({})).toBe(false);
    });
    it("returns false for null", () => {
      expect(isEmptyArray(null)).toBe(false);
    });
  });
});

describe("isRegExp", () => {
  describe("positive cases", () => {
    it("returns true for regexp literal", () => {
      expect(isRegExp(/abc/)).toBe(true);
    });
    it("returns true for new RegExp()", () => {
      expect(isRegExp(/abc/gi)).toBe(true);
    });
  });
  describe("negative cases", () => {
    it("returns false for regexp-like string", () => {
      expect(isRegExp("/abc/")).toBe(false);
    });
    it("returns false for null", () => {
      expect(isRegExp(null)).toBe(false);
    });
  });
});

describe("isMap", () => {
  describe("positive cases", () => {
    it("returns true for empty Map", () => {
      expect(isMap(new Map())).toBe(true);
    });
    it("returns true for Map with entries", () => {
      expect(isMap(new Map([["a", 1]]))).toBe(true);
    });
  });
  describe("negative cases", () => {
    it("returns false for plain object", () => {
      expect(isMap({})).toBe(false);
    });
    it("returns false for null", () => {
      expect(isMap(null)).toBe(false);
    });
  });
});

describe("isSet", () => {
  describe("positive cases", () => {
    it("returns true for empty Set", () => {
      expect(isSet(new Set())).toBe(true);
    });
    it("returns true for Set with values", () => {
      expect(isSet(new Set([1, 2, 3]))).toBe(true);
    });
  });
  describe("negative cases", () => {
    it("returns false for array", () => {
      expect(isSet([])).toBe(false);
    });
    it("returns false for null", () => {
      expect(isSet(null)).toBe(false);
    });
  });
});

describe("isError", () => {
  describe("positive cases", () => {
    it("returns true for new Error()", () => {
      expect(isError(new Error())).toBe(true);
    });
    it("returns true for TypeError", () => {
      expect(isError(new TypeError("bad type"))).toBe(true);
    });
    it("returns true for RangeError", () => {
      expect(isError(new RangeError())).toBe(true);
    });
  });
  describe("negative cases", () => {
    it("returns false for error-like plain object", () => {
      expect(isError({ message: "oops" })).toBe(false);
    });
    it("returns false for error string", () => {
      expect(isError("error")).toBe(false);
    });
    it("returns false for null", () => {
      expect(isError(null)).toBe(false);
    });
  });
});

describe("isSymbol", () => {
  describe("positive cases", () => {
    it("returns true for Symbol()", () => {
      expect(isSymbol(Symbol())).toBe(true);
    });
    it("returns true for Symbol with description", () => {
      expect(isSymbol(Symbol("desc"))).toBe(true);
    });
  });
  describe("negative cases", () => {
    it("returns false for string", () => {
      expect(isSymbol("symbol")).toBe(false);
    });
    it("returns false for null", () => {
      expect(isSymbol(null)).toBe(false);
    });
    it("returns false for number", () => {
      expect(isSymbol(42)).toBe(false);
    });
  });
});
