/**
 * @fileoverview gRPC-Web generated client stub for grpc
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import {
  GetUserInfoByIdRequest,
  GetUserInfoResponse} from './account_pb';

export class AccountClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; }) {
    if (!options) options = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGetUserInfoById = new grpcWeb.AbstractClientBase.MethodInfo(
    GetUserInfoResponse,
    (request: GetUserInfoByIdRequest) => {
      return request.serializeBinary();
    },
    GetUserInfoResponse.deserializeBinary
  );

  getUserInfoById(
    request: GetUserInfoByIdRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetUserInfoResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/grpc.Account/GetUserInfoById',
      request,
      metadata || {},
      this.methodInfoGetUserInfoById,
      callback);
  }

}

