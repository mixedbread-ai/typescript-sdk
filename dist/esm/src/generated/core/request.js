var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { ApiError } from './ApiError';
import { CancelablePromise } from './CancelablePromise';
export const isDefined = (value) => {
    return value !== undefined && value !== null;
};
export const isString = (value) => {
    return typeof value === 'string';
};
export const isStringWithValue = (value) => {
    return isString(value) && value !== '';
};
export const isBlob = (value) => {
    return (typeof value === 'object' &&
        typeof value.type === 'string' &&
        typeof value.stream === 'function' &&
        typeof value.arrayBuffer === 'function' &&
        typeof value.constructor === 'function' &&
        typeof value.constructor.name === 'string' &&
        /^(Blob|File)$/.test(value.constructor.name) &&
        /^(Blob|File)$/.test(value[Symbol.toStringTag]));
};
export const isFormData = (value) => {
    return value instanceof FormData;
};
export const base64 = (str) => {
    try {
        return btoa(str);
    }
    catch (err) {
        // @ts-ignore
        return Buffer.from(str).toString('base64');
    }
};
export const getQueryString = (params) => {
    const qs = [];
    const append = (key, value) => {
        qs.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
    };
    const process = (key, value) => {
        if (isDefined(value)) {
            if (Array.isArray(value)) {
                value.forEach(v => {
                    process(key, v);
                });
            }
            else if (typeof value === 'object') {
                Object.entries(value).forEach(([k, v]) => {
                    process(`${key}[${k}]`, v);
                });
            }
            else {
                append(key, value);
            }
        }
    };
    Object.entries(params).forEach(([key, value]) => {
        process(key, value);
    });
    if (qs.length > 0) {
        return `?${qs.join('&')}`;
    }
    return '';
};
const getUrl = (config, options) => {
    const encoder = config.ENCODE_PATH || encodeURI;
    const path = options.url
        .replace('{api-version}', config.VERSION)
        .replace(/{(.*?)}/g, (substring, group) => {
        var _a;
        if ((_a = options.path) === null || _a === void 0 ? void 0 : _a.hasOwnProperty(group)) {
            return encoder(String(options.path[group]));
        }
        return substring;
    });
    const url = `${config.BASE}${path}`;
    if (options.query) {
        return `${url}${getQueryString(options.query)}`;
    }
    return url;
};
export const getFormData = (options) => {
    if (options.formData) {
        const formData = new FormData();
        const process = (key, value) => {
            if (isString(value) || isBlob(value)) {
                formData.append(key, value);
            }
            else {
                formData.append(key, JSON.stringify(value));
            }
        };
        Object.entries(options.formData)
            .filter(([_, value]) => isDefined(value))
            .forEach(([key, value]) => {
            if (Array.isArray(value)) {
                value.forEach(v => process(key, v));
            }
            else {
                process(key, value);
            }
        });
        return formData;
    }
    return undefined;
};
export const resolve = (options, resolver) => __awaiter(void 0, void 0, void 0, function* () {
    if (typeof resolver === 'function') {
        return resolver(options);
    }
    return resolver;
});
export const getHeaders = (config, options) => __awaiter(void 0, void 0, void 0, function* () {
    const [token, username, password, additionalHeaders] = yield Promise.all([
        resolve(options, config.TOKEN),
        resolve(options, config.USERNAME),
        resolve(options, config.PASSWORD),
        resolve(options, config.HEADERS),
    ]);
    const headers = Object.entries(Object.assign(Object.assign({ Accept: 'application/json' }, additionalHeaders), options.headers))
        .filter(([_, value]) => isDefined(value))
        .reduce((headers, [key, value]) => (Object.assign(Object.assign({}, headers), { [key]: String(value) })), {});
    if (isStringWithValue(token)) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    if (isStringWithValue(username) && isStringWithValue(password)) {
        const credentials = base64(`${username}:${password}`);
        headers['Authorization'] = `Basic ${credentials}`;
    }
    if (options.body) {
        if (options.mediaType) {
            headers['Content-Type'] = options.mediaType;
        }
        else if (isBlob(options.body)) {
            headers['Content-Type'] = options.body.type || 'application/octet-stream';
        }
        else if (isString(options.body)) {
            headers['Content-Type'] = 'text/plain';
        }
        else if (!isFormData(options.body)) {
            headers['Content-Type'] = 'application/json';
        }
    }
    return new Headers(headers);
});
export const getRequestBody = (options) => {
    var _a;
    if (options.body !== undefined) {
        if ((_a = options.mediaType) === null || _a === void 0 ? void 0 : _a.includes('/json')) {
            return JSON.stringify(options.body);
        }
        else if (isString(options.body) || isBlob(options.body) || isFormData(options.body)) {
            return options.body;
        }
        else {
            return JSON.stringify(options.body);
        }
    }
    return undefined;
};
export const sendRequest = (config, options, url, body, formData, headers, onCancel) => __awaiter(void 0, void 0, void 0, function* () {
    const controller = new AbortController();
    const request = {
        headers,
        body: body !== null && body !== void 0 ? body : formData,
        method: options.method,
        signal: controller.signal,
    };
    if (config.WITH_CREDENTIALS) {
        request.credentials = config.CREDENTIALS;
    }
    onCancel(() => controller.abort());
    return yield fetch(url, request);
});
export const getResponseHeader = (response, responseHeader) => {
    if (responseHeader) {
        const content = response.headers.get(responseHeader);
        if (isString(content)) {
            return content;
        }
    }
    return undefined;
};
export const getResponseBody = (response) => __awaiter(void 0, void 0, void 0, function* () {
    if (response.status !== 204) {
        try {
            const contentType = response.headers.get('Content-Type');
            if (contentType) {
                const jsonTypes = ['application/json', 'application/problem+json'];
                const isJSON = jsonTypes.some(type => contentType.toLowerCase().startsWith(type));
                if (isJSON) {
                    return yield response.json();
                }
                else {
                    return yield response.text();
                }
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    return undefined;
});
export const catchErrorCodes = (options, result) => {
    var _a, _b;
    const errors = Object.assign({ 400: 'Bad Request', 401: 'Unauthorized', 403: 'Forbidden', 404: 'Not Found', 500: 'Internal Server Error', 502: 'Bad Gateway', 503: 'Service Unavailable' }, options.errors);
    const error = errors[result.status];
    if (error) {
        throw new ApiError(options, result, error);
    }
    if (!result.ok) {
        const errorStatus = (_a = result.status) !== null && _a !== void 0 ? _a : 'unknown';
        const errorStatusText = (_b = result.statusText) !== null && _b !== void 0 ? _b : 'unknown';
        const errorBody = (() => {
            try {
                return JSON.stringify(result.body, null, 2);
            }
            catch (e) {
                return undefined;
            }
        })();
        throw new ApiError(options, result, `Generic Error: status: ${errorStatus}; status text: ${errorStatusText}; body: ${errorBody}`);
    }
};
/**
 * Request method
 * @param config The OpenAPI configuration object
 * @param options The request options from the service
 * @returns CancelablePromise<T>
 * @throws ApiError
 */
export const request = (config, options) => {
    return new CancelablePromise((resolve, reject, onCancel) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const url = getUrl(config, options);
            const formData = getFormData(options);
            const body = getRequestBody(options);
            const headers = yield getHeaders(config, options);
            if (!onCancel.isCancelled) {
                const response = yield sendRequest(config, options, url, body, formData, headers, onCancel);
                const responseBody = yield getResponseBody(response);
                const responseHeader = getResponseHeader(response, options.responseHeader);
                const result = {
                    url,
                    ok: response.ok,
                    status: response.status,
                    statusText: response.statusText,
                    body: responseHeader !== null && responseHeader !== void 0 ? responseHeader : responseBody,
                };
                catchErrorCodes(options, result);
                resolve(result.body);
            }
        }
        catch (error) {
            reject(error);
        }
    }));
};
