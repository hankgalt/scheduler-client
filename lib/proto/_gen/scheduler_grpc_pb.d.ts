// package: scheduler.v1
// file: scheduler.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from '@grpc/grpc-js'
import * as scheduler_pb from './scheduler_pb'
import * as api_google_rpc_status_pb from './api/google/rpc/status_pb'

interface ISchedulerService
  extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createRun: ISchedulerService_ICreateRun
  updateRun: ISchedulerService_IUpdateRun
  getRun: ISchedulerService_IGetRun
  deleteRun: ISchedulerService_IDeleteRun
  searchRuns: ISchedulerService_ISearchRuns
  addEntity: ISchedulerService_IAddEntity
  deleteEntity: ISchedulerService_IDeleteEntity
  addBusinessEntities: ISchedulerService_IAddBusinessEntities
  processFileSignalWorkflow: ISchedulerService_IProcessFileSignalWorkflow
  queryFileWorkflowState: ISchedulerService_IQueryFileWorkflowState
}

interface ISchedulerService_ICreateRun
  extends grpc.MethodDefinition<
    scheduler_pb.RunRequest,
    scheduler_pb.RunResponse
  > {
  path: '/scheduler.v1.Scheduler/CreateRun'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<scheduler_pb.RunRequest>
  requestDeserialize: grpc.deserialize<scheduler_pb.RunRequest>
  responseSerialize: grpc.serialize<scheduler_pb.RunResponse>
  responseDeserialize: grpc.deserialize<scheduler_pb.RunResponse>
}
interface ISchedulerService_IUpdateRun
  extends grpc.MethodDefinition<
    scheduler_pb.UpdateRunRequest,
    scheduler_pb.RunResponse
  > {
  path: '/scheduler.v1.Scheduler/UpdateRun'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<scheduler_pb.UpdateRunRequest>
  requestDeserialize: grpc.deserialize<scheduler_pb.UpdateRunRequest>
  responseSerialize: grpc.serialize<scheduler_pb.RunResponse>
  responseDeserialize: grpc.deserialize<scheduler_pb.RunResponse>
}
interface ISchedulerService_IGetRun
  extends grpc.MethodDefinition<
    scheduler_pb.RunRequest,
    scheduler_pb.RunResponse
  > {
  path: '/scheduler.v1.Scheduler/GetRun'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<scheduler_pb.RunRequest>
  requestDeserialize: grpc.deserialize<scheduler_pb.RunRequest>
  responseSerialize: grpc.serialize<scheduler_pb.RunResponse>
  responseDeserialize: grpc.deserialize<scheduler_pb.RunResponse>
}
interface ISchedulerService_IDeleteRun
  extends grpc.MethodDefinition<
    scheduler_pb.DeleteRunRequest,
    scheduler_pb.DeleteResponse
  > {
  path: '/scheduler.v1.Scheduler/DeleteRun'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<scheduler_pb.DeleteRunRequest>
  requestDeserialize: grpc.deserialize<scheduler_pb.DeleteRunRequest>
  responseSerialize: grpc.serialize<scheduler_pb.DeleteResponse>
  responseDeserialize: grpc.deserialize<scheduler_pb.DeleteResponse>
}
interface ISchedulerService_ISearchRuns
  extends grpc.MethodDefinition<
    scheduler_pb.SearchRunRequest,
    scheduler_pb.RunsResponse
  > {
  path: '/scheduler.v1.Scheduler/SearchRuns'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<scheduler_pb.SearchRunRequest>
  requestDeserialize: grpc.deserialize<scheduler_pb.SearchRunRequest>
  responseSerialize: grpc.serialize<scheduler_pb.RunsResponse>
  responseDeserialize: grpc.deserialize<scheduler_pb.RunsResponse>
}
interface ISchedulerService_IAddEntity
  extends grpc.MethodDefinition<
    scheduler_pb.AddEntityRequest,
    scheduler_pb.AddEntityResponse
  > {
  path: '/scheduler.v1.Scheduler/AddEntity'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<scheduler_pb.AddEntityRequest>
  requestDeserialize: grpc.deserialize<scheduler_pb.AddEntityRequest>
  responseSerialize: grpc.serialize<scheduler_pb.AddEntityResponse>
  responseDeserialize: grpc.deserialize<scheduler_pb.AddEntityResponse>
}
interface ISchedulerService_IDeleteEntity
  extends grpc.MethodDefinition<
    scheduler_pb.DeleteEntityRequest,
    scheduler_pb.DeleteResponse
  > {
  path: '/scheduler.v1.Scheduler/DeleteEntity'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<scheduler_pb.DeleteEntityRequest>
  requestDeserialize: grpc.deserialize<scheduler_pb.DeleteEntityRequest>
  responseSerialize: grpc.serialize<scheduler_pb.DeleteResponse>
  responseDeserialize: grpc.deserialize<scheduler_pb.DeleteResponse>
}
interface ISchedulerService_IAddBusinessEntities
  extends grpc.MethodDefinition<
    scheduler_pb.AddEntityRequest,
    scheduler_pb.StreamAddEntityResponse
  > {
  path: '/scheduler.v1.Scheduler/AddBusinessEntities'
  requestStream: true
  responseStream: true
  requestSerialize: grpc.serialize<scheduler_pb.AddEntityRequest>
  requestDeserialize: grpc.deserialize<scheduler_pb.AddEntityRequest>
  responseSerialize: grpc.serialize<scheduler_pb.StreamAddEntityResponse>
  responseDeserialize: grpc.deserialize<scheduler_pb.StreamAddEntityResponse>
}
interface ISchedulerService_IProcessFileSignalWorkflow
  extends grpc.MethodDefinition<
    scheduler_pb.FileSignalRequest,
    scheduler_pb.RunResponse
  > {
  path: '/scheduler.v1.Scheduler/ProcessFileSignalWorkflow'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<scheduler_pb.FileSignalRequest>
  requestDeserialize: grpc.deserialize<scheduler_pb.FileSignalRequest>
  responseSerialize: grpc.serialize<scheduler_pb.RunResponse>
  responseDeserialize: grpc.deserialize<scheduler_pb.RunResponse>
}
interface ISchedulerService_IQueryFileWorkflowState
  extends grpc.MethodDefinition<
    scheduler_pb.QueryWorkflowRequest,
    scheduler_pb.FileWorkflowStateResponse
  > {
  path: '/scheduler.v1.Scheduler/QueryFileWorkflowState'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<scheduler_pb.QueryWorkflowRequest>
  requestDeserialize: grpc.deserialize<scheduler_pb.QueryWorkflowRequest>
  responseSerialize: grpc.serialize<scheduler_pb.FileWorkflowStateResponse>
  responseDeserialize: grpc.deserialize<scheduler_pb.FileWorkflowStateResponse>
}

export const SchedulerService: ISchedulerService

export interface ISchedulerServer extends grpc.UntypedServiceImplementation {
  createRun: grpc.handleUnaryCall<
    scheduler_pb.RunRequest,
    scheduler_pb.RunResponse
  >
  updateRun: grpc.handleUnaryCall<
    scheduler_pb.UpdateRunRequest,
    scheduler_pb.RunResponse
  >
  getRun: grpc.handleUnaryCall<
    scheduler_pb.RunRequest,
    scheduler_pb.RunResponse
  >
  deleteRun: grpc.handleUnaryCall<
    scheduler_pb.DeleteRunRequest,
    scheduler_pb.DeleteResponse
  >
  searchRuns: grpc.handleUnaryCall<
    scheduler_pb.SearchRunRequest,
    scheduler_pb.RunsResponse
  >
  addEntity: grpc.handleUnaryCall<
    scheduler_pb.AddEntityRequest,
    scheduler_pb.AddEntityResponse
  >
  deleteEntity: grpc.handleUnaryCall<
    scheduler_pb.DeleteEntityRequest,
    scheduler_pb.DeleteResponse
  >
  addBusinessEntities: grpc.handleBidiStreamingCall<
    scheduler_pb.AddEntityRequest,
    scheduler_pb.StreamAddEntityResponse
  >
  processFileSignalWorkflow: grpc.handleUnaryCall<
    scheduler_pb.FileSignalRequest,
    scheduler_pb.RunResponse
  >
  queryFileWorkflowState: grpc.handleUnaryCall<
    scheduler_pb.QueryWorkflowRequest,
    scheduler_pb.FileWorkflowStateResponse
  >
}

export interface ISchedulerClient {
  createRun(
    request: scheduler_pb.RunRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.RunResponse
    ) => void
  ): grpc.ClientUnaryCall
  createRun(
    request: scheduler_pb.RunRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.RunResponse
    ) => void
  ): grpc.ClientUnaryCall
  createRun(
    request: scheduler_pb.RunRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.RunResponse
    ) => void
  ): grpc.ClientUnaryCall
  updateRun(
    request: scheduler_pb.UpdateRunRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.RunResponse
    ) => void
  ): grpc.ClientUnaryCall
  updateRun(
    request: scheduler_pb.UpdateRunRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.RunResponse
    ) => void
  ): grpc.ClientUnaryCall
  updateRun(
    request: scheduler_pb.UpdateRunRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.RunResponse
    ) => void
  ): grpc.ClientUnaryCall
  getRun(
    request: scheduler_pb.RunRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.RunResponse
    ) => void
  ): grpc.ClientUnaryCall
  getRun(
    request: scheduler_pb.RunRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.RunResponse
    ) => void
  ): grpc.ClientUnaryCall
  getRun(
    request: scheduler_pb.RunRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.RunResponse
    ) => void
  ): grpc.ClientUnaryCall
  deleteRun(
    request: scheduler_pb.DeleteRunRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.DeleteResponse
    ) => void
  ): grpc.ClientUnaryCall
  deleteRun(
    request: scheduler_pb.DeleteRunRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.DeleteResponse
    ) => void
  ): grpc.ClientUnaryCall
  deleteRun(
    request: scheduler_pb.DeleteRunRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.DeleteResponse
    ) => void
  ): grpc.ClientUnaryCall
  searchRuns(
    request: scheduler_pb.SearchRunRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.RunsResponse
    ) => void
  ): grpc.ClientUnaryCall
  searchRuns(
    request: scheduler_pb.SearchRunRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.RunsResponse
    ) => void
  ): grpc.ClientUnaryCall
  searchRuns(
    request: scheduler_pb.SearchRunRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.RunsResponse
    ) => void
  ): grpc.ClientUnaryCall
  addEntity(
    request: scheduler_pb.AddEntityRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.AddEntityResponse
    ) => void
  ): grpc.ClientUnaryCall
  addEntity(
    request: scheduler_pb.AddEntityRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.AddEntityResponse
    ) => void
  ): grpc.ClientUnaryCall
  addEntity(
    request: scheduler_pb.AddEntityRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.AddEntityResponse
    ) => void
  ): grpc.ClientUnaryCall
  deleteEntity(
    request: scheduler_pb.DeleteEntityRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.DeleteResponse
    ) => void
  ): grpc.ClientUnaryCall
  deleteEntity(
    request: scheduler_pb.DeleteEntityRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.DeleteResponse
    ) => void
  ): grpc.ClientUnaryCall
  deleteEntity(
    request: scheduler_pb.DeleteEntityRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.DeleteResponse
    ) => void
  ): grpc.ClientUnaryCall
  addBusinessEntities(): grpc.ClientDuplexStream<
    scheduler_pb.AddEntityRequest,
    scheduler_pb.StreamAddEntityResponse
  >
  addBusinessEntities(
    options: Partial<grpc.CallOptions>
  ): grpc.ClientDuplexStream<
    scheduler_pb.AddEntityRequest,
    scheduler_pb.StreamAddEntityResponse
  >
  addBusinessEntities(
    metadata: grpc.Metadata,
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientDuplexStream<
    scheduler_pb.AddEntityRequest,
    scheduler_pb.StreamAddEntityResponse
  >
  processFileSignalWorkflow(
    request: scheduler_pb.FileSignalRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.RunResponse
    ) => void
  ): grpc.ClientUnaryCall
  processFileSignalWorkflow(
    request: scheduler_pb.FileSignalRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.RunResponse
    ) => void
  ): grpc.ClientUnaryCall
  processFileSignalWorkflow(
    request: scheduler_pb.FileSignalRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.RunResponse
    ) => void
  ): grpc.ClientUnaryCall
  queryFileWorkflowState(
    request: scheduler_pb.QueryWorkflowRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.FileWorkflowStateResponse
    ) => void
  ): grpc.ClientUnaryCall
  queryFileWorkflowState(
    request: scheduler_pb.QueryWorkflowRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.FileWorkflowStateResponse
    ) => void
  ): grpc.ClientUnaryCall
  queryFileWorkflowState(
    request: scheduler_pb.QueryWorkflowRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.FileWorkflowStateResponse
    ) => void
  ): grpc.ClientUnaryCall
}

export class SchedulerClient extends grpc.Client implements ISchedulerClient {
  constructor(
    address: string,
    credentials: grpc.ChannelCredentials,
    options?: Partial<grpc.ClientOptions>
  )
  public createRun(
    request: scheduler_pb.RunRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.RunResponse
    ) => void
  ): grpc.ClientUnaryCall
  public createRun(
    request: scheduler_pb.RunRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.RunResponse
    ) => void
  ): grpc.ClientUnaryCall
  public createRun(
    request: scheduler_pb.RunRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.RunResponse
    ) => void
  ): grpc.ClientUnaryCall
  public updateRun(
    request: scheduler_pb.UpdateRunRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.RunResponse
    ) => void
  ): grpc.ClientUnaryCall
  public updateRun(
    request: scheduler_pb.UpdateRunRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.RunResponse
    ) => void
  ): grpc.ClientUnaryCall
  public updateRun(
    request: scheduler_pb.UpdateRunRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.RunResponse
    ) => void
  ): grpc.ClientUnaryCall
  public getRun(
    request: scheduler_pb.RunRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.RunResponse
    ) => void
  ): grpc.ClientUnaryCall
  public getRun(
    request: scheduler_pb.RunRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.RunResponse
    ) => void
  ): grpc.ClientUnaryCall
  public getRun(
    request: scheduler_pb.RunRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.RunResponse
    ) => void
  ): grpc.ClientUnaryCall
  public deleteRun(
    request: scheduler_pb.DeleteRunRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.DeleteResponse
    ) => void
  ): grpc.ClientUnaryCall
  public deleteRun(
    request: scheduler_pb.DeleteRunRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.DeleteResponse
    ) => void
  ): grpc.ClientUnaryCall
  public deleteRun(
    request: scheduler_pb.DeleteRunRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.DeleteResponse
    ) => void
  ): grpc.ClientUnaryCall
  public searchRuns(
    request: scheduler_pb.SearchRunRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.RunsResponse
    ) => void
  ): grpc.ClientUnaryCall
  public searchRuns(
    request: scheduler_pb.SearchRunRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.RunsResponse
    ) => void
  ): grpc.ClientUnaryCall
  public searchRuns(
    request: scheduler_pb.SearchRunRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.RunsResponse
    ) => void
  ): grpc.ClientUnaryCall
  public addEntity(
    request: scheduler_pb.AddEntityRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.AddEntityResponse
    ) => void
  ): grpc.ClientUnaryCall
  public addEntity(
    request: scheduler_pb.AddEntityRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.AddEntityResponse
    ) => void
  ): grpc.ClientUnaryCall
  public addEntity(
    request: scheduler_pb.AddEntityRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.AddEntityResponse
    ) => void
  ): grpc.ClientUnaryCall
  public deleteEntity(
    request: scheduler_pb.DeleteEntityRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.DeleteResponse
    ) => void
  ): grpc.ClientUnaryCall
  public deleteEntity(
    request: scheduler_pb.DeleteEntityRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.DeleteResponse
    ) => void
  ): grpc.ClientUnaryCall
  public deleteEntity(
    request: scheduler_pb.DeleteEntityRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.DeleteResponse
    ) => void
  ): grpc.ClientUnaryCall
  public addBusinessEntities(
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientDuplexStream<
    scheduler_pb.AddEntityRequest,
    scheduler_pb.StreamAddEntityResponse
  >
  public addBusinessEntities(
    metadata?: grpc.Metadata,
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientDuplexStream<
    scheduler_pb.AddEntityRequest,
    scheduler_pb.StreamAddEntityResponse
  >
  public processFileSignalWorkflow(
    request: scheduler_pb.FileSignalRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.RunResponse
    ) => void
  ): grpc.ClientUnaryCall
  public processFileSignalWorkflow(
    request: scheduler_pb.FileSignalRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.RunResponse
    ) => void
  ): grpc.ClientUnaryCall
  public processFileSignalWorkflow(
    request: scheduler_pb.FileSignalRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.RunResponse
    ) => void
  ): grpc.ClientUnaryCall
  public queryFileWorkflowState(
    request: scheduler_pb.QueryWorkflowRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.FileWorkflowStateResponse
    ) => void
  ): grpc.ClientUnaryCall
  public queryFileWorkflowState(
    request: scheduler_pb.QueryWorkflowRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.FileWorkflowStateResponse
    ) => void
  ): grpc.ClientUnaryCall
  public queryFileWorkflowState(
    request: scheduler_pb.QueryWorkflowRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: scheduler_pb.FileWorkflowStateResponse
    ) => void
  ): grpc.ClientUnaryCall
}
