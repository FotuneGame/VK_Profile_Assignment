import path from "path";
import webpack from 'webpack';
import CopyPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import type {Configuration as DevServerConfiguration} from "webpack-dev-server";



interface IEnvVars{
    mode: "development" |  "production"
}
 


export default (env: IEnvVars) => {
    const  isDev = env.mode ==='development';



    const config: webpack.Configuration = {
        mode: env.mode ?? "development",
        entry: {
            app: path.join(__dirname, 'src', 'index.tsx')
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js']
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist')
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'public', 'index.html')
            }),
            new CopyPlugin({
                patterns: [
                    { 
                        from: path.join(__dirname, 'public/static'),
                        to: path.resolve(__dirname, 'dist/static')
                    },
                ],
            }),
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css',
            })
        ],
        module: {
            rules:[
                {
                    test: /\.(png|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.styl$/,
                    use: [
                        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                modules: {
                                    localIdentName: isDev ? '[path].[name]__[local]' : '[name].[hash:base64:8]',
                                }
                            },
                        },
                      'stylus-loader',
                    ],
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: '/node_modules/'
                },
                {
                    test: /\.svg$/i,
                    issuer: /\.[jt]sx?$/,
                    use: [
                        {
                            loader: '@svgr/webpack',
                            options: {
                                icon: true,
                            }
                        }
                    ],
                }
            ]
        },
        devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',
        devServer: {
            port: 3000,
            open: true,
            historyApiFallback:true,
            hot:true
        } as DevServerConfiguration
    }



    return config;
}