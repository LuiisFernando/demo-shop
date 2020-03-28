import { defaultEndpoint } from '../endpoint';

import { servicePost } from '../index';

export async function addCard (data) {
    const response = await servicePost(defaultEndpoint, data);
    return response;
}