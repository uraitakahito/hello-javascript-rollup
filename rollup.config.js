import defaultConfig from './rollup.default.config';
import debugConfig from './rollup.debug.config';

export default (commandLineArgs) => {
  // If the command line argument --config-debug | --configDebug is set, use the debug configuration
  if (commandLineArgs.configDebug === true) {
    return debugConfig;
  }
  return defaultConfig;
};
