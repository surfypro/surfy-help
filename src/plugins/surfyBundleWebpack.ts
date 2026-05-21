import type { Plugin } from '@docusaurus/types';
import type { Configuration } from 'webpack';

/**
 * Pre-bundled rolldown output contains a dynamic `require` shim (`__require`).
 * Webpack cannot statically analyze it; ignoreWarnings suppress the noise.
 */

function isSurfyBundleCriticalDependency(warning: { message?: string; module?: { resource?: string } }): boolean {
  return (
    !!warning.message?.includes('Critical dependency') &&
    !!warning.module?.resource?.replace(/\\/g, '/').includes('/surfy/index.js')
  );
}

export function surfyBundleWebpackPlugin(): Plugin {
  return {
    name: 'docusaurus-surfy-bundle-webpack-plugin',
    configureWebpack(): Configuration {
      return {
        ignoreWarnings: [isSurfyBundleCriticalDependency],
      };
    },
  };
}
