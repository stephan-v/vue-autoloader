# vue-autoloader

Register global Vue components dynamically.

This package registers Vue components without you manually having to specify their imports or having to set up `Vue.component`
declarations.

## Requirements

For this to work you ned to add a resolve alias to your Webpack configuration. Due to the fact that this package
uses `require.context`, the filepath to the directory which holds your components directory
needs to be known at build time.

### Step 1

Add the following alias to your Webpack configuration: 

(in this example `resources/assets/js` can of course be substituted for your own resource directory.)

```
alias: {
    '@': 'resources/assets/js'
}
```

This is the directory which holds your JavaScript assets.

### Step 2

Make sure the JavaScript assets directory you provided in step 1 contains a `components` directory which houses all the
components you want to have "auto-loaded".

For more information about Webpack Aliases:


https://webpack.js.org/configuration/resolve/
