# vue-autoloader

Register global Vue component dynamically.

## Requirements

Add a resolve alias to your Webpack configuration. Due to the fact that this package
uses require.context, the filepath to the directory which holds your component directory
needs to be known at build time.

https://webpack.js.org/configuration/resolve/

```
alias: {
    '@': 'resources/assets/js'
}
```
