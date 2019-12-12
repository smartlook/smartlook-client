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
    getData: (variable: string, callback: (data: string | undefined) => void) => void;
    restart: () => void;
    error: (error: string | Error) => void;
};
export default _default;
