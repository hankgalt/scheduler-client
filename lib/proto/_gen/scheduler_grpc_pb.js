// GENERATED CODE -- DO NOT EDIT!

'use strict'
var grpc = require('@grpc/grpc-js')
var scheduler_pb = require('./scheduler_pb.js')
var api_google_rpc_status_pb = require('./api/google/rpc/status_pb.js')

function serialize_scheduler_v1_AddEntityRequest(arg) {
  if (!(arg instanceof scheduler_pb.AddEntityRequest)) {
    throw new Error('Expected argument of type scheduler.v1.AddEntityRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_scheduler_v1_AddEntityRequest(buffer_arg) {
  return scheduler_pb.AddEntityRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  )
}

function serialize_scheduler_v1_AddEntityResponse(arg) {
  if (!(arg instanceof scheduler_pb.AddEntityResponse)) {
    throw new Error('Expected argument of type scheduler.v1.AddEntityResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_scheduler_v1_AddEntityResponse(buffer_arg) {
  return scheduler_pb.AddEntityResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  )
}

function serialize_scheduler_v1_DeleteEntityRequest(arg) {
  if (!(arg instanceof scheduler_pb.DeleteEntityRequest)) {
    throw new Error(
      'Expected argument of type scheduler.v1.DeleteEntityRequest'
    )
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_scheduler_v1_DeleteEntityRequest(buffer_arg) {
  return scheduler_pb.DeleteEntityRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  )
}

function serialize_scheduler_v1_DeleteResponse(arg) {
  if (!(arg instanceof scheduler_pb.DeleteResponse)) {
    throw new Error('Expected argument of type scheduler.v1.DeleteResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_scheduler_v1_DeleteResponse(buffer_arg) {
  return scheduler_pb.DeleteResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  )
}

function serialize_scheduler_v1_DeleteRunRequest(arg) {
  if (!(arg instanceof scheduler_pb.DeleteRunRequest)) {
    throw new Error('Expected argument of type scheduler.v1.DeleteRunRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_scheduler_v1_DeleteRunRequest(buffer_arg) {
  return scheduler_pb.DeleteRunRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  )
}

function serialize_scheduler_v1_FileSignalRequest(arg) {
  if (!(arg instanceof scheduler_pb.FileSignalRequest)) {
    throw new Error('Expected argument of type scheduler.v1.FileSignalRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_scheduler_v1_FileSignalRequest(buffer_arg) {
  return scheduler_pb.FileSignalRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  )
}

function serialize_scheduler_v1_FileWorkflowStateResponse(arg) {
  if (!(arg instanceof scheduler_pb.FileWorkflowStateResponse)) {
    throw new Error(
      'Expected argument of type scheduler.v1.FileWorkflowStateResponse'
    )
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_scheduler_v1_FileWorkflowStateResponse(buffer_arg) {
  return scheduler_pb.FileWorkflowStateResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  )
}

function serialize_scheduler_v1_QueryWorkflowRequest(arg) {
  if (!(arg instanceof scheduler_pb.QueryWorkflowRequest)) {
    throw new Error(
      'Expected argument of type scheduler.v1.QueryWorkflowRequest'
    )
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_scheduler_v1_QueryWorkflowRequest(buffer_arg) {
  return scheduler_pb.QueryWorkflowRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  )
}

function serialize_scheduler_v1_RunRequest(arg) {
  if (!(arg instanceof scheduler_pb.RunRequest)) {
    throw new Error('Expected argument of type scheduler.v1.RunRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_scheduler_v1_RunRequest(buffer_arg) {
  return scheduler_pb.RunRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_scheduler_v1_RunResponse(arg) {
  if (!(arg instanceof scheduler_pb.RunResponse)) {
    throw new Error('Expected argument of type scheduler.v1.RunResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_scheduler_v1_RunResponse(buffer_arg) {
  return scheduler_pb.RunResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_scheduler_v1_RunsResponse(arg) {
  if (!(arg instanceof scheduler_pb.RunsResponse)) {
    throw new Error('Expected argument of type scheduler.v1.RunsResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_scheduler_v1_RunsResponse(buffer_arg) {
  return scheduler_pb.RunsResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_scheduler_v1_SearchRunRequest(arg) {
  if (!(arg instanceof scheduler_pb.SearchRunRequest)) {
    throw new Error('Expected argument of type scheduler.v1.SearchRunRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_scheduler_v1_SearchRunRequest(buffer_arg) {
  return scheduler_pb.SearchRunRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  )
}

function serialize_scheduler_v1_StreamAddEntityResponse(arg) {
  if (!(arg instanceof scheduler_pb.StreamAddEntityResponse)) {
    throw new Error(
      'Expected argument of type scheduler.v1.StreamAddEntityResponse'
    )
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_scheduler_v1_StreamAddEntityResponse(buffer_arg) {
  return scheduler_pb.StreamAddEntityResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  )
}

function serialize_scheduler_v1_UpdateRunRequest(arg) {
  if (!(arg instanceof scheduler_pb.UpdateRunRequest)) {
    throw new Error('Expected argument of type scheduler.v1.UpdateRunRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_scheduler_v1_UpdateRunRequest(buffer_arg) {
  return scheduler_pb.UpdateRunRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  )
}

var SchedulerService = (exports.SchedulerService = {
  createRun: {
    path: '/scheduler.v1.Scheduler/CreateRun',
    requestStream: false,
    responseStream: false,
    requestType: scheduler_pb.RunRequest,
    responseType: scheduler_pb.RunResponse,
    requestSerialize: serialize_scheduler_v1_RunRequest,
    requestDeserialize: deserialize_scheduler_v1_RunRequest,
    responseSerialize: serialize_scheduler_v1_RunResponse,
    responseDeserialize: deserialize_scheduler_v1_RunResponse
  },
  updateRun: {
    path: '/scheduler.v1.Scheduler/UpdateRun',
    requestStream: false,
    responseStream: false,
    requestType: scheduler_pb.UpdateRunRequest,
    responseType: scheduler_pb.RunResponse,
    requestSerialize: serialize_scheduler_v1_UpdateRunRequest,
    requestDeserialize: deserialize_scheduler_v1_UpdateRunRequest,
    responseSerialize: serialize_scheduler_v1_RunResponse,
    responseDeserialize: deserialize_scheduler_v1_RunResponse
  },
  getRun: {
    path: '/scheduler.v1.Scheduler/GetRun',
    requestStream: false,
    responseStream: false,
    requestType: scheduler_pb.RunRequest,
    responseType: scheduler_pb.RunResponse,
    requestSerialize: serialize_scheduler_v1_RunRequest,
    requestDeserialize: deserialize_scheduler_v1_RunRequest,
    responseSerialize: serialize_scheduler_v1_RunResponse,
    responseDeserialize: deserialize_scheduler_v1_RunResponse
  },
  deleteRun: {
    path: '/scheduler.v1.Scheduler/DeleteRun',
    requestStream: false,
    responseStream: false,
    requestType: scheduler_pb.DeleteRunRequest,
    responseType: scheduler_pb.DeleteResponse,
    requestSerialize: serialize_scheduler_v1_DeleteRunRequest,
    requestDeserialize: deserialize_scheduler_v1_DeleteRunRequest,
    responseSerialize: serialize_scheduler_v1_DeleteResponse,
    responseDeserialize: deserialize_scheduler_v1_DeleteResponse
  },
  searchRuns: {
    path: '/scheduler.v1.Scheduler/SearchRuns',
    requestStream: false,
    responseStream: false,
    requestType: scheduler_pb.SearchRunRequest,
    responseType: scheduler_pb.RunsResponse,
    requestSerialize: serialize_scheduler_v1_SearchRunRequest,
    requestDeserialize: deserialize_scheduler_v1_SearchRunRequest,
    responseSerialize: serialize_scheduler_v1_RunsResponse,
    responseDeserialize: deserialize_scheduler_v1_RunsResponse
  },
  addEntity: {
    path: '/scheduler.v1.Scheduler/AddEntity',
    requestStream: false,
    responseStream: false,
    requestType: scheduler_pb.AddEntityRequest,
    responseType: scheduler_pb.AddEntityResponse,
    requestSerialize: serialize_scheduler_v1_AddEntityRequest,
    requestDeserialize: deserialize_scheduler_v1_AddEntityRequest,
    responseSerialize: serialize_scheduler_v1_AddEntityResponse,
    responseDeserialize: deserialize_scheduler_v1_AddEntityResponse
  },
  deleteEntity: {
    path: '/scheduler.v1.Scheduler/DeleteEntity',
    requestStream: false,
    responseStream: false,
    requestType: scheduler_pb.DeleteEntityRequest,
    responseType: scheduler_pb.DeleteResponse,
    requestSerialize: serialize_scheduler_v1_DeleteEntityRequest,
    requestDeserialize: deserialize_scheduler_v1_DeleteEntityRequest,
    responseSerialize: serialize_scheduler_v1_DeleteResponse,
    responseDeserialize: deserialize_scheduler_v1_DeleteResponse
  },
  addBusinessEntities: {
    path: '/scheduler.v1.Scheduler/AddBusinessEntities',
    requestStream: true,
    responseStream: true,
    requestType: scheduler_pb.AddEntityRequest,
    responseType: scheduler_pb.StreamAddEntityResponse,
    requestSerialize: serialize_scheduler_v1_AddEntityRequest,
    requestDeserialize: deserialize_scheduler_v1_AddEntityRequest,
    responseSerialize: serialize_scheduler_v1_StreamAddEntityResponse,
    responseDeserialize: deserialize_scheduler_v1_StreamAddEntityResponse
  },
  processFileSignalWorkflow: {
    path: '/scheduler.v1.Scheduler/ProcessFileSignalWorkflow',
    requestStream: false,
    responseStream: false,
    requestType: scheduler_pb.FileSignalRequest,
    responseType: scheduler_pb.RunResponse,
    requestSerialize: serialize_scheduler_v1_FileSignalRequest,
    requestDeserialize: deserialize_scheduler_v1_FileSignalRequest,
    responseSerialize: serialize_scheduler_v1_RunResponse,
    responseDeserialize: deserialize_scheduler_v1_RunResponse
  },
  queryFileWorkflowState: {
    path: '/scheduler.v1.Scheduler/QueryFileWorkflowState',
    requestStream: false,
    responseStream: false,
    requestType: scheduler_pb.QueryWorkflowRequest,
    responseType: scheduler_pb.FileWorkflowStateResponse,
    requestSerialize: serialize_scheduler_v1_QueryWorkflowRequest,
    requestDeserialize: deserialize_scheduler_v1_QueryWorkflowRequest,
    responseSerialize: serialize_scheduler_v1_FileWorkflowStateResponse,
    responseDeserialize: deserialize_scheduler_v1_FileWorkflowStateResponse
  }
})

exports.SchedulerClient = grpc.makeGenericClientConstructor(SchedulerService)
