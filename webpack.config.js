const webpack = require('webpack');
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')


module.exports = () => {
    var config = {};

    config.entry = {
        library: './client/app/library.js',
        app: './client/app/index.js'       
    };

    config.output = {
        path: path.resolve(__dirname, './client/public'),
        publicPath: '/',
        filename: '[name].[hash].js'
    };

    config.devtool = 'cheap-eval-source-map';

    config.module = {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },

            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            minimize: {
                                safe: true
                            }
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            autoprefixer: {
                                browsers: ["last 2 versions"]
                            },
                            plugins: () => [
                                require('autoprefixer')
                            ]
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {}
                    }
                ]
            },

            {
                test: /\.(png|jpg|gif|svg|)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }

        ]
    };

    config.plugins = [
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[id].css"
        }),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'client/app', 'index.html'),
        }),

		new CopyWebpackPlugin([{
            from: './client/app/features',
            to: './',
            ignore: [ '*.js', '*.scss' ] 
        }]),

        new CleanWebpackPlugin(['./client/public']),


    ]

    return config;
    
}