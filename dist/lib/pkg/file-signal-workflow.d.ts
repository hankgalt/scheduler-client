import type { WorkflowRunResponse, FileProcessingRequest, SchedulerServiceGRPCClient } from './index';
export declare function fileSignalWorkflow(client: SchedulerServiceGRPCClient, params: FileProcessingRequest): Promise<WorkflowRunResponse>;
