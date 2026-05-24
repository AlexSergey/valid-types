# valid-types

A lightweight, zero-dependency JavaScript/TypeScript type-checking utility. Provides reliable type guards for all built-in JS types, including edge cases like `NaN`, `arguments`, async functions, and ES6+ types (`Map`, `Set`, `Promise`, `Symbol`, etc.).

## Installation

```bash
npm install valid-types
# or
yarn add valid-types
```

## Usage

```ts
import { isString, isNumber, isArray } from 'valid-types';

isString('hello');   // true
isNumber(42);        // true
isArray([1, 2, 3]);  // true
```

CommonJS is also supported:

```js
const { isString } = require('valid-types');
```

## API

### Primitives

| Function | Description | Example |
|---|---|---|
| `isString(value)` | `true` for string primitives | `isString('hi')` → `true` |
| `isNumber(value)` | `true` for finite numbers (excludes `NaN`) | `isNumber(NaN)` → `false` |
| `isBoolean(value)` | `true` for `true` / `false` | `isBoolean(1)` → `false` |
| `isNull(value)` | `true` only for `null` | `isNull(null)` → `true` |
| `isUndefined(value)` | `true` only for `undefined` | `isUndefined(undefined)` → `true` |
| `isDefined(value)` | `true` for anything except `undefined` | `isDefined(null)` → `true` |
| `isNan(value)` | `true` only for `NaN` (not string `"NaN"`) | `isNan(NaN)` → `true` |
| `isSymbol(value)` | `true` for symbol primitives | `isSymbol(Symbol())` → `true` |

### Objects

| Function | Description | Example |
|---|---|---|
| `isObject(value)` | `true` for plain objects only (not `null`, `Array`, `Date`, etc.) | `isObject({})` → `true` |
| `isArray(value)` | `true` for arrays | `isArray([])` → `true` |
| `isDate(value)` | `true` for `Date` instances | `isDate(new Date())` → `true` |
| `isRegExp(value)` | `true` for `RegExp` instances | `isRegExp(/abc/)` → `true` |
| `isMap(value)` | `true` for `Map` instances | `isMap(new Map())` → `true` |
| `isSet(value)` | `true` for `Set` instances | `isSet(new Set())` → `true` |
| `isError(value)` | `true` for `Error` and subclasses | `isError(new TypeError())` → `true` |
| `isArguments(value)` | `true` for `arguments` objects (not array-likes) | — |

### Functions

| Function | Description | Example |
|---|---|---|
| `isFunction(value)` | `true` for regular and arrow functions only | `isFunction(() => {})` → `true` |
| `isClass(value)` | `true` for ES6 class declarations | `isClass(class Foo {})` → `true` |
| `isAsync(value)` | `true` for async functions (not Promise instances) | `isAsync(async () => {})` → `true` |
| `isPromise(value)` | `true` for `Promise` instances | `isPromise(Promise.resolve())` → `true` |

### Strings & URLs

| Function | Description | Example |
|---|---|---|
| `isUrl(value)` | `true` for valid `http:`, `https:`, or `ftp:` URLs | `isUrl('https://example.com')` → `true` |
| `isBase64(value)` | `true` for base64 data URLs (`data:...;base64,...`) | `isBase64('data:image/png;base64,abc')` → `true` |

### Empty checks

| Function | Description | Example |
|---|---|---|
| `isEmpty(value)` | `true` for `''`, `0`, `'0'`, `null`, `false`, `undefined` | `isEmpty('')` → `true` |
| `isEmptyObject(value)` | `true` for plain objects with no own keys | `isEmptyObject({})` → `true` |
| `isEmptyArray(value)` | `true` for arrays with no elements | `isEmptyArray([])` → `true` |

### Generic

| Function | Returns | Example |
|---|---|---|
| `isType(value)` | String type name | `isType(new Map())` → `'map'` |

Possible return values: `'string'`, `'number'`, `'NaN'`, `'boolean'`, `'undefined'`, `'null'`, `'symbol'`, `'object'`, `'array'`, `'date'`, `'regexp'`, `'map'`, `'set'`, `'error'`, `'promise'`, `'function'`, `'class'`, `'async'`, `'arguments'`, `'dom'`, `'document'`

## TypeScript

All functions ship with full TypeScript support. Where possible they are typed as proper type guards:

```ts
function processInput(value: unknown) {
  if (isString(value)) {
    // value is string here
    console.log(value.toUpperCase());
  }

  if (isArray(value)) {
    // value is unknown[] here
    value.forEach(console.log);
  }
}
```

## Development

```bash
# run tests
npm test

# build
npm run build

# lint
npm run lint

# format
npm run format
```

## License

MIT
