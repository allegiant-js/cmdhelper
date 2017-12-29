# cmdhelper

> Simple command line argument parser library.
>> There be 🐲 here! The API and functionality are being cemented, anything before a 1.0.0 release is subject to change.

[![Npm Version](https://img.shields.io/npm/v/@allegiant/cmdhelper.svg)](https://www.npmjs.com/package/@allegiant/cmdhelper)
[![Build Status](https://travis-ci.org/allegiant-js/cmdhelper.svg?branch=master)](https://travis-ci.org/allegiant-js/cmdhelper.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/allegiant-js/cmdhelper/badge.svg?branch=master)](https://coveralls.io/github/allegiant-js/cmdhelper?branch=master)


## Installation

```
npm install @allegiant/cmdhelper --save
```

## Usage
```js
const cmdHelper = require('@allegiant/cmdhelper');
const SETTINGS = cmdHelper.process(params => {
  return {
      host: params.get('host') || '0.0.0.0',
      port: params.get('port') || 80
  };
});
```

SETTINGS will now hold the two properties, 'host' and 'port'. These are available to the command line as --host "hostname" and --port "port number" respectively.


### Copyright & License

Copyright &copy; 2017 Allegiant. Distributed under the terms of the MIT License, see [LICENSE](https://github.com/allegiant-js/cmdhelper/blob/master/LICENSE)

Availble via [npm](https://www.npmjs.com/package/@allegiant/cmdhelper) or [github](https://github.com/allegiant-js/cmdhelper).