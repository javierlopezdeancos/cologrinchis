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
export var warn = function (label, message) {
    console.warn('%c' + label, "background-color: " + warnColors.background + "; color: " + warnColors.text + "; padding: 5px; font-weight: bold;", message);
};
export var info = function (label, message) {
    console.info('%c' + label, "background-color: " + infoColors.background + "; color: " + infoColors.text + "; padding: 5px; font-weight: bold;", message);
};
export var log = function (label, message) {
    console.log('%c' + label, "background-color: " + logColors.background + "; color: " + logColors.text + "; padding: 5px; font-weight: bold;", message);
};
