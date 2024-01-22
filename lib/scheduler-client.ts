import schedulerClient from './pkg/client'
import { fileWorkflowState } from './pkg/file-workflow-state'
import { fileSignalWorkflow } from './pkg/file-signal-workflow'
import { searchWorkflowRuns } from './pkg/search-workflow-runs'
import { getEntity } from './pkg/get-entity'
import type {
  FileProcessingRequest,
  WorkflowRunResponse,
  FileWorkflowStateRequest,
  WorkflowStateResponse,
  SchedulerServiceGRPCClient,
  WorkflowRunSearchParams,
  WorkflowRunsResponse,
  BusinessEntityRequest,
  BusinessEntityResponse
} from './pkg'

export interface SchedulerServiceClient {
  fileWorkflowState(
    params: FileWorkflowStateRequest
  ): Promise<WorkflowStateResponse>

  fileSignalWorkflow(
    params: FileProcessingRequest
  ): Promise<WorkflowRunResponse>

  searchWorkflowRuns(
    params: WorkflowRunSearchParams
  ): Promise<WorkflowRunsResponse>

  getEntity(
    params: BusinessEntityRequest
  ): Promise<BusinessEntityResponse>
}

export class ServiceClient {
  private client: SchedulerServiceGRPCClient

  constructor() {
    this.client = schedulerClient
  }

  async fileWorkflowState(
    params: FileWorkflowStateRequest
  ): Promise<WorkflowStateResponse> {
    return fileWorkflowState(this.client, params)
  }

  async fileSignalWorkflow(
    params: FileProcessingRequest
  ): Promise<WorkflowRunResponse> {
    return fileSignalWorkflow(this.client, params)
  }

  async searchWorkflowRuns(
    params: WorkflowRunSearchParams
  ): Promise<WorkflowRunsResponse> {
    return searchWorkflowRuns(this.client, params)
  }

  async getEntity(
    params: BusinessEntityRequest
  ): Promise<BusinessEntityResponse> {
    return getEntity(this.client, params)
  }
}
