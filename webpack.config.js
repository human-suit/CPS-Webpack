const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

//в каком режиме сборки находимся!
const isDev = process.env.NODE_ENV === 'development'

const cssLoaders = (extra) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader
    },
    'css-loader'
  ]

  if (extra) {
    loaders.push(extra)
  }

  return loaders
}

module.exports = {
  // Входной файл
  entry: {
    main: ['./src/js/index.js']
  },
  // Выходной файл
  output: {
    filename: './js/bundle.js'
  },
  devServer: {
    port: 4200,
    hot: isDev,
    static: {
      directory: path.join(__dirname, './'),
      serveIndex: true
    }
  },
  // Source maps для удобства отладки
  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.html$/i,
        use: ['html-loader']
      },
      // Транспилируем js с babel
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: cssLoaders()
      },
      // Компилируем SCSS в CSS
      {
        test: /\.s[ac]ss$/i,
        use: cssLoaders('sass-loader', 'postcss-loader') // parse CSS and add vendor prefixes to CSS rules
      },

      // Подключаем шрифты из css
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        type: 'asset/resource'
      },

      // Подключаем картинки из css
      {
        test: /\.(svg|png|jpg|jpeg|webp)$/,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    // Подключаем файл html, стили и скрипты встроятся автоматически
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false
      }
    }),

    // Кладем стили в отдельный файлик
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),

    // Копируем картинки
    new CopyWebpackPlugin([
      {
        from: './src/source',
        to: 'img'
      },
      {
        from: './src/source/svg',
        to: 'img/svg'
      }
    ])
  ]
}
