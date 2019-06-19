const path = require('path');
const sassTrue = require('sass-true');
const sass = require('sass');

const file = path.resolve(__dirname, 'class-names.spec.scss');
const includePaths = [__dirname, path.resolve(__dirname, '../src')];

describe('node-sass', () => {
  sassTrue.runSass({ file, includePaths }, { describe, it });
});

describe('dart-sass', () => {
  sassTrue.runSass({ file, includePaths }, { sass, describe, it });
});
