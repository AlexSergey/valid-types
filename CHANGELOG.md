# Changelog

## [3.0.0] - 2025-05-24

### Breaking Changes

- **`isAsync`** — previously returned `true` for `Promise` instances (`cb instanceof Promise`), which was incorrect. Now correctly detects async functions via `Object.prototype.toString`. Migrate: use the new `isPromise` for Promise instance checks.
- **`isNan`** — previously used the global `isNaN()` which coerces its argument (e.g. `isNaN("foo")` → `true`). Now returns `true` only for actual `NaN` values of type `number`.
- **`isArguments`** — previously used a fragile `length`-property heuristic that matched any object with a numeric `length` field. Now uses `Object.prototype.toString.call(obj) === '[object Arguments]'` for reliable detection.

### New Functions

- **`isPromise(value)`** — returns `true` for `Promise` instances. Replaces the old behavior of `isAsync`.
- **`isRegExp(value)`** — returns `true` for `RegExp` instances.
- **`isMap(value)`** — returns `true` for `Map` instances.
- **`isSet(value)`** — returns `true` for `Set` instances.
- **`isError(value)`** — returns `true` for `Error` and all its subclasses (`TypeError`, `RangeError`, etc.).
- **`isSymbol(value)`** — returns `true` for symbol primitives.

### Bug Fixes

- **`isUrl`** — replaced an outdated and incomplete regex with the native `URL` constructor. Now correctly handles `localhost`, ports, unicode query params, and subdomains. Rejects `javascript:` and other non-http/https/ftp protocols.
- **`isBase64`** — fixed a loose check that matched any string containing the word `base64`. Now requires the proper data URL format: `data:<mime>;base64,<data>`.
- **`isClass`** — fixed detection breaking in minified builds. Previously used `fnString.indexOf('class') === 0` which fails when code is minified. Now uses `Function.prototype.toString.call()` and a regex test `/^\s*class[\s{]/`.
- **`isType`** — `Promise`, `RegExp`, `Map`, `Set`, and `Error` objects were previously all returned as `'object'`. Each now returns its own type string: `'promise'`, `'regexp'`, `'map'`, `'set'`, `'error'`.

### TypeScript

- All function parameters changed from `any` to `unknown`.
- Type guard return types added where applicable: `obj is string`, `obj is number`, `obj is boolean`, `obj is unknown[]`, `obj is Date`, `obj is null`, `obj is undefined`, `obj is symbol`, `obj is RegExp`, `obj is Map`, `obj is Set`, `obj is Error`, `obj is Promise<unknown>`, `obj is (...args: unknown[]) => unknown`.
- `isType` is now exported as a public API.

### Other

- Added 154 unit tests covering all exported functions with positive and negative cases.
