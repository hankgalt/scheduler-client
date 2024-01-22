"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceClient = void 0;
const client_1 = __importDefault(require("./pkg/client"));
const file_workflow_state_1 = require("./pkg/file-workflow-state");
const file_signal_workflow_1 = require("./pkg/file-signal-workflow");
const search_workflow_runs_1 = require("./pkg/search-workflow-runs");
const get_entity_1 = require("./pkg/get-entity");
class ServiceClient {
    client;
    constructor() {
        this.client = client_1.default;
    }
    async fileWorkflowState(params) {
        return (0, file_workflow_state_1.fileWorkflowState)(this.client, params);
    }
    async fileSignalWorkflow(params) {
        return (0, file_signal_workflow_1.fileSignalWorkflow)(this.client, params);
    }
    async searchWorkflowRuns(params) {
        return (0, search_workflow_runs_1.searchWorkflowRuns)(this.client, params);
    }
    async getEntity(params) {
        return (0, get_entity_1.getEntity)(this.client, params);
    }
}
exports.ServiceClient = ServiceClient;
