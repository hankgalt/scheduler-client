import type { EntityResponse } from '../proto/_gen/scheduler_pb'
import { mapProtoToBusinessEntityResponse, buildEntityRequest } from './index'
import type {
  BusinessEntityResponse,
  BusinessEntityRequest,
  SchedulerServiceGRPCClient
} from './index'

export async function getEntity(
  client: SchedulerServiceGRPCClient,
  params: BusinessEntityRequest
): Promise<BusinessEntityResponse> {
  return await new Promise<BusinessEntityResponse>((resolve, reject) => {
    const pReq = buildEntityRequest(params)

    try {
      client.getEntity(pReq, (err, res: EntityResponse) => {
        if (err != null) {
          console.error('getEntity() - request error: ', { err })
          reject(err)
        } else {
          if (res.getOk()) {
            resolve(mapProtoToBusinessEntityResponse(res))
          } else {
            console.error(
              'getEntity() - error getting entity'
            )
            reject(new Error('error getting entity'))
          }
        }
      })
    } catch (err) {
      console.error('getEntity() - system error: ', { err })
      reject(err)
    }
  })
}
