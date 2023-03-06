import { Config } from '@stencil/core';
import {angularOutputTarget} from "@stencil/angular-output-target";
import {vueOutputTarget} from "@stencil/vue-output-target";

export const config: Config = {
  namespace: 'bs-web-component',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: 'bs-web-component',
      directivesProxyFile: '../bs-web-component-ng/projects/bs-web-component-ng/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../bs-web-component-ng/projects/bs-web-component-ng/src/lib/stencil-generated/index.ts',
    }),
    vueOutputTarget({
      componentCorePackage: 'bs-web-component',
      proxiesFile: '../bs-web-component-vue/lib/components.ts',
    }),
  ],
};
