import type { BusinessEntityResponse, BusinessEntityRequest, SchedulerServiceGRPCClient } from './index';
export declare function getEntity(client: SchedulerServiceGRPCClient, params: BusinessEntityRequest): Promise<BusinessEntityResponse>;
