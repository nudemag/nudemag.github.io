!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.formToObject=e()}}(function(){return function e(t,n,o){function r(f,u){if(!n[f]){if(!t[f]){var l="function"==typeof require&&require;if(!u&&l)return l(f,!0);if(i)return i(f,!0);var d=new Error("Cannot find module '"+f+"'");throw d.code="MODULE_NOT_FOUND",d}var c=n[f]={exports:{}};t[f][0].call(c.exports,function(e){var n=t[f][1][e];return r(n?n:e)},c,c.exports,e,t,n,o)}return n[f].exports}for(var i="function"==typeof require&&require,f=0;f<o.length;f++)r(o[f]);return r}({1:[function(e,t,n){t.exports=function(e){var t=Object.create(null);return Array.prototype.slice.call(e.querySelectorAll("input:not(:disabled), textarea:not(:disabled), select:not(:disabled)")).forEach(function(e){var n=e.name;n&&(["file","reset","submit","button"].indexOf(e.type)>-1||["checkbox","radio"].indexOf(e.type)>-1&&!e.checked||(/\[\]$/.test(n)&&(n=n.slice(0,-2),void 0===t[n]&&(t[n]=[])),void 0===t[n]?t[n]=e.value:"[object Array]"===Object.prototype.toString.call(t[n])?t[n].push(e.value):t[n]=[t[n],e.value]))}),t}},{}]},{},[1])(1)});