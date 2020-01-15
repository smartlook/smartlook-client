"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SL_NOT_INITIALIZED = "Smartlook client is not initialized.";
exports.default = {
    init: function (key) {
        var w = window;
        if (w.smartlook) {
            throw "Smartlook client is already initialized.";
        }
        w.smartlook = function () {
            w.smartlook.api.push(arguments);
        };
        w.smartlook.api = [];
        w.smartlook("init", key);
        var head = window.document.getElementsByTagName("head")[0];
        var script = window.document.createElement("script");
        script.async = true;
        script.type = "text/javascript";
        script.charset = "utf-8";
        script.crossOrigin = "anonymous";
        script.src = "https://rec.smartlook.com/recorder.js";
        head.appendChild(script);
    },
    identify: function (userId, props) {
        var w = window;
        if (!w.smartlook) {
            throw SL_NOT_INITIALIZED;
        }
        if (!userId) {
            throw "Smartlook - User ID must be provided";
        }
        w.smartlook("identify", userId, props);
    },
    anonymize: function () {
        var w = window;
        if (!w.smartlook) {
            throw SL_NOT_INITIALIZED;
        }
        w.smartlook("anonymize");
    },
    track: function (eventName, props) {
        var w = window;
        if (!w.smartlook) {
            throw SL_NOT_INITIALIZED;
        }
        w.smartlook("track", eventName, props);
    },
    disable: function () {
        var w = window;
        if (!w.smartlook) {
            throw SL_NOT_INITIALIZED;
        }
        w.smartlook("disable");
    },
    consentForms: function (consent) {
        var w = window;
        if (!w.smartlook) {
            throw SL_NOT_INITIALIZED;
        }
        w.smartlook("consentForms", consent);
    },
    consentIP: function (consent) {
        var w = window;
        if (!w.smartlook) {
            throw SL_NOT_INITIALIZED;
        }
        w.smartlook("consentIP", consent);
    },
    consentAPI: function (consent) {
        var w = window;
        if (!w.smartlook) {
            throw SL_NOT_INITIALIZED;
        }
        w.smartlook("consentAPI", consent);
    },
    getData: function (callback) {
        var w = window;
        if (!w.smartlook) {
            throw SL_NOT_INITIALIZED;
        }
        w.smartlook(callback);
    },
    restart: function () {
        var w = window;
        if (!w.smartlook) {
            throw SL_NOT_INITIALIZED;
        }
        w.smartlook("restart");
    },
    pause: function () {
        var w = window;
        if (!w.smartlook) {
            throw SL_NOT_INITIALIZED;
        }
        w.smartlook("pause");
    },
    resume: function () {
        var w = window;
        if (!w.smartlook) {
            throw SL_NOT_INITIALIZED;
        }
        w.smartlook("resume");
    },
    error: function (error) {
        var w = window;
        if (!w.smartlook) {
            throw SL_NOT_INITIALIZED;
        }
        w.smartlook("error", error);
    }
};
//# sourceMappingURL=index.js.map