const globalComponents = {
    install(Vue) {
        const components = require.context('@/components', true, /[A-Z]\w+\.vue$/);

        components.keys().forEach((path) => {
            const component = components(path);
            // Grab the fileName for the component(ComponentName.vue).
            const fileName = path.split('/').pop();

            // Strip the extension(ComponentName).
            const componentName = fileName.slice(0, -4);

            // Dynamically register the component.
            Vue.component(componentName, component);
        });
    }
};

export default globalComponents;
