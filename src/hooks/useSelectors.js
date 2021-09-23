import { createSelector } from 'reselect';

const appNode = state => {
    return state;
};

const getObjectSliceByString = (o, s) => {
    const a = s.split('.');
    for (let i = 0, n = a.length; i < n; ++i) {
        const k = a[i];
        if (k in o) {
            o = o[k];
        } else {
            return;
        }
    }
    return o;
};

const useSelectors = (param) =>
    createSelector(
        appNode,
        s => getObjectSliceByString(s, param),
    );

export default useSelectors;
