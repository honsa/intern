import { join } from 'path';
import { Configuration } from 'webpack';

const mode =
  process.env['NODE_ENV'] === 'production' ||
  process.env['INTERN_BUILD'] === 'release'
    ? 'production'
    : 'development';

const common: Configuration = {
  mode,
  module: {
    rules: [
      {
        test: /@theintern\/common/,
        use: 'umd-compat-loader'
      },
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader']
      },
      {
        test: /\.ts/,
        use: {
          loader: 'ts-loader',
          options: {
            silent: true,
            onlyCompileBundledFiles: true,
            configFile: join(__dirname, 'tsconfig.json'),
            compilerOptions: {
              module: 'esnext'
            }
          }
        }
      }
    ],
    noParse: /benchmark[\\\/]benchmark.js/
  },
  performance: {
    // Hides a warning about large bundles.
    hints: false
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  stats: {
    assets: false,
    entrypoints: true,
    errors: true,
    hash: false,
    modules: false,
    version: false,
    warnings: true
  }
};

module.exports = [
  {
    ...common,
    entry: getEntries(),
    output: {
      filename: '[name].js',
      path: join(__dirname, '..', '_tests', 'src', 'browser')
    }
  }
];

function getEntries() {
  return {
    intern: join(__dirname, '..', 'src', 'browser', 'intern.ts'),
    remote: join(__dirname, '..', 'src', 'browser', 'remote.ts'),
    config: join(__dirname, '..', 'src', 'browser', 'config.ts')
  };
}
