# vue-autoloader

Register global Vue component dynamically.

This package registers Vue components without manually having to specify their imports or having to set up `Vue.component`
declarations.

## Requirements

Add a resolve alias to your Webpack configuration. Due to the fact that this package
uses require.context, the filepath to the directory which holds your component directory
needs to be known at build time.

### Step 1

Add the following to your Webpack configuration: 

in this example `resources/assets/js` can of course be substituted for your own resource directory.

```
alias: {
    '@': 'resources/assets/js'
}
```

### Step 2

Make sure the alias directory you provided in step 1 contains a `components` directory which houses all the
components you want to have "auto-loaded".


https://webpack.js.org/configuration/resolve/
