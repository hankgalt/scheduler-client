import { EntityType, FileSignalRequest, QueryWorkflowRequest, SearchRunRequest } from '../proto/_gen/scheduler_pb';
import type { FileWorkflowState, BatchState, HeaderState, ErrorResultState, SuccessResultState, WorkflowRun } from '../proto/_gen/scheduler_pb';
export type { SchedulerServiceGRPCClient } from './client';
export declare enum BusinessEntityType {
    AGENT = "AGENT",
    PRINCIPAL = "PRINCIPAL",
    FILING = "FILING",
    UNKNOWN = "UNKNOWN"
}
export interface FileProcessingRequest {
    filePath: string;
    requestedBy: string;
    type: BusinessEntityType;
}
export interface FileWorkflowStateRequest {
    runId: string;
    workflowId: string;
}
export interface WorkflowStateResponse {
    state?: WorkflowResult;
    error?: Error;
}
export type WorkflowRunResponse = {
    run?: SchedulerWorkflowRun;
    error?: Error;
};
export type WorkflowRunsResponse = {
    runs?: SchedulerWorkflowRun[];
    error?: Error;
};
export interface SchedulerWorkflowRun {
    runId: string;
    workflowId: string;
    status: string;
    requestedby?: string;
    type?: string;
    externalref?: string;
}
export interface Headers {
    headers: string[];
    offset: string;
}
export interface BatchResult {
    start: string;
    end: string;
    batchIndex: string;
    results: SuccessResult[];
    errors: ErrorResult[];
}
export interface SuccessResult {
    start: string;
    end: string;
    resultId: string;
}
export interface ErrorResult {
    start: string;
    end: string;
    error: string;
}
export interface WorkflowResult {
    fileName: string;
    fileSize: string;
    hostId: string;
    requestedBy: string;
    type: string;
    runId: string;
    workflowId: string;
    processRunId: string;
    processWorkflowId: string;
    offsets: string[];
    headers?: Headers;
    batches: BatchResult[];
}
export declare const buildFileSignalRequest: (params: FileProcessingRequest) => FileSignalRequest;
export declare const buildQueryWorkflowRequest: (params: FileWorkflowStateRequest) => QueryWorkflowRequest;
export interface WorkflowRunSearchParams {
    runId?: string;
    workflowId?: string;
    status?: string;
    type?: string;
    externalRef?: string;
}
export declare const buildSearchRunRequest: (params: WorkflowRunSearchParams) => SearchRunRequest;
export declare const mapEntityTypeToProto: (type: BusinessEntityType) => EntityType | undefined;
export declare const mapProtoToWorkflowRuns: (wfrs: WorkflowRun[]) => SchedulerWorkflowRun[];
export declare const mapProtoToWorkflowRun: (wfr: WorkflowRun) => SchedulerWorkflowRun;
export declare const mapProtoToHeaders: (hs: HeaderState | undefined) => Headers | undefined;
export declare const mapProtoToSuccessResult: (srs: SuccessResultState) => SuccessResult;
export declare const mapProtoToSuccessResults: (srs: SuccessResultState[]) => SuccessResult[];
export declare const mapProtoToErrorResult: (ers: ErrorResultState) => ErrorResult;
export declare const mapProtoToBatchResult: (bs: BatchState) => BatchResult;
export declare const mapProtoToFileWorkflowState: (fws: FileWorkflowState) => WorkflowResult;
export declare const mapWorkflowStateResponse: (state: FileWorkflowState) => WorkflowStateResponse;
