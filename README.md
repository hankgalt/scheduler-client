# scheduler-client

### dev notes

- update `lib/proto/scheduler.proto`
- update `lib/proto/api/**/*.proto`
- update `PROTO_SOURCE` in `scripts/build-proto.sh` for each proto file folder & run `yarn build:proto`
  - `PROTO_SOURCE="./lib/proto/*.proto"`
  - `PROTO_SOURCE="./lib/proto/api/google/rpc/*.proto"`
- `rm -rf lib/proto/_gen/api/google/rpc && mkdir -p lib/proto/_gen/api/google/rpc`
- `mv lib/proto/api/google/rpc/_gen/*.* lib/proto/_gen/api/google/rpc && rm -rf lib/proto/api/google/rpc/_gen`
