'use strict';

module.exports = {
    context: __dirname,
    entry: {
        'react-basic-ui.js': './pack.js'
    },

    output: {
        path: __dirname + '/dist/',
        filename: '[name]',
        libraryTarget: 'umd',
        library: 'react-basic-ui'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            }
        ]
    },
     externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        'prop-types': {
            root: 'PropTypes',
            commonjs2: 'prop-types',
            commonjs: 'prop-types',
            amd: 'prop-types'
        }
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: []
};
