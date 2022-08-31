declare const _default: {
    init: (key: string, params?: {
        region?: "eu" | "us" | undefined;
        version?: "nextgen" | "legacy" | undefined;
        cookies?: boolean | undefined;
    } | undefined) => boolean;
    identify: (userId: string | number, props: {
        [key: string]: string | number | boolean;
    }) => boolean;
    anonymize: () => boolean;
    track: (eventName: string, props: {
        [key: string]: string | number | boolean;
    }) => boolean;
    disable: () => boolean;
    record: (params: {
        forms?: boolean;
        ips?: boolean;
        numbers?: boolean;
        emails?: boolean;
        api?: boolean;
    }) => boolean;
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
    readonly playUrl: string | undefined;
    readonly sessionId: string | undefined;
    readonly visitorId: string | undefined;
    readonly recordId: string | undefined;
    readonly key: string | undefined;
    readonly version: string | undefined;
};
export default _default;
