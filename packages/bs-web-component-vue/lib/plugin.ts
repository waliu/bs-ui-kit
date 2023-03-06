
import { Plugin } from 'vue';
import { applyPolyfills, defineCustomElements } from 'bs-web-component/loader';

export const ComponentLibrary: Plugin = {
    async install() {
        applyPolyfills().then(() => {
            defineCustomElements();
        });
    },
};