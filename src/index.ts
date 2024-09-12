import { Plugin } from 'vue';
import { MasonryPluginOptions } from './types/plugin-options';
import Masonry from './core/masonry.vue';

const Vue3Masonry: Plugin = {
  install(app, options?: MasonryPluginOptions) {
    app.component(options?.name ?? 'masonry', Masonry);
  },
};

// CDN compatibility
if (typeof window !== 'undefined') {
  (window as any).Vue3Masonry = Vue3Masonry;
}

export default Vue3Masonry;
export { Masonry };
export * from './types';
export * from './core';
