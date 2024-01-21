#!/bin/bash

BASEDIR=$(dirname "$0")

# PROTO_SOURCE="./lib/proto/*.proto"
PROTO_SOURCE="./lib/proto/api/google/rpc/*.proto"
echo "PROTO_SOURCE: $PROTO_SOURCE"
PROTO_BASE=$(dirname "$PROTO_SOURCE")
echo "PROTO_BASE: $PROTO_BASE"
PROTO_DEST="$PROTO_BASE/_gen"
echo "PROTO_DEST: $PROTO_DEST"

mkdir -p ${PROTO_DEST}

cd ${BASEDIR}/../

# JavaScript code generation
# yarn run grpc_tools_node_protoc --version
yarn run grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=grpc_js:${PROTO_DEST} \
    --js_out=import_style=commonjs,binary:${PROTO_DEST} \
    --grpc_out=grpc_js:${PROTO_DEST} \
    -I ${PROTO_BASE} ${PROTO_SOURCE}
