import { NextApiRequest, NextApiResponse } from 'next';
import validateParamWithData from '../utils/req_validator';
import { IAddHelloReq } from './interface/IAddHello';
import { JSCAddHello } from './jsc/JSCAddHello';

export default class HelloController {
    static async hello(req: NextApiRequest, res: NextApiResponse) {
        const validateReq = validateParamWithData<IAddHelloReq>(
            {
                body: req.body
            },
            JSCAddHello
        );

        if (validateReq.result === false) {
            return res.status(400).json({
                text: validateReq.errorMessage
            });
        }

        return res.status(200).json({
            message: validateReq.data.body.message
        });
    }
}
