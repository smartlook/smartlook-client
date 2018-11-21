declare const _default: {
    init: (key: string) => void;
    identify: (userId: string, props: {
        [key: string]: string | number | boolean;
    }) => void;
    track: (eventName: string, props: {
        [key: string]: string | number | boolean;
    }) => void;
    disable: () => void;
    consentForms: (consent: string | false) => void;
    consentIP: (consent: string | false) => void;
    consentAPI: (consent: string | false) => void;
    getData: (callback: () => void) => void;
};
export default _default;
