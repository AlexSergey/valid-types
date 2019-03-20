const { compile } = require('rocket-starter');

compile({
    src: './src/index',
    library: 'ValidTypes',
    dist: './dist',
    html: false
});
