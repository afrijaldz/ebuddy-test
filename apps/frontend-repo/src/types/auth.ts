import { ApiResponse } from "./api-response";

interface Metadata {
  lastSignInTime: null | string;
  creationTime: string;
  lastRefreshTime: null | string;
}

interface ProviderData {
  providerId: string;
  uid: string;
  displayName: string;
  email: string;
  phoneNumber: string;
  photoURL: string;
}

export type AuthRegister = {
  uid: string;
  emailVerified: boolean;
  disabled: boolean;
  metadata: Metadata;
  tokensValidAfterTime: string;
  providerData: ProviderData[];
};

interface Token {
  refreshToken: string;
  accessToken: string;
  expirationTime: number;
}

export type AuthLogin = {
  uid: string;
  email: string;
  emailVerified: boolean;
  displayName: string;
  isAnonymous: boolean;
  providerData: ProviderData[];
  stsTokenManager: Token;
  createdAt: string;
  lastLoginAt: string;
  apiKey: string;
  appName: string;
};

export type ResponseAuthRegister = ApiResponse<AuthRegister>;
export type ResponseAuthLogin = ApiResponse<AuthLogin>;
