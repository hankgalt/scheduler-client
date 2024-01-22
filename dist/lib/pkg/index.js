"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapWorkflowStateResponse = exports.mapProtoToFileWorkflowState = exports.mapProtoToBatchResult = exports.mapProtoToErrorResult = exports.mapProtoToSuccessResults = exports.mapProtoToSuccessResult = exports.mapProtoToHeaders = exports.mapProtoToWorkflowRun = exports.mapProtoToWorkflowRuns = exports.mapEntityTypeToProto = exports.mapProtoToBusinessEntityResponse = exports.buildSearchRunRequest = exports.buildEntityRequest = exports.buildQueryWorkflowRequest = exports.buildFileSignalRequest = exports.BusinessEntityType = void 0;
const scheduler_pb_1 = require("../proto/_gen/scheduler_pb");
var BusinessEntityType;
(function (BusinessEntityType) {
    BusinessEntityType["AGENT"] = "AGENT";
    BusinessEntityType["PRINCIPAL"] = "PRINCIPAL";
    BusinessEntityType["FILING"] = "FILING";
    BusinessEntityType["UNKNOWN"] = "UNKNOWN";
})(BusinessEntityType || (exports.BusinessEntityType = BusinessEntityType = {}));
const buildFileSignalRequest = (params) => {
    const { filePath, requestedBy, type } = params;
    const req = new scheduler_pb_1.FileSignalRequest();
    req.setFilepath(filePath);
    req.setRequestedby(requestedBy);
    const entityType = (0, exports.mapEntityTypeToProto)(type);
    if (entityType)
        req.setType(entityType);
    return req;
};
exports.buildFileSignalRequest = buildFileSignalRequest;
const buildQueryWorkflowRequest = (params) => {
    const { runId, workflowId } = params;
    const req = new scheduler_pb_1.QueryWorkflowRequest();
    req.setRunid(runId);
    req.setWorkflowid(workflowId);
    return req;
};
exports.buildQueryWorkflowRequest = buildQueryWorkflowRequest;
const buildEntityRequest = (params) => {
    const { id, type } = params;
    const req = new scheduler_pb_1.EntityRequest();
    req.setId(id);
    const entityType = (0, exports.mapEntityTypeToProto)(type);
    if (entityType)
        req.setType(entityType);
    return req;
};
exports.buildEntityRequest = buildEntityRequest;
const buildSearchRunRequest = (params) => {
    const { runId, workflowId } = params;
    const req = new scheduler_pb_1.SearchRunRequest();
    req.setRunid(runId || '');
    req.setWorkflowid(workflowId || '');
    req.setStatus(params.status || '');
    req.setType(params.type || '');
    req.setExternalref(params.externalRef || '');
    return req;
};
exports.buildSearchRunRequest = buildSearchRunRequest;
const mapProtoToBusinessEntityResponse = (entity) => {
    const entityObj = entity.toObject();
    if (entityObj.agent) {
        return {
            entity: {
                type: BusinessEntityType.AGENT,
                entity: mapProtoToBusinessAgent(entity.getAgent())
            }
        };
    }
    else if (entityObj.principal) {
        return {
            entity: {
                type: BusinessEntityType.PRINCIPAL,
                entity: mapProtoToBusinessPrincipal(entity.getPrincipal())
            }
        };
    }
    else if (entityObj.filing) {
        return {
            entity: {
                type: BusinessEntityType.FILING,
                entity: mapProtoToBusinessFiling(entity.getFiling())
            }
        };
    }
    else {
        return {
            error: new Error('unknown entity type')
        };
    }
};
exports.mapProtoToBusinessEntityResponse = mapProtoToBusinessEntityResponse;
const mapProtoToBusinessAgent = (ag) => {
    if (!ag)
        return {};
    const bag = {
        id: ag.getId(),
        entityId: String(ag.getEntityid()),
        name: ag.getName(),
        org: ag.getOrg(),
        firstName: ag.getFirstname(),
        middleName: ag.getMiddlename(),
        lastName: ag.getLastname(),
        address: ag.getAddress(),
        agentType: ag.getAgenttype(),
    };
    return bag;
};
const mapProtoToBusinessPrincipal = (pr) => {
    if (!pr)
        return {};
    const prg = {
        id: pr.getId(),
        entityId: String(pr.getEntityid()),
        name: pr.getName(),
        org: pr.getOrg(),
        firstName: pr.getFirstname(),
        middleName: pr.getMiddlename(),
        lastName: pr.getLastname(),
        address: pr.getAddress(),
        positionType: pr.getPositiontype(),
    };
    return prg;
};
const mapProtoToBusinessFiling = (fl) => {
    if (!fl)
        return {};
    const bfl = {
        id: fl.getId(),
        entityId: String(fl.getEntityid()),
        name: fl.getName(),
        initialFilingDate: fl.getInitialfilingdate(),
        jurisdiction: fl.getJurisdiction(),
        status: fl.getStatus(),
        sos: fl.getSos(),
        type: fl.getType(),
        filingType: fl.getFilingtype(),
        foreignName: fl.getForeignname(),
        ftb: fl.getFtb(),
        vcfcf: fl.getVcfcf(),
        suspensionDate: fl.getSuspensiondate(),
        lastFiledNum: fl.getLastfilednum(),
        lastFiledDate: fl.getLastfileddate(),
        principalAddress: fl.getPrincipaladdress(),
        mailingAddress: fl.getMailingaddress(),
        localAddress: fl.getLocaladdress(),
        managementStructure: fl.getManagementstructure(),
        businessType: fl.getBusinesstype(),
    };
    return bfl;
};
const mapEntityTypeToProto = (type) => {
    switch (type) {
        case BusinessEntityType.AGENT:
            return scheduler_pb_1.EntityType.AGENT;
        case BusinessEntityType.PRINCIPAL:
            return scheduler_pb_1.EntityType.PRINCIPAL;
        case BusinessEntityType.FILING:
            return scheduler_pb_1.EntityType.FILING;
        default:
            return undefined;
    }
};
exports.mapEntityTypeToProto = mapEntityTypeToProto;
const mapProtoToWorkflowRuns = (wfrs) => {
    return wfrs.map(exports.mapProtoToWorkflowRun);
};
exports.mapProtoToWorkflowRuns = mapProtoToWorkflowRuns;
const mapProtoToWorkflowRun = (wfr) => {
    const wfrObj = wfr.toObject();
    return {
        runId: wfrObj.runid,
        workflowId: wfrObj.workflowid,
        status: wfrObj.status,
        type: wfrObj.type,
        requestedby: wfrObj.requestedby,
        externalref: wfrObj.externalref
    };
};
exports.mapProtoToWorkflowRun = mapProtoToWorkflowRun;
const mapProtoToHeaders = (hs) => {
    if (!hs)
        return undefined;
    const hsObj = hs.toObject();
    return {
        headers: hsObj.headersList,
        offset: hsObj.offset
    };
};
exports.mapProtoToHeaders = mapProtoToHeaders;
const mapProtoToSuccessResult = (srs) => {
    const srsObj = srs.toObject();
    return {
        start: srsObj.start,
        end: srsObj.end,
        resultId: srsObj.resultid
    };
};
exports.mapProtoToSuccessResult = mapProtoToSuccessResult;
const mapProtoToSuccessResults = (srs) => {
    return srs.map(exports.mapProtoToSuccessResult);
};
exports.mapProtoToSuccessResults = mapProtoToSuccessResults;
const mapProtoToErrorResult = (ers) => {
    const ersObj = ers.toObject();
    return {
        start: ersObj.start,
        end: ersObj.end,
        error: ersObj.error
    };
};
exports.mapProtoToErrorResult = mapProtoToErrorResult;
const mapProtoToBatchResult = (bs) => {
    const bsObj = bs.toObject();
    return {
        start: bsObj.start,
        end: bsObj.end,
        batchIndex: bsObj.batchindex,
        results: (0, exports.mapProtoToSuccessResults)(bs.getResultsList()),
        errors: bs.getErrorsList().map(exports.mapProtoToErrorResult)
    };
};
exports.mapProtoToBatchResult = mapProtoToBatchResult;
const mapProtoToFileWorkflowState = (fws) => {
    const fwsObj = fws.toObject();
    return {
        fileName: fwsObj.filename,
        fileSize: fwsObj.filesize,
        hostId: fwsObj.hostid,
        requestedBy: fwsObj.requestedby,
        type: fwsObj.type,
        runId: fwsObj.runid,
        workflowId: fwsObj.workflowid,
        processRunId: fwsObj.processrunid,
        processWorkflowId: fwsObj.processworkflowid,
        offsets: fwsObj.offsetsList,
        headers: (0, exports.mapProtoToHeaders)(fws.getHeaders()),
        batches: fws.getBatchesList().map(exports.mapProtoToBatchResult)
    };
};
exports.mapProtoToFileWorkflowState = mapProtoToFileWorkflowState;
const mapWorkflowStateResponse = (state) => {
    return {
        state: (0, exports.mapProtoToFileWorkflowState)(state)
    };
};
exports.mapWorkflowStateResponse = mapWorkflowStateResponse;
