import type * as grpc from '@grpc/grpc-js'
import * as fs from 'fs'
import * as path from 'path'
import { SchedulerClient } from '../proto/_gen/scheduler_grpc_pb'
import { getCredentials, commonInterceptor } from './utils'

export function getChannelCredentials(): grpc.ChannelCredentials {
  const rootCert = fs.readFileSync(
    path.resolve(`${process.env.SCHEDULER_CA_CERT_PATH ?? ''}`)
  )
  const clientCert = fs.readFileSync(
    path.resolve(`${process.env.SCHEDULER_CLIENT_CERT_PATH ?? ''}`)
  )
  const clientKey = fs.readFileSync(
    path.resolve(`${process.env.SCHEDULER_CLIENT_KEY_PATH ?? ''}`)
  )

  return getCredentials(rootCert, clientKey, clientCert)
}

console.log('Scheduler service host: ', process.env.SCHEDULER_SERVICE_HOST)
const schedulerClient = new SchedulerClient(
  process.env.SCHEDULER_SERVICE_HOST ?? '',
  getChannelCredentials(),
  { interceptors: [commonInterceptor] }
)

export type SchedulerServiceGRPCClient = typeof schedulerClient

export default schedulerClient
