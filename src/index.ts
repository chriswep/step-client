import 'whatwg-fetch';

export const getStepData = async () =>
    await fetch(
        'https://www.stepbible.org/rest/search/masterSearch/version=ESV%7Creference=John.1'
    ).then(r => r.json());
