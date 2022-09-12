"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SL_NOT_INITIALIZED = 'Smartlook client is not initialized.';
exports.default = {
    init: function (key, params) {
        var w = window;
        if (w.smartlook) {
            console.warn('Smartlook client is already initialized.');
            return false;
        }
        w.smartlook = function () {
            w.smartlook.api.push(arguments);
        };
        var _a = params !== null && params !== void 0 ? params : {}, _b = _a.region, region = _b === void 0 ? 'eu' : _b, _c = _a.cookies, cookies = _c === void 0 ? true : _c, relayProxyUrl = _a.relayProxyUrl;
        w.smartlook.api = [];
        var initParams = { region: region, cookies: cookies };
        var src = 'https://web-sdk.smartlook.com/recorder.js';
        if (relayProxyUrl) {
            try {
                var constructedUrl = new URL('/recorder.js', relayProxyUrl);
                initParams.host = constructedUrl.host;
                src = constructedUrl.toString();
            }
            catch (e) {
                console.error('Smartlook init param `relayProxyUrl` is not valid. Please provide full url like `https://my-proxy-domain.com/`.');
                return false;
            }
        }
        w.smartlook('init', key, initParams);
        var head = window.document.getElementsByTagName('head')[0];
        var script = window.document.createElement('script');
        script.async = true;
        script.type = 'text/javascript';
        script.crossOrigin = 'anonymous';
        script.src = src;
        head.appendChild(script);
        return true;
    },
    identify: function (userId, props) {
        var w = window;
        if (!w.smartlook) {
            console.warn(SL_NOT_INITIALIZED);
            return false;
        }
        if (!userId) {
            console.warn('Smartlook - User ID must be provided');
            return false;
        }
        w.smartlook('identify', userId, props);
        return true;
    },
    anonymize: function () {
        var w = window;
        if (!w.smartlook) {
            console.warn(SL_NOT_INITIALIZED);
            return false;
        }
        w.smartlook('anonymize');
        return true;
    },
    track: function (eventName, props) {
        var w = window;
        if (!w.smartlook) {
            console.warn(SL_NOT_INITIALIZED);
            return false;
        }
        w.smartlook('track', eventName, props);
        return true;
    },
    disable: function () {
        var w = window;
        if (!w.smartlook) {
            console.warn(SL_NOT_INITIALIZED);
            return false;
        }
        w.smartlook('disable');
        return true;
    },
    record: function (params) {
        var w = window;
        if (!w.smartlook) {
            console.warn(SL_NOT_INITIALIZED);
            return false;
        }
        w.smartlook('record', params);
        return true;
    },
    getData: function (callback) {
        var w = window;
        if (!w.smartlook) {
            console.warn(SL_NOT_INITIALIZED);
            return false;
        }
        w.smartlook(callback);
        return true;
    },
    restart: function () {
        var w = window;
        if (!w.smartlook) {
            console.warn(SL_NOT_INITIALIZED);
            return false;
        }
        w.smartlook('restart');
        return true;
    },
    pause: function () {
        var w = window;
        if (!w.smartlook) {
            console.warn(SL_NOT_INITIALIZED);
            return false;
        }
        w.smartlook('pause');
        return true;
    },
    resume: function () {
        var w = window;
        if (!w.smartlook) {
            console.warn(SL_NOT_INITIALIZED);
            return false;
        }
        w.smartlook('resume');
        return true;
    },
    error: function (error) {
        var w = window;
        if (!w.smartlook) {
            console.warn(SL_NOT_INITIALIZED);
            return false;
        }
        w.smartlook('error', error);
        return true;
    },
    navigation: function (locationOrPath) {
        var w = window;
        if (!w.smartlook) {
            console.warn(SL_NOT_INITIALIZED);
            return false;
        }
        w.smartlook('navigation', locationOrPath);
        return true;
    },
    properties: function (properties) {
        var w = window;
        if (!w.smartlook) {
            console.warn(SL_NOT_INITIALIZED);
            return false;
        }
        w.smartlook('properties', properties);
        return true;
    },
    initialized: function () {
        var w = window;
        return !!w.smartlook;
    },
    get playUrl() {
        var w = window;
        return w.smartlook.playUrl;
    },
    get sessionId() {
        var w = window;
        return w.smartlook.sessionId;
    },
    get visitorId() {
        var w = window;
        return w.smartlook.visitorId;
    },
    get recordId() {
        var w = window;
        return w.smartlook.recordId;
    },
    get key() {
        var w = window;
        return w.smartlook.key;
    },
    get version() {
        var w = window;
        return w.smartlook.version;
    },
};
//# sourceMappingURL=index.js.map