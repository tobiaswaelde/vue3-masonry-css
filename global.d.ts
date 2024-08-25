import { Masonry } from 'vue3-masonry-css';
import type { Plugin } from 'vue';

declare const Vue3Masonry: Plugin;
export default Vue3Masonry;

declare global {
  interface Window {
    // masonry for CDN compatibility
    Vue3Masonry?: typeof Vue3Masonry;
  }
}

declare module 'vue' {
  export interface GlobalComponents {
    Vue3Masonry: typeof Vue3Masonry;
  }
}
