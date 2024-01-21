import type { FileWorkflowStateRequest, WorkflowStateResponse, SchedulerServiceGRPCClient } from './index';
export declare function fileWorkflowState(client: SchedulerServiceGRPCClient, params: FileWorkflowStateRequest): Promise<WorkflowStateResponse>;
