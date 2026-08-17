import type { Plugin } from '@docusaurus/types';

/**
 * Pre-bundled rolldown output contains a dynamic `require` shim (`__require`).
 * Webpack cannot statically analyze it; ignoreWarnings suppress the noise.
 */

type WebpackWarning = { message?: string; module?: { resource?: string } };

function isSurfyBundleCriticalDependency(warning: WebpackWarning): boolean {
  return (
    !!warning.message?.includes('Critical dependency') &&
    !!warning.module?.resource?.replace(/\\/g, '/').includes('/surfy/index.js')
  );
}

export function surfyBundleWebpackPlugin(): Plugin {
  return {
    name: 'docusaurus-surfy-bundle-webpack-plugin',
    configureWebpack() {
      return {
        ignoreWarnings: [isSurfyBundleCriticalDependency],
      };
    },
  };
}
