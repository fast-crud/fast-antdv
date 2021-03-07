import {defineAsyncComponent} from 'vue'

const components = {
    input: {
        AInput: '/input/Input.js',
        AInputGroup: '/input/Group.js',
        AInputSearch: '/input/Search.js',
        ATextArea: '/input/TextArea.js',
        AInputPassword: '/input/Password.js'
    }
}
export default {
    install(app) {
        for (let groupKey in components) {
            const group = components[groupKey]
            for (const name in group) {
                const componentPath = group[name]
                const component = defineAsyncComponent(() => {
                    const asyncPath = '/antdv/es' + componentPath
                    return import(/* @vite-ignore */ asyncPath ).then(ret=>{
                        console.log('ret',ret)
                        return ret
                    });
                });
                app.component(name, component)
            }
        }
    }
}
