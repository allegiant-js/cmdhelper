const cmdHelper = require('../index');
const SETTINGS = cmdHelper.process(params => {
  return {
      host: params.get('host') || '0.0.0.0',
      port: params.get('port') || 80
  };
});

console.log("Settings: ", SETTINGS); // eslint-disable-line