declare const _default: {
    init: (key: string, params?: {
        region?: "eu" | "us" | undefined;
        version?: "nextgen" | "legacy" | undefined;
    } | undefined) => boolean;
    identify: (userId: string | number, props: {
        [key: string]: string | number | boolean;
    }) => boolean;
    anonymize: () => boolean;
    track: (eventName: string, props: {
        [key: string]: string | number | boolean;
    }) => boolean;
    disable: () => boolean;
    consentForms: (consent: string | false) => boolean;
    consentIP: (consent: string | false) => boolean;
    consentAPI: (consent: string | false) => boolean;
    getData: (callback: () => void) => boolean;
    restart: () => boolean;
    pause: () => boolean;
    resume: () => boolean;
    error: (error: string | Error) => boolean;
    navigation: (locationOrPath: string) => boolean;
    properties: (properties: {
        [key: string]: string | number | boolean;
    }) => boolean;
    initialized: () => boolean;
};
export default _default;
