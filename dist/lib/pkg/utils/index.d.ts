/// <reference types="node" />
import * as grpc from '@grpc/grpc-js';
export declare const getCredentials: (rootCert: Buffer, clientKey: Buffer, clientCert: Buffer) => grpc.ChannelCredentials;
export declare const commonInterceptor: (options: grpc.CallOptions, nextCall: any) => any;
