"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.info = exports.warn = void 0;
var warnColors = {
    background: 'yellow',
    text: 'black'
};
var infoColors = {
    background: 'blue',
    text: 'white'
};
var logColors = {
    background: '#e2e2e2',
    text: 'black'
};
var warn = function (label, message) {
    console.warn('%c' + label, "background-color: " + warnColors.background + "; color: " + warnColors.text + "; padding: 5px; font-weight: bold;", message);
};
exports.warn = warn;
var info = function (label, message) {
    console.info('%c' + label, "background-color: " + infoColors.background + "; color: " + infoColors.text + "; padding: 5px; font-weight: bold;", message);
};
exports.info = info;
var log = function (label, message) {
    console.log('%c' + label, "background-color: " + logColors.background + "; color: " + logColors.text + "; padding: 5px; font-weight: bold;", message);
};
exports.log = log;
