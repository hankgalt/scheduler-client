import type { RunsResponse } from '../proto/_gen/scheduler_pb'
import { mapProtoToWorkflowRuns, buildSearchRunRequest } from './index'
import type {
  WorkflowRunsResponse,
  WorkflowRunSearchParams,
  SchedulerServiceGRPCClient
} from './index'

export async function searchWorkflowRuns(
  client: SchedulerServiceGRPCClient,
  params: WorkflowRunSearchParams
): Promise<WorkflowRunsResponse> {
  return await new Promise<WorkflowRunsResponse>((resolve, reject) => {
    const pReq = buildSearchRunRequest(params)

    try {
      client.searchRuns(pReq, (err, res: RunsResponse) => {
        if (err != null) {
          console.error('searchWorkflowRuns() - request error: ', { err })
          reject(err)
        } else {
          const runs = res.getRunsList()
          if (res.getOk() && runs.length > 0) {
            resolve({ runs: mapProtoToWorkflowRuns(runs) })
          } else {
            console.error(
              'searchWorkflowRuns() - error searching workflow runs'
            )
            reject(new Error('error searching workflow runs'))
          }
        }
      })
    } catch (err) {
      console.error('searchWorkflowRuns() - system error: ', { err })
      reject(err)
    }
  })
}
