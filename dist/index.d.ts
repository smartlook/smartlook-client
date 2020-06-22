declare const _default: {
    init: (key: string) => void;
    identify: (userId: string | number, props: {
        [key: string]: string | number | boolean;
    }) => void;
    anonymize: () => void;
    track: (eventName: string, props: {
        [key: string]: string | number | boolean;
    }) => void;
    disable: () => void;
    consentForms: (consent: string | false) => void;
    consentIP: (consent: string | false) => void;
    consentAPI: (consent: string | false) => void;
    getData: (callback: () => void) => void;
    restart: () => void;
    pause: () => void;
    resume: () => void;
    error: (error: string | Error) => void;
    navigation: (locationOrPath: string) => void;
    properties: (properties: {
        [key: string]: string | number | boolean;
    }) => void;
};
export default _default;
