"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEntity = getEntity;
const index_1 = require("./index");
async function getEntity(client, params) {
    return await new Promise((resolve, reject) => {
        const pReq = (0, index_1.buildEntityRequest)(params);
        try {
            client.getEntity(pReq, (err, res) => {
                if (err != null) {
                    console.error('getEntity() - request error: ', { err });
                    reject(err);
                }
                else {
                    if (res.getOk()) {
                        resolve((0, index_1.mapProtoToBusinessEntityResponse)(res));
                    }
                    else {
                        console.error('getEntity() - error getting entity');
                        reject(new Error('error getting entity'));
                    }
                }
            });
        }
        catch (err) {
            console.error('getEntity() - system error: ', { err });
            reject(err);
        }
    });
}
