import { ApiResponse } from "./api-response";

interface Metadata {
  lastSignInTime: null | string;
  creationTime: string;
  lastRefreshTime: null | string;
}

export type AuthRegister = {
  uid: string;
  emailVerified: boolean;
  disabled: boolean;
  metadata: Metadata;
  tokensValidAfterTime: string;
  providerData: string[] | number[];
};

export type ResponseAuthRegister = ApiResponse<AuthRegister>;
