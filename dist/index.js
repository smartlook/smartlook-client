"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    init: function (key) {
        var w = window;
        if (w.smartlook) {
            throw 'Smartlook client is already initialized.';
        }
        w.smartlook = function () {
            w.smartlook.api.push(arguments);
        };
        w.smartlook.api = [];
        w.smartlook('init', key);
        var head = window.document.getElementsByTagName('head')[0];
        var script = window.document.createElement('script');
        script.async = true;
        script.type = 'text/javascript';
        script.charset = 'utf-8';
        script.src = 'https://rec.smartlook.com/recorder.js';
        head.appendChild(script);
    },
    identify: function (userId, props) {
        var w = window;
        if (!w.smartlook) {
            throw 'Smartlook client is not initialized.';
        }
        if (!userId) {
            throw 'Smartlook - User ID must be provided';
        }
        w.smartlook('identify', userId, props);
    },
    track: function (eventName, props) {
        var w = window;
        if (!w.smartlook) {
            throw 'Smartlook client is not initialized.';
        }
        w.smartlook('track', eventName, props);
    },
    disable: function () {
        var w = window;
        if (!w.smartlook) {
            throw 'Smartlook client is not initialized.';
        }
        w.smartlook('disable');
    },
    consentForms: function (consent) {
        var w = window;
        if (!w.smartlook) {
            throw 'Smartlook client is not initialized.';
        }
        w.smartlook('consentForms', consent);
    },
    consentIP: function (consent) {
        var w = window;
        if (!w.smartlook) {
            throw 'Smartlook client is not initialized.';
        }
        w.smartlook('consentIP', consent);
    },
    consentAPI: function (consent) {
        var w = window;
        if (!w.smartlook) {
            throw 'Smartlook client is not initialized.';
        }
        w.smartlook('consentAPI', consent);
    },
    getData: function (callback) {
        var w = window;
        if (!w.smartlook) {
            throw 'Smartlook client is not initialized.';
        }
        w.smartlook(callback);
    }
};
//# sourceMappingURL=index.js.map