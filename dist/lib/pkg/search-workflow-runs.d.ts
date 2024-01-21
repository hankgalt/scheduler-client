import type { WorkflowRunsResponse, WorkflowRunSearchParams, SchedulerServiceGRPCClient } from './index';
export declare function searchWorkflowRuns(client: SchedulerServiceGRPCClient, params: WorkflowRunSearchParams): Promise<WorkflowRunsResponse>;
