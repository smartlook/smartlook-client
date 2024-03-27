const SL_NOT_INITIALIZED = 'Smartlook client is not initialized.';
export default {
    init: function (key, params) {
        const w = window;
        if (w.smartlook) {
            console.warn('Smartlook client is already initialized.');
            return false;
        }
        w.smartlook = function () {
            w.smartlook.api.push(arguments);
        };
        w.smartlook.api = [];
        const initParams = params;
        let src = 'https://web-sdk.smartlook.com/recorder.js';
        if (initParams === null || initParams === void 0 ? void 0 : initParams.relayProxyUrl) {
            try {
                const constructedUrl = new URL('/recorder.js', initParams.relayProxyUrl);
                initParams.host = constructedUrl.host;
                src = constructedUrl.toString();
            }
            catch (e) {
                console.error('Smartlook init param `relayProxyUrl` is not valid. Please provide full url like `https://my-proxy-domain.com/`.');
                return false;
            }
        }
        w.smartlook('init', key, initParams);
        const head = window.document.getElementsByTagName('head')[0];
        const script = window.document.createElement('script');
        script.async = true;
        script.type = 'text/javascript';
        script.crossOrigin = 'anonymous';
        script.src = src;
        head.appendChild(script);
        return true;
    },
    identify: function (userId, props) {
        const w = window;
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
        const w = window;
        if (!w.smartlook) {
            console.warn(SL_NOT_INITIALIZED);
            return false;
        }
        w.smartlook('anonymize');
        return true;
    },
    track: function (eventName, props) {
        const w = window;
        if (!w.smartlook) {
            console.warn(SL_NOT_INITIALIZED);
            return false;
        }
        w.smartlook('track', eventName, props);
        return true;
    },
    disable: function () {
        const w = window;
        if (!w.smartlook) {
            console.warn(SL_NOT_INITIALIZED);
            return false;
        }
        w.smartlook('disable');
        return true;
    },
    record: function (params) {
        const w = window;
        if (!w.smartlook) {
            console.warn(SL_NOT_INITIALIZED);
            return false;
        }
        w.smartlook('record', params);
        return true;
    },
    getData: function (callback) {
        const w = window;
        if (!w.smartlook) {
            console.warn(SL_NOT_INITIALIZED);
            return false;
        }
        w.smartlook(callback);
        return true;
    },
    restart: function () {
        const w = window;
        if (!w.smartlook) {
            console.warn(SL_NOT_INITIALIZED);
            return false;
        }
        w.smartlook('restart');
        return true;
    },
    pause: function () {
        const w = window;
        if (!w.smartlook) {
            console.warn(SL_NOT_INITIALIZED);
            return false;
        }
        w.smartlook('pause');
        return true;
    },
    resume: function () {
        const w = window;
        if (!w.smartlook) {
            console.warn(SL_NOT_INITIALIZED);
            return false;
        }
        w.smartlook('resume');
        return true;
    },
    error: function (error) {
        const w = window;
        if (!w.smartlook) {
            console.warn(SL_NOT_INITIALIZED);
            return false;
        }
        w.smartlook('error', error);
        return true;
    },
    navigation: function (locationOrPath) {
        const w = window;
        if (!w.smartlook) {
            console.warn(SL_NOT_INITIALIZED);
            return false;
        }
        w.smartlook('navigation', locationOrPath);
        return true;
    },
    properties: function (properties) {
        const w = window;
        if (!w.smartlook) {
            console.warn(SL_NOT_INITIALIZED);
            return false;
        }
        w.smartlook('properties', properties);
        return true;
    },
    initialized: function () {
        const w = window;
        return !!w.smartlook;
    },
    get playUrl() {
        const w = window;
        return w.smartlook.playUrl;
    },
    get sessionId() {
        const w = window;
        return w.smartlook.sessionId;
    },
    get visitorId() {
        const w = window;
        return w.smartlook.visitorId;
    },
    get recordId() {
        const w = window;
        return w.smartlook.recordId;
    },
    get key() {
        const w = window;
        return w.smartlook.key;
    },
    get version() {
        const w = window;
        return w.smartlook.version;
    },
};
//# sourceMappingURL=index.js.map