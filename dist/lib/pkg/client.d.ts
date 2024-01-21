import type * as grpc from '@grpc/grpc-js';
import { SchedulerClient } from '../proto/_gen/scheduler_grpc_pb';
export declare function getChannelCredentials(): grpc.ChannelCredentials;
declare const schedulerClient: SchedulerClient;
export type SchedulerServiceGRPCClient = typeof schedulerClient;
export default schedulerClient;
