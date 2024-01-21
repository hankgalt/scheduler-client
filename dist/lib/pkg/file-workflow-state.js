"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileWorkflowState = void 0;
const index_1 = require("./index");
async function fileWorkflowState(client, params) {
    return await new Promise((resolve, reject) => {
        const pReq = (0, index_1.buildQueryWorkflowRequest)(params);
        try {
            client.queryFileWorkflowState(pReq, (err, res) => {
                if (err != null) {
                    console.error('fileWorkflowState() - request error: ', { err });
                    reject(err);
                }
                else {
                    const state = res.getState();
                    if (state != null) {
                        resolve({ state: (0, index_1.mapProtoToFileWorkflowState)(state) });
                    }
                    else {
                        console.error('fileWorkflowState() - no workflow state found');
                        reject(new Error('no workflow state found'));
                    }
                }
            });
        }
        catch (err) {
            console.error('fileWorkflowState() - system error, %o', { err });
            reject(err);
        }
    });
}
exports.fileWorkflowState = fileWorkflowState;
