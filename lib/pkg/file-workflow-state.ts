import type { FileWorkflowStateResponse } from '../proto/_gen/scheduler_pb'
import { mapProtoToFileWorkflowState, buildQueryWorkflowRequest } from './index'
import type {
  FileWorkflowStateRequest,
  WorkflowStateResponse,
  SchedulerServiceGRPCClient
} from './index'

export async function fileWorkflowState(
  client: SchedulerServiceGRPCClient,
  params: FileWorkflowStateRequest
): Promise<WorkflowStateResponse> {
  return await new Promise<WorkflowStateResponse>((resolve, reject) => {
    const pReq = buildQueryWorkflowRequest(params)

    try {
      client.queryFileWorkflowState(
        pReq,
        (err, res: FileWorkflowStateResponse) => {
          if (err != null) {
            console.error('fileWorkflowState() - request error: ', { err })
            reject(err)
          } else {
            const state = res.getState()
            if (state != null) {
              resolve({ state: mapProtoToFileWorkflowState(state) })
            } else {
              console.error('fileWorkflowState() - no workflow state found')
              reject(new Error('no workflow state found'))
            }
          }
        }
      )
    } catch (err) {
      console.error('fileWorkflowState() - system error, %o', { err })
      reject(err)
    }
  })
}
