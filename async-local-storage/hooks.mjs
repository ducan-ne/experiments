import {AsyncLocalStorage} from "node:async_hooks";
import assert from "assert";

export const asyncLocalStorage = new AsyncLocalStorage();


export function headers() {
    const store = asyncLocalStorage.getStore();
    assert.ok(store, new Error('Should run in handler'))

    return store.headers
}


export function url() {
    const store = asyncLocalStorage.getStore();
    assert.ok(store, new Error('Should run in handler'))

    return store.url
}
