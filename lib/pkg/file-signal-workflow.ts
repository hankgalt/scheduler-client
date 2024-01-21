import type { RunResponse } from '../proto/_gen/scheduler_pb'
import { mapProtoToWorkflowRun, buildFileSignalRequest } from './index'
import type {
  WorkflowRunResponse,
  FileProcessingRequest,
  SchedulerServiceGRPCClient
} from './index'

export async function fileSignalWorkflow(
  client: SchedulerServiceGRPCClient,
  params: FileProcessingRequest
): Promise<WorkflowRunResponse> {
  return await new Promise<WorkflowRunResponse>((resolve, reject) => {
    const pReq = buildFileSignalRequest(params)

    try {
      client.processFileSignalWorkflow(pReq, (err, res: RunResponse) => {
        if (err != null) {
          console.error('fileSignalWorkflow() - request error: ', { err })
          reject(err)
        } else {
          const run = res.getRun()
          if (res.getOk() && run != null) {
            resolve({ run: mapProtoToWorkflowRun(run) })
          } else {
            console.error(
              'fileSignalWorkflow() - error starting file signal workflow'
            )
            reject(new Error('error starting file signal workflow'))
          }
        }
      })
    } catch (err) {
      console.error('fileSignalWorkflow() - system error: ', { err })
      reject(err)
    }
  })
}
