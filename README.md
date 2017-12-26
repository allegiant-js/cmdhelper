# cmdhelper

Simple command line argument parser library.

	const cmdHelper = require('@allegiant/cmdhelper');
	const SETTINGS = cmdHelper.process(params => {
	    return {
	        host: params.get('host') || '0.0.0.0',
	        port: params.get('port') || 80
	    };
	});

SETTINGS will now hold the two properties, 'host' and 'port'. These are available to the command line as --host "hostname" and --port "port number" respectively.


#### Note
This is a preliminary release, api breakage may happen.


### Copyright & License

Copyright &copy; 2017 Allegiant. Distributed under the terms of the MIT License, see [LICENSE](https://github.com/allegiant-js/cmdhelper/blob/master/LICENSE)

Availble via [npm](https://www.npmjs.com/org/allegiant/cmdhelper) or [github](https://github.com/allegiant-js/cmdhelper).