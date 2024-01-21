"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchWorkflowRuns = void 0;
const index_1 = require("./index");
async function searchWorkflowRuns(client, params) {
    return await new Promise((resolve, reject) => {
        const pReq = (0, index_1.buildSearchRunRequest)(params);
        try {
            client.searchRuns(pReq, (err, res) => {
                if (err != null) {
                    console.error('searchWorkflowRuns() - request error: ', { err });
                    reject(err);
                }
                else {
                    const runs = res.getRunsList();
                    if (res.getOk() && runs.length > 0) {
                        resolve({ runs: (0, index_1.mapProtoToWorkflowRuns)(runs) });
                    }
                    else {
                        console.error('searchWorkflowRuns() - error searching workflow runs');
                        reject(new Error('error searching workflow runs'));
                    }
                }
            });
        }
        catch (err) {
            console.error('searchWorkflowRuns() - system error: ', { err });
            reject(err);
        }
    });
}
exports.searchWorkflowRuns = searchWorkflowRuns;
