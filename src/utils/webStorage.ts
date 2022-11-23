/**
 *
 * @param {one of 'localStorage' or 'sessionStorage'} storageType
 * @param {string} key
 * @param {string} value
 */

export const writeToStorage = (
    key: string,
    value: string,
    storageType: 'localStorage' | 'sessionStorage' = 'localStorage'
): void => {
    // try setting value only if cookies are enabled and that type of storage exists on window object
    if (window.navigator.cookieEnabled && storageType in window) {
        window[storageType].setItem(key, value);
    }
};