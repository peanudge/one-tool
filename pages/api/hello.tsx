// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';
import HelloController from '../../controllers/hello.controller';
import debug from '../../utils/debug_log';

const log = debug('api:hello');

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    const { method } = req;
    log(method);
    const supportMethod = ['GET'];
    if (supportMethod.indexOf(method!) === -1) {
        res.status(400).end();
        return;
    }
    if (method === 'GET') {
        await HelloController.hello(req, res);
    }
}
