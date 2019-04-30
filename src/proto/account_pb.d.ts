import * as jspb from "google-protobuf"

export class GetUserInfoByIdRequest extends jspb.Message {
  getUid(): string;
  setUid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserInfoByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserInfoByIdRequest): GetUserInfoByIdRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserInfoByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserInfoByIdRequest;
  static deserializeBinaryFromReader(message: GetUserInfoByIdRequest, reader: jspb.BinaryReader): GetUserInfoByIdRequest;
}

export namespace GetUserInfoByIdRequest {
  export type AsObject = {
    uid: string,
  }
}

export class GetUserInfoResponse extends jspb.Message {
  getUser(): UserInfo | undefined;
  setUser(value?: UserInfo): void;
  hasUser(): boolean;
  clearUser(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserInfoResponse): GetUserInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetUserInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: {}): GetUserInfoResponse;
  static deserializeBinaryFromReader(message: GetUserInfoResponse, reader: jspb.BinaryReader): GetUserInfoResponse;
}

export namespace GetUserInfoResponse {
  export type AsObject = {
    user?: UserInfo.AsObject,
  }
}

export class UserInfo extends jspb.Message {
  getUid(): string;
  setUid(value: string): void;

  getUname(): string;
  setUname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserInfo): UserInfo.AsObject;
  static serializeBinaryToWriter(message: UserInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserInfo;
  static deserializeBinaryFromReader(message: UserInfo, reader: jspb.BinaryReader): UserInfo;
}

export namespace UserInfo {
  export type AsObject = {
    uid: string,
    uname: string,
  }
}

