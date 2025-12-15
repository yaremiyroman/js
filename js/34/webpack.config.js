const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ESLintPligin = require('eslint-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env, argv) => {
    const isProd = argv.mode === 'production';

    console.log(' >>>>> ', isProd ? 'production' : 'development');
    return {
        mode: isProd ? 'production' : 'development',
        entry: 'src/index.tsx',
        output: {
            filename: 'bundle.[contenthash].js',
            path: path.resolve(__dirname, 'dist'),
            clean: true,
            assetModuleFilename: 'images/[name].[hash][ext]'
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.jsx'],
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'WEBPACK TITLE HERE',
                template: 'src/index.html',
                inject: 'body',
            }),
            new MiniCssExtractPlugin(),
            new ESLintPligin({
                extensions: ['ts', 'js', 'tsx'],
                failOnError: false,
            }),
            ...(process.env.ANALYZE === 'true' ? [new BundleAnalyzerPlugin()] : []),
        ],
        module: {
            rules: [
                {
                    test: /\.(sa|sc|c)ss$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader'
                    ],
                },
                {
                    test: /\.(js|jsx)?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react'
                            ]
                        }
                    }
                },
                {
                    test: /\.(ts|tsx)?$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    '@babel/preset-env',
                                    '@babel/preset-typescript',
                                    '@babel/preset-react'
                                ]
                            }
                        },
                        'ts-loader',
                    ]
                },
                {
                    test: /\.(png|jpg|jpeg|svg|webp)$/,
                    type: 'asset',
                    parser: {
                        dataUrlCondition: {
                            maxSize: 8 * 1024, // 8kb 8184bites
                        },
                    },
                    use: [
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                mozjpeg: {
                                    progressive: true,
                                    quality: 65,
                                },
                                pngquant: {
                                    quality: [0.65, 0.90],
                                    speed: 4,
                                },
                                webp: {
                                    quality: 75,
                                },
                            },
                        },
                    ],
                }
            ],
        },
        optimization: {
            minimizer: [
                new CssMinimizerPlugin(),
            ],
            minimize: true,
        },
        devServer: !isProd ? {
            static: {
                directory: path.join(__dirname, 'dist'),
            },
            hot: true,
            port: 9000,
            open: true,
            liveReload: true,
            // compress: true,
        } : undefined,
    };
}
