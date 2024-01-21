"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileSignalWorkflow = void 0;
const index_1 = require("./index");
async function fileSignalWorkflow(client, params) {
    return await new Promise((resolve, reject) => {
        const pReq = (0, index_1.buildFileSignalRequest)(params);
        try {
            client.processFileSignalWorkflow(pReq, (err, res) => {
                if (err != null) {
                    console.error('fileSignalWorkflow() - request error: ', { err });
                    reject(err);
                }
                else {
                    const run = res.getRun();
                    if (res.getOk() && run != null) {
                        resolve({ run: (0, index_1.mapProtoToWorkflowRun)(run) });
                    }
                    else {
                        console.error('fileSignalWorkflow() - error starting file signal workflow');
                        reject(new Error('error starting file signal workflow'));
                    }
                }
            });
        }
        catch (err) {
            console.error('fileSignalWorkflow() - system error: ', { err });
            reject(err);
        }
    });
}
exports.fileSignalWorkflow = fileSignalWorkflow;
