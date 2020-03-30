const { tsSourceCompiler } = require('rocket-starter');

tsSourceCompiler({
    dist: './lib/cjs',
    tsconfig: './tsconfig.cjs.json'
});
