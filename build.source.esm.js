const { tsSourceCompiler } = require('rocket-starter');

tsSourceCompiler({
    dist: './lib/esm',
    tsconfig: './tsconfig.esm.json'
});
