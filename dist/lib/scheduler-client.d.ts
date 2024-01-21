import type { FileProcessingRequest, WorkflowRunResponse, FileWorkflowStateRequest, WorkflowStateResponse, WorkflowRunSearchParams, WorkflowRunsResponse } from './pkg';
export interface SchedulerServiceClient {
    fileWorkflowState(params: FileWorkflowStateRequest): Promise<WorkflowStateResponse>;
    fileSignalWorkflow(params: FileProcessingRequest): Promise<WorkflowRunResponse>;
    searchWorkflowRuns(params: WorkflowRunSearchParams): Promise<WorkflowRunsResponse>;
}
export declare class ServiceClient {
    private client;
    constructor();
    fileWorkflowState(params: FileWorkflowStateRequest): Promise<WorkflowStateResponse>;
    fileSignalWorkflow(params: FileProcessingRequest): Promise<WorkflowRunResponse>;
    searchWorkflowRuns(params: WorkflowRunSearchParams): Promise<WorkflowRunsResponse>;
}
