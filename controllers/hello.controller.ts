import { NextApiRequest, NextApiResponse } from 'next';
import debug from '../utils/debug_log';
import validateParamWithData from '../utils/req_validator';
import { IAddHelloReq } from './interface/IAddHello';
import { JSCAddHello } from './jsc/JSCAddHello';

const messages = [];

const log = debug('hello:controller');

export default class HelloController {
    static async getHello(req: NextApiRequest, res: NextApiResponse) {
        return res.status(200).json({
            messages
        });
    }

    static async addHello(req: NextApiRequest, res: NextApiResponse) {
        const validateReq = validateParamWithData<IAddHelloReq>(
            {
                body: req.body
            },
            JSCAddHello
        );

        if (validateReq.result === false) {
            log(validateReq);
            return res.status(400).json({
                text: validateReq.errorMessage
            });
        }

        const newMessage = validateReq.data.body.message;
        messages.push(newMessage);

        return res.status(200).json({
            message: newMessage
        });
    }
}
