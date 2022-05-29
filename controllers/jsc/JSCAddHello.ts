import { JSONSchema6 } from 'json-schema';

export const JSCAddHello: JSONSchema6 = {
    properties: {
        body: {
            properties: {
                message: {
                    type: 'string'
                }
            },
            required: ['message'],
            type: 'object'
        }
    },
    required: ['body'],
    type: 'object'
};
