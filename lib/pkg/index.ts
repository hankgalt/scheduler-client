import {
  EntityType,
  FileSignalRequest,
  QueryWorkflowRequest,
  SearchRunRequest,
  EntityRequest
} from '../proto/_gen/scheduler_pb'
import type {
  FileWorkflowState,
  BatchState,
  HeaderState,
  ErrorResultState,
  SuccessResultState,
  WorkflowRun,
  EntityResponse,
  BusinessAgent,
  BusinessPrincipal,
  BusinessFiling
} from '../proto/_gen/scheduler_pb'

export type { SchedulerServiceGRPCClient } from './client'

export enum BusinessEntityType {
  AGENT = 'AGENT',
  PRINCIPAL = 'PRINCIPAL',
  FILING = 'FILING',
  UNKNOWN = 'UNKNOWN'
}

export interface FileProcessingRequest {
  filePath: string
  requestedBy: string
  type: BusinessEntityType
}

export interface FileWorkflowStateRequest {
  runId: string
  workflowId: string
}

export interface WorkflowStateResponse {
  state?: WorkflowResult
  error?: Error
}

export type WorkflowRunResponse = {
  run?: SchedulerWorkflowRun
  error?: Error
}

export type WorkflowRunsResponse = {
  runs?: SchedulerWorkflowRun[]
  error?: Error
}

export interface SchedulerWorkflowRun {
  runId: string
  workflowId: string
  status: string
  requestedby?: string
  type?: string
  externalref?: string
}

export interface Headers {
  headers: string[]
  offset: string
}

export interface BatchResult {
  start: string
  end: string
  batchIndex: string
  results: SuccessResult[]
  errors: ErrorResult[]
}

export interface SuccessResult {
  start: string
  end: string
  resultId: string
}

export interface ErrorResult {
  start: string
  end: string
  error: string
}

export interface WorkflowResult {
  fileName: string
  fileSize: string
  hostId: string
  requestedBy: string
  type: string
  runId: string
  workflowId: string
  processRunId: string
  processWorkflowId: string
  offsets: string[]
  headers?: Headers
  batches: BatchResult[]
}

type Optional<Type> = {
  [Property in keyof Type]?: Type[Property];
};

export interface BusinessEntityRequest {
  id: string
  type: BusinessEntityType
}

type BusinessAgentEntity = Optional<BusinessEntity>
type BusinessPrincipalEntity = Optional<BusinessEntity>
type BusinessFilingEntity = Optional<BusinessEntity>

export interface BusinessEntity {
  type: BusinessEntityType
  entity: BusinessAgentEntity | BusinessPrincipalEntity | BusinessFilingEntity
}

export type BusinessEntityResponse = {
  entity?: BusinessEntity
  error?: Error
}

export const buildFileSignalRequest = (params: FileProcessingRequest) => {
  const { filePath, requestedBy, type } = params
  const req = new FileSignalRequest()
  req.setFilepath(filePath)
  req.setRequestedby(requestedBy)
  const entityType = mapEntityTypeToProto(type)
  if (entityType) req.setType(entityType)
  return req
}

export const buildQueryWorkflowRequest = (params: FileWorkflowStateRequest) => {
  const { runId, workflowId } = params
  const req = new QueryWorkflowRequest()
  req.setRunid(runId)
  req.setWorkflowid(workflowId)
  return req
}

export interface WorkflowRunSearchParams {
  runId?: string
  workflowId?: string
  status?: string
  type?: string
  externalRef?: string
}

export const buildEntityRequest = (params: BusinessEntityRequest) => {
  const { id, type } = params
  const req = new EntityRequest()
  req.setId(id)
  const entityType = mapEntityTypeToProto(type)
  if (entityType) req.setType(entityType)
  return req
}

export const buildSearchRunRequest = (params: WorkflowRunSearchParams) => {
  const { runId, workflowId } = params
  const req = new SearchRunRequest()
  req.setRunid(runId || '')
  req.setWorkflowid(workflowId || '')
  req.setStatus(params.status || '')
  req.setType(params.type || '')
  req.setExternalref(params.externalRef || '')
  return req
}

export const mapProtoToBusinessEntityResponse = (
  entity: EntityResponse
): BusinessEntityResponse => {
  const entityObj = entity.toObject()
  if (entityObj.agent) {
    return {
      entity: {
        type: BusinessEntityType.AGENT,
        entity: mapProtoToBusinessAgent(entity.getAgent())
      }
    }
  } else if (entityObj.principal) {
    return {
      entity: {
        type: BusinessEntityType.PRINCIPAL,
        entity: mapProtoToBusinessPrincipal(entity.getPrincipal())
      }
    }
  } else if (entityObj.filing) {
    return {
      entity: {
        type: BusinessEntityType.FILING,
        entity: mapProtoToBusinessFiling(entity.getFiling())
      }
    }
  } else {
    return {
      error: new Error('unknown entity type')
    }
  }
}

const mapProtoToBusinessAgent = (ag: BusinessAgent | undefined): BusinessAgentEntity => {
  if (!ag) return {} as BusinessAgentEntity
  const bag = {
    id: ag.getId(),
    entityId: ag.getEntityid(),
    name: ag.getName(),
    org: ag.getOrg(),
    firstName: ag.getFirstname(),
    middleName: ag.getMiddlename(),
    lastName: ag.getLastname(),
    address: ag.getAddress(),
    agentType: ag.getAgenttype(),
  } as BusinessAgentEntity
  return bag
}

const mapProtoToBusinessPrincipal = (pr: BusinessPrincipal | undefined): BusinessPrincipalEntity => {
  if (!pr) return {} as BusinessPrincipalEntity
  const prg = {
    id: pr.getId(),
    entityId: pr.getEntityid(),
    name: pr.getName(),
    org: pr.getOrg(),
    firstName: pr.getFirstname(),
    middleName: pr.getMiddlename(),
    lastName: pr.getLastname(),
    address: pr.getAddress(),
    positionType: pr.getPositiontype(),
  } as BusinessPrincipalEntity
  return prg
}

const mapProtoToBusinessFiling = (fl: BusinessFiling | undefined): BusinessFilingEntity => {
  if (!fl) return {} as BusinessFilingEntity
  const bfl = {
    id: fl.getId(),
    entityId: fl.getEntityid(),
    name: fl.getName(),
    initialFilingDate: fl.getInitialfilingdate(),
    jurisdiction: fl.getJurisdiction(),
    status: fl.getStatus(),
    sos: fl.getSos(),
    type: fl.getType(),
    filingType: fl.getFilingtype(),
    foreignName: fl.getForeignname(),
    ftb: fl.getFtb(),
    vcfcf: fl.getVcfcf(),
    suspensionDate: fl.getSuspensiondate(),
    lastFiledNum:  fl.getLastfilednum(),
    lastFiledDate: fl.getLastfileddate(),
    principalAddress: fl.getPrincipaladdress(),
    mailingAddress: fl.getMailingaddress(),
    localAddress: fl.getLocaladdress(),
    managementStructure: fl.getManagementstructure(),
    businessType: fl.getBusinesstype(),
  } as BusinessFilingEntity
  return bfl
}

export const mapEntityTypeToProto = (
  type: BusinessEntityType
): EntityType | undefined => {
  switch (type) {
    case BusinessEntityType.AGENT:
      return EntityType.AGENT
    case BusinessEntityType.PRINCIPAL:
      return EntityType.PRINCIPAL
    case BusinessEntityType.FILING:
      return EntityType.FILING
    default:
      return undefined
  }
}

export const mapProtoToWorkflowRuns = (wfrs: WorkflowRun[]): SchedulerWorkflowRun[] => {
  return wfrs.map(mapProtoToWorkflowRun)
}

export const mapProtoToWorkflowRun = (wfr: WorkflowRun): SchedulerWorkflowRun => {
  const wfrObj = wfr.toObject()
  return {
    runId: wfrObj.runid,
    workflowId: wfrObj.workflowid,
    status: wfrObj.status,
    type: wfrObj.type,
    requestedby: wfrObj.requestedby,
    externalref: wfrObj.externalref
  }
}

export const mapProtoToHeaders = (
  hs: HeaderState | undefined
): Headers | undefined => {
  if (!hs) return undefined
  const hsObj = hs.toObject()
  return {
    headers: hsObj.headersList,
    offset: hsObj.offset
  }
}

export const mapProtoToSuccessResult = (
  srs: SuccessResultState
): SuccessResult => {
  const srsObj = srs.toObject()
  return {
    start: srsObj.start,
    end: srsObj.end,
    resultId: srsObj.resultid
  }
}

export const mapProtoToSuccessResults = (
  srs: SuccessResultState[]
): SuccessResult[] => {
  return srs.map(mapProtoToSuccessResult)
}

export const mapProtoToErrorResult = (ers: ErrorResultState): ErrorResult => {
  const ersObj = ers.toObject()
  return {
    start: ersObj.start,
    end: ersObj.end,
    error: ersObj.error
  }
}

export const mapProtoToBatchResult = (bs: BatchState): BatchResult => {
  const bsObj = bs.toObject()
  return {
    start: bsObj.start,
    end: bsObj.end,
    batchIndex: bsObj.batchindex,
    results: mapProtoToSuccessResults(bs.getResultsList()),
    errors: bs.getErrorsList().map(mapProtoToErrorResult)
  }
}

export const mapProtoToFileWorkflowState = (
  fws: FileWorkflowState
): WorkflowResult => {
  const fwsObj = fws.toObject()

  return {
    fileName: fwsObj.filename,
    fileSize: fwsObj.filesize,
    hostId: fwsObj.hostid,
    requestedBy: fwsObj.requestedby,
    type: fwsObj.type,
    runId: fwsObj.runid,
    workflowId: fwsObj.workflowid,
    processRunId: fwsObj.processrunid,
    processWorkflowId: fwsObj.processworkflowid,
    offsets: fwsObj.offsetsList,
    headers: mapProtoToHeaders(fws.getHeaders()),
    batches: fws.getBatchesList().map(mapProtoToBatchResult)
  }
}

export const mapWorkflowStateResponse = (
  state: FileWorkflowState
): WorkflowStateResponse => {
  return {
    state: mapProtoToFileWorkflowState(state)
  }
}
