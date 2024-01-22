// package: scheduler.v1
// file: scheduler.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as api_google_rpc_status_pb from "./api/google/rpc/status_pb";

export class WorkflowRun extends jspb.Message { 
    getRunid(): string;
    setRunid(value: string): WorkflowRun;
    getWorkflowid(): string;
    setWorkflowid(value: string): WorkflowRun;
    getStatus(): string;
    setStatus(value: string): WorkflowRun;
    getRequestedby(): string;
    setRequestedby(value: string): WorkflowRun;
    getType(): string;
    setType(value: string): WorkflowRun;
    getExternalref(): string;
    setExternalref(value: string): WorkflowRun;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WorkflowRun.AsObject;
    static toObject(includeInstance: boolean, msg: WorkflowRun): WorkflowRun.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WorkflowRun, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WorkflowRun;
    static deserializeBinaryFromReader(message: WorkflowRun, reader: jspb.BinaryReader): WorkflowRun;
}

export namespace WorkflowRun {
    export type AsObject = {
        runid: string,
        workflowid: string,
        status: string,
        requestedby: string,
        type: string,
        externalref: string,
    }
}

export class FileRequest extends jspb.Message { 
    getRequestedby(): string;
    setRequestedby(value: string): FileRequest;
    getFilename(): string;
    setFilename(value: string): FileRequest;
    getOrg(): string;
    setOrg(value: string): FileRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FileRequest): FileRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FileRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileRequest;
    static deserializeBinaryFromReader(message: FileRequest, reader: jspb.BinaryReader): FileRequest;
}

export namespace FileRequest {
    export type AsObject = {
        requestedby: string,
        filename: string,
        org: string,
    }
}

export class RunResponse extends jspb.Message { 
    getOk(): boolean;
    setOk(value: boolean): RunResponse;

    hasRun(): boolean;
    clearRun(): void;
    getRun(): WorkflowRun | undefined;
    setRun(value?: WorkflowRun): RunResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RunResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RunResponse): RunResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RunResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RunResponse;
    static deserializeBinaryFromReader(message: RunResponse, reader: jspb.BinaryReader): RunResponse;
}

export namespace RunResponse {
    export type AsObject = {
        ok: boolean,
        run?: WorkflowRun.AsObject,
    }
}

export class RunRequest extends jspb.Message { 
    getRunid(): string;
    setRunid(value: string): RunRequest;
    getWorkflowid(): string;
    setWorkflowid(value: string): RunRequest;
    getRequestedby(): string;
    setRequestedby(value: string): RunRequest;
    getType(): string;
    setType(value: string): RunRequest;
    getExternalref(): string;
    setExternalref(value: string): RunRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RunRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RunRequest): RunRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RunRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RunRequest;
    static deserializeBinaryFromReader(message: RunRequest, reader: jspb.BinaryReader): RunRequest;
}

export namespace RunRequest {
    export type AsObject = {
        runid: string,
        workflowid: string,
        requestedby: string,
        type: string,
        externalref: string,
    }
}

export class UpdateRunRequest extends jspb.Message { 
    getStatus(): string;
    setStatus(value: string): UpdateRunRequest;
    getRunid(): string;
    setRunid(value: string): UpdateRunRequest;
    getWorkflowid(): string;
    setWorkflowid(value: string): UpdateRunRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateRunRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateRunRequest): UpdateRunRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateRunRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateRunRequest;
    static deserializeBinaryFromReader(message: UpdateRunRequest, reader: jspb.BinaryReader): UpdateRunRequest;
}

export namespace UpdateRunRequest {
    export type AsObject = {
        status: string,
        runid: string,
        workflowid: string,
    }
}

export class DeleteRunRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): DeleteRunRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteRunRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteRunRequest): DeleteRunRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteRunRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteRunRequest;
    static deserializeBinaryFromReader(message: DeleteRunRequest, reader: jspb.BinaryReader): DeleteRunRequest;
}

export namespace DeleteRunRequest {
    export type AsObject = {
        id: string,
    }
}

export class SearchRunRequest extends jspb.Message { 
    getRunid(): string;
    setRunid(value: string): SearchRunRequest;
    getWorkflowid(): string;
    setWorkflowid(value: string): SearchRunRequest;
    getStatus(): string;
    setStatus(value: string): SearchRunRequest;
    getType(): string;
    setType(value: string): SearchRunRequest;
    getExternalref(): string;
    setExternalref(value: string): SearchRunRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchRunRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SearchRunRequest): SearchRunRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchRunRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchRunRequest;
    static deserializeBinaryFromReader(message: SearchRunRequest, reader: jspb.BinaryReader): SearchRunRequest;
}

export namespace SearchRunRequest {
    export type AsObject = {
        runid: string,
        workflowid: string,
        status: string,
        type: string,
        externalref: string,
    }
}

export class RunsResponse extends jspb.Message { 
    getOk(): boolean;
    setOk(value: boolean): RunsResponse;
    clearRunsList(): void;
    getRunsList(): Array<WorkflowRun>;
    setRunsList(value: Array<WorkflowRun>): RunsResponse;
    addRuns(value?: WorkflowRun, index?: number): WorkflowRun;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RunsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RunsResponse): RunsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RunsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RunsResponse;
    static deserializeBinaryFromReader(message: RunsResponse, reader: jspb.BinaryReader): RunsResponse;
}

export namespace RunsResponse {
    export type AsObject = {
        ok: boolean,
        runsList: Array<WorkflowRun.AsObject>,
    }
}

export class DeleteResponse extends jspb.Message { 
    getOk(): boolean;
    setOk(value: boolean): DeleteResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteResponse): DeleteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteResponse;
    static deserializeBinaryFromReader(message: DeleteResponse, reader: jspb.BinaryReader): DeleteResponse;
}

export namespace DeleteResponse {
    export type AsObject = {
        ok: boolean,
    }
}

export class BusinessAgent extends jspb.Message { 
    getId(): string;
    setId(value: string): BusinessAgent;
    getEntityid(): number;
    setEntityid(value: number): BusinessAgent;
    getName(): string;
    setName(value: string): BusinessAgent;
    getOrg(): string;
    setOrg(value: string): BusinessAgent;
    getFirstname(): string;
    setFirstname(value: string): BusinessAgent;
    getMiddlename(): string;
    setMiddlename(value: string): BusinessAgent;
    getLastname(): string;
    setLastname(value: string): BusinessAgent;
    getAddress(): string;
    setAddress(value: string): BusinessAgent;
    getAgenttype(): string;
    setAgenttype(value: string): BusinessAgent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BusinessAgent.AsObject;
    static toObject(includeInstance: boolean, msg: BusinessAgent): BusinessAgent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BusinessAgent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BusinessAgent;
    static deserializeBinaryFromReader(message: BusinessAgent, reader: jspb.BinaryReader): BusinessAgent;
}

export namespace BusinessAgent {
    export type AsObject = {
        id: string,
        entityid: number,
        name: string,
        org: string,
        firstname: string,
        middlename: string,
        lastname: string,
        address: string,
        agenttype: string,
    }
}

export class BusinessPrincipal extends jspb.Message { 
    getId(): string;
    setId(value: string): BusinessPrincipal;
    getEntityid(): number;
    setEntityid(value: number): BusinessPrincipal;
    getName(): string;
    setName(value: string): BusinessPrincipal;
    getOrg(): string;
    setOrg(value: string): BusinessPrincipal;
    getFirstname(): string;
    setFirstname(value: string): BusinessPrincipal;
    getMiddlename(): string;
    setMiddlename(value: string): BusinessPrincipal;
    getLastname(): string;
    setLastname(value: string): BusinessPrincipal;
    getAddress(): string;
    setAddress(value: string): BusinessPrincipal;
    getPositiontype(): string;
    setPositiontype(value: string): BusinessPrincipal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BusinessPrincipal.AsObject;
    static toObject(includeInstance: boolean, msg: BusinessPrincipal): BusinessPrincipal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BusinessPrincipal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BusinessPrincipal;
    static deserializeBinaryFromReader(message: BusinessPrincipal, reader: jspb.BinaryReader): BusinessPrincipal;
}

export namespace BusinessPrincipal {
    export type AsObject = {
        id: string,
        entityid: number,
        name: string,
        org: string,
        firstname: string,
        middlename: string,
        lastname: string,
        address: string,
        positiontype: string,
    }
}

export class BusinessFiling extends jspb.Message { 
    getId(): string;
    setId(value: string): BusinessFiling;
    getEntityid(): number;
    setEntityid(value: number): BusinessFiling;
    getName(): string;
    setName(value: string): BusinessFiling;
    getInitialfilingdate(): number;
    setInitialfilingdate(value: number): BusinessFiling;
    getJurisdiction(): string;
    setJurisdiction(value: string): BusinessFiling;
    getStatus(): string;
    setStatus(value: string): BusinessFiling;
    getSos(): string;
    setSos(value: string): BusinessFiling;
    getType(): string;
    setType(value: string): BusinessFiling;
    getFilingtype(): string;
    setFilingtype(value: string): BusinessFiling;
    getForeignname(): string;
    setForeignname(value: string): BusinessFiling;
    getFtb(): string;
    setFtb(value: string): BusinessFiling;
    getVcfcf(): string;
    setVcfcf(value: string): BusinessFiling;
    getSuspensiondate(): number;
    setSuspensiondate(value: number): BusinessFiling;
    getLastfilednum(): string;
    setLastfilednum(value: string): BusinessFiling;
    getLastfileddate(): number;
    setLastfileddate(value: number): BusinessFiling;
    getPrincipaladdress(): string;
    setPrincipaladdress(value: string): BusinessFiling;
    getMailingaddress(): string;
    setMailingaddress(value: string): BusinessFiling;
    getLocaladdress(): string;
    setLocaladdress(value: string): BusinessFiling;
    getManagementstructure(): string;
    setManagementstructure(value: string): BusinessFiling;
    getBusinesstype(): string;
    setBusinesstype(value: string): BusinessFiling;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BusinessFiling.AsObject;
    static toObject(includeInstance: boolean, msg: BusinessFiling): BusinessFiling.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BusinessFiling, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BusinessFiling;
    static deserializeBinaryFromReader(message: BusinessFiling, reader: jspb.BinaryReader): BusinessFiling;
}

export namespace BusinessFiling {
    export type AsObject = {
        id: string,
        entityid: number,
        name: string,
        initialfilingdate: number,
        jurisdiction: string,
        status: string,
        sos: string,
        type: string,
        filingtype: string,
        foreignname: string,
        ftb: string,
        vcfcf: string,
        suspensiondate: number,
        lastfilednum: string,
        lastfileddate: number,
        principaladdress: string,
        mailingaddress: string,
        localaddress: string,
        managementstructure: string,
        businesstype: string,
    }
}

export class AddEntityRequest extends jspb.Message { 

    getFieldsMap(): jspb.Map<string, string>;
    clearFieldsMap(): void;
    getType(): EntityType;
    setType(value: EntityType): AddEntityRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddEntityRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddEntityRequest): AddEntityRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddEntityRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddEntityRequest;
    static deserializeBinaryFromReader(message: AddEntityRequest, reader: jspb.BinaryReader): AddEntityRequest;
}

export namespace AddEntityRequest {
    export type AsObject = {

        fieldsMap: Array<[string, string]>,
        type: EntityType,
    }
}

export class EntityRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): EntityRequest;
    getType(): EntityType;
    setType(value: EntityType): EntityRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EntityRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EntityRequest): EntityRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EntityRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EntityRequest;
    static deserializeBinaryFromReader(message: EntityRequest, reader: jspb.BinaryReader): EntityRequest;
}

export namespace EntityRequest {
    export type AsObject = {
        id: string,
        type: EntityType,
    }
}

export class AddEntityResponse extends jspb.Message { 
    getOk(): boolean;
    setOk(value: boolean): AddEntityResponse;

    hasAgent(): boolean;
    clearAgent(): void;
    getAgent(): BusinessAgent | undefined;
    setAgent(value?: BusinessAgent): AddEntityResponse;

    hasPrincipal(): boolean;
    clearPrincipal(): void;
    getPrincipal(): BusinessPrincipal | undefined;
    setPrincipal(value?: BusinessPrincipal): AddEntityResponse;

    hasFiling(): boolean;
    clearFiling(): void;
    getFiling(): BusinessFiling | undefined;
    setFiling(value?: BusinessFiling): AddEntityResponse;

    getTestOneofCase(): AddEntityResponse.TestOneofCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddEntityResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddEntityResponse): AddEntityResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddEntityResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddEntityResponse;
    static deserializeBinaryFromReader(message: AddEntityResponse, reader: jspb.BinaryReader): AddEntityResponse;
}

export namespace AddEntityResponse {
    export type AsObject = {
        ok: boolean,
        agent?: BusinessAgent.AsObject,
        principal?: BusinessPrincipal.AsObject,
        filing?: BusinessFiling.AsObject,
    }

    export enum TestOneofCase {
        TEST_ONEOF_NOT_SET = 0,
        AGENT = 2,
        PRINCIPAL = 3,
        FILING = 4,
    }

}

export class EntityResponse extends jspb.Message { 
    getOk(): boolean;
    setOk(value: boolean): EntityResponse;

    hasAgent(): boolean;
    clearAgent(): void;
    getAgent(): BusinessAgent | undefined;
    setAgent(value?: BusinessAgent): EntityResponse;

    hasPrincipal(): boolean;
    clearPrincipal(): void;
    getPrincipal(): BusinessPrincipal | undefined;
    setPrincipal(value?: BusinessPrincipal): EntityResponse;

    hasFiling(): boolean;
    clearFiling(): void;
    getFiling(): BusinessFiling | undefined;
    setFiling(value?: BusinessFiling): EntityResponse;

    getTestOneofCase(): EntityResponse.TestOneofCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EntityResponse.AsObject;
    static toObject(includeInstance: boolean, msg: EntityResponse): EntityResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EntityResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EntityResponse;
    static deserializeBinaryFromReader(message: EntityResponse, reader: jspb.BinaryReader): EntityResponse;
}

export namespace EntityResponse {
    export type AsObject = {
        ok: boolean,
        agent?: BusinessAgent.AsObject,
        principal?: BusinessPrincipal.AsObject,
        filing?: BusinessFiling.AsObject,
    }

    export enum TestOneofCase {
        TEST_ONEOF_NOT_SET = 0,
        AGENT = 2,
        PRINCIPAL = 3,
        FILING = 4,
    }

}

export class StreamAddEntityResponse extends jspb.Message { 

    hasEntityresponse(): boolean;
    clearEntityresponse(): void;
    getEntityresponse(): AddEntityResponse | undefined;
    setEntityresponse(value?: AddEntityResponse): StreamAddEntityResponse;

    hasError(): boolean;
    clearError(): void;
    getError(): api_google_rpc_status_pb.Status | undefined;
    setError(value?: api_google_rpc_status_pb.Status): StreamAddEntityResponse;

    getTestOneofCase(): StreamAddEntityResponse.TestOneofCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamAddEntityResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StreamAddEntityResponse): StreamAddEntityResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamAddEntityResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamAddEntityResponse;
    static deserializeBinaryFromReader(message: StreamAddEntityResponse, reader: jspb.BinaryReader): StreamAddEntityResponse;
}

export namespace StreamAddEntityResponse {
    export type AsObject = {
        entityresponse?: AddEntityResponse.AsObject,
        error?: api_google_rpc_status_pb.Status.AsObject,
    }

    export enum TestOneofCase {
        TEST_ONEOF_NOT_SET = 0,
        ENTITYRESPONSE = 1,
        ERROR = 2,
    }

}

export class FileSignalRequest extends jspb.Message { 
    getFilepath(): string;
    setFilepath(value: string): FileSignalRequest;
    getRequestedby(): string;
    setRequestedby(value: string): FileSignalRequest;
    getType(): EntityType;
    setType(value: EntityType): FileSignalRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileSignalRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FileSignalRequest): FileSignalRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FileSignalRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileSignalRequest;
    static deserializeBinaryFromReader(message: FileSignalRequest, reader: jspb.BinaryReader): FileSignalRequest;
}

export namespace FileSignalRequest {
    export type AsObject = {
        filepath: string,
        requestedby: string,
        type: EntityType,
    }
}

export class QueryWorkflowRequest extends jspb.Message { 
    getRunid(): string;
    setRunid(value: string): QueryWorkflowRequest;
    getWorkflowid(): string;
    setWorkflowid(value: string): QueryWorkflowRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryWorkflowRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryWorkflowRequest): QueryWorkflowRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryWorkflowRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryWorkflowRequest;
    static deserializeBinaryFromReader(message: QueryWorkflowRequest, reader: jspb.BinaryReader): QueryWorkflowRequest;
}

export namespace QueryWorkflowRequest {
    export type AsObject = {
        runid: string,
        workflowid: string,
    }
}

export class SuccessResultState extends jspb.Message { 
    getStart(): string;
    setStart(value: string): SuccessResultState;
    getEnd(): string;
    setEnd(value: string): SuccessResultState;
    getResultid(): string;
    setResultid(value: string): SuccessResultState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SuccessResultState.AsObject;
    static toObject(includeInstance: boolean, msg: SuccessResultState): SuccessResultState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SuccessResultState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SuccessResultState;
    static deserializeBinaryFromReader(message: SuccessResultState, reader: jspb.BinaryReader): SuccessResultState;
}

export namespace SuccessResultState {
    export type AsObject = {
        start: string,
        end: string,
        resultid: string,
    }
}

export class ErrorResultState extends jspb.Message { 
    getStart(): string;
    setStart(value: string): ErrorResultState;
    getEnd(): string;
    setEnd(value: string): ErrorResultState;
    getError(): string;
    setError(value: string): ErrorResultState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ErrorResultState.AsObject;
    static toObject(includeInstance: boolean, msg: ErrorResultState): ErrorResultState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ErrorResultState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ErrorResultState;
    static deserializeBinaryFromReader(message: ErrorResultState, reader: jspb.BinaryReader): ErrorResultState;
}

export namespace ErrorResultState {
    export type AsObject = {
        start: string,
        end: string,
        error: string,
    }
}

export class HeaderState extends jspb.Message { 
    clearHeadersList(): void;
    getHeadersList(): Array<string>;
    setHeadersList(value: Array<string>): HeaderState;
    addHeaders(value: string, index?: number): string;
    getOffset(): string;
    setOffset(value: string): HeaderState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HeaderState.AsObject;
    static toObject(includeInstance: boolean, msg: HeaderState): HeaderState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HeaderState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HeaderState;
    static deserializeBinaryFromReader(message: HeaderState, reader: jspb.BinaryReader): HeaderState;
}

export namespace HeaderState {
    export type AsObject = {
        headersList: Array<string>,
        offset: string,
    }
}

export class BatchState extends jspb.Message { 
    getStart(): string;
    setStart(value: string): BatchState;
    getEnd(): string;
    setEnd(value: string): BatchState;
    getBatchindex(): string;
    setBatchindex(value: string): BatchState;
    clearResultsList(): void;
    getResultsList(): Array<SuccessResultState>;
    setResultsList(value: Array<SuccessResultState>): BatchState;
    addResults(value?: SuccessResultState, index?: number): SuccessResultState;
    clearErrorsList(): void;
    getErrorsList(): Array<ErrorResultState>;
    setErrorsList(value: Array<ErrorResultState>): BatchState;
    addErrors(value?: ErrorResultState, index?: number): ErrorResultState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchState.AsObject;
    static toObject(includeInstance: boolean, msg: BatchState): BatchState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchState;
    static deserializeBinaryFromReader(message: BatchState, reader: jspb.BinaryReader): BatchState;
}

export namespace BatchState {
    export type AsObject = {
        start: string,
        end: string,
        batchindex: string,
        resultsList: Array<SuccessResultState.AsObject>,
        errorsList: Array<ErrorResultState.AsObject>,
    }
}

export class FileWorkflowState extends jspb.Message { 
    getFilename(): string;
    setFilename(value: string): FileWorkflowState;
    getRequestedby(): string;
    setRequestedby(value: string): FileWorkflowState;
    getRunid(): string;
    setRunid(value: string): FileWorkflowState;
    getWorkflowid(): string;
    setWorkflowid(value: string): FileWorkflowState;
    getProcessrunid(): string;
    setProcessrunid(value: string): FileWorkflowState;
    getProcessworkflowid(): string;
    setProcessworkflowid(value: string): FileWorkflowState;
    getHostid(): string;
    setHostid(value: string): FileWorkflowState;
    getFilesize(): string;
    setFilesize(value: string): FileWorkflowState;
    getType(): string;
    setType(value: string): FileWorkflowState;

    hasHeaders(): boolean;
    clearHeaders(): void;
    getHeaders(): HeaderState | undefined;
    setHeaders(value?: HeaderState): FileWorkflowState;
    clearOffsetsList(): void;
    getOffsetsList(): Array<string>;
    setOffsetsList(value: Array<string>): FileWorkflowState;
    addOffsets(value: string, index?: number): string;
    clearBatchesList(): void;
    getBatchesList(): Array<BatchState>;
    setBatchesList(value: Array<BatchState>): FileWorkflowState;
    addBatches(value?: BatchState, index?: number): BatchState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileWorkflowState.AsObject;
    static toObject(includeInstance: boolean, msg: FileWorkflowState): FileWorkflowState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FileWorkflowState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileWorkflowState;
    static deserializeBinaryFromReader(message: FileWorkflowState, reader: jspb.BinaryReader): FileWorkflowState;
}

export namespace FileWorkflowState {
    export type AsObject = {
        filename: string,
        requestedby: string,
        runid: string,
        workflowid: string,
        processrunid: string,
        processworkflowid: string,
        hostid: string,
        filesize: string,
        type: string,
        headers?: HeaderState.AsObject,
        offsetsList: Array<string>,
        batchesList: Array<BatchState.AsObject>,
    }
}

export class FileWorkflowStateResponse extends jspb.Message { 

    hasState(): boolean;
    clearState(): void;
    getState(): FileWorkflowState | undefined;
    setState(value?: FileWorkflowState): FileWorkflowStateResponse;
    getOk(): boolean;
    setOk(value: boolean): FileWorkflowStateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileWorkflowStateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FileWorkflowStateResponse): FileWorkflowStateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FileWorkflowStateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileWorkflowStateResponse;
    static deserializeBinaryFromReader(message: FileWorkflowStateResponse, reader: jspb.BinaryReader): FileWorkflowStateResponse;
}

export namespace FileWorkflowStateResponse {
    export type AsObject = {
        state?: FileWorkflowState.AsObject,
        ok: boolean,
    }
}

export enum EntityType {
    AGENT = 0,
    PRINCIPAL = 1,
    FILING = 2,
}
