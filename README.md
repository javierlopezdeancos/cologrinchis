!["cologrinchis logo"](assets/logo.png)

Set label colors in your chrome console logs.

## Activity
![GitHub issues](https://img.shields.io/github/issues-raw/javierlopezdeancos/cologrinchis?style=flat)
![GitHub all releases](https://img.shields.io/github/downloads/javierlopezdeancos/cologrinchis/total)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/javierlopezdeancos/cologrinchis/publish-cologrinchis-in-npm-on-release)
![npm](https://img.shields.io/npm/v/cologrinchis)

## Use it

### Install

```shell
npm install cologrinchis --save-dev
```

### Import

Import the module from your node modules with the namespace as you want:

```javascript
import * as clr from 'cologrinchis';
```

### Use

```javascript
clr.warn('custom warn label', 'This is a warning');
clr.info('custom info label', 'This is an info');
clr.log('custom log label', 'This is a log');
```

## Example

![example result in console](./assets/example.png)

