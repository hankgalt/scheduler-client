import * as grpc from '@grpc/grpc-js'

export const getCredentials = (
  rootCert: Buffer,
  clientKey: Buffer,
  clientCert: Buffer
): grpc.ChannelCredentials => {
  return grpc.credentials.combineChannelCredentials(
    grpc.ChannelCredentials.createSsl(rootCert, clientKey, clientCert),
    grpc.credentials.createFromMetadataGenerator(function (args, callback) {
      const metadata = new grpc.Metadata()
      metadata.add('service-client', 'web-client')
      callback(null, metadata)
    })
  )
}

export const commonInterceptor = (
  options: grpc.CallOptions,
  nextCall: any
): any => {
  return new grpc.InterceptingCall(nextCall(options), {
    start: function (metadata, listener, next) {
      const newListener = {
        onReceiveMetadata: function (metadata: grpc.Metadata, next: any) {
          next(metadata)
        },
        onReceiveMessage: function (message: any, next: any) {
          next(message)
        },
        onReceiveStatus: function (status: grpc.StatusObject, next: any) {
          next(status)
        }
      }
      next(metadata, newListener)
    },
    sendMessage: function (message, next) {
      next(message)
    },
    halfClose: function (next) {
      next()
    },
    cancel: function (next) {
      next()
    }
  })
}
