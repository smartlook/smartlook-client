interface Network {
    allowedHeaders?: string[];
    allowedUrls?: (string | RegExp)[];
}
declare type RequestOrResponse = {
    body?: string;
    headers?: Record<string, string[]>;
};
interface Interceptors {
    click?: (data: {
        props?: Record<string, string | number | null | boolean>;
        text?: string;
        url: string;
    }, context: MouseEvent) => void | boolean;
    error?: (data: {
        colno?: number;
        filename?: string;
        lineno?: number;
        message?: string;
        stack?: string;
        url: string;
    }, context: ErrorEvent | PromiseRejectionEvent | Error | string) => void | boolean;
    focus?: (data: {
        url: string;
    }, context: FocusEvent) => void | boolean;
    network?: (data: {
        request?: RequestOrResponse;
        response?: RequestOrResponse;
        url: string;
    }, context: {
        pageUrl: string;
    }) => void | false;
    url?: (data: {
        url: string;
    }) => void;
}
export declare type InitParams = {
    advancedNetwork?: Network | boolean;
    interceptors?: Interceptors;
    cookies?: boolean;
    region?: 'eu' | 'us';
    relayProxyUrl?: string;
    standalone?: boolean;
};
declare const _default: {
    init: (key: string, params?: InitParams | undefined) => boolean;
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
