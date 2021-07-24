"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.info = exports.warn = void 0;
const warnColors = {
    background: 'yellow',
    text: 'black'
};
const infoColors = {
    background: 'yellow',
    text: 'black'
};
const logColors = {
    background: '#e2e2e2',
    text: 'black'
};
const warn = (label, message) => {
    console.warn('%c' + label, `background-color: ${warnColors.background}; color: ${warnColors.text}; padding: 5px; font-weight: bold;`, message);
};
exports.warn = warn;
const info = (label, message) => {
    console.info('%c' + label, `background-color: ${infoColors.background}; color: ${infoColors.text}; padding: 5px; font-weight: bold;`, message);
};
exports.info = info;
const log = (label, message) => {
    console.log('%c' + label, `background-color: ${logColors.background}; color: ${logColors.text}; padding: 5px; font-weight: bold;`, message);
};
exports.log = log;
//# sourceMappingURL=index.js.map