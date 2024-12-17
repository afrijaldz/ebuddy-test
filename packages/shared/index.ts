export interface ProviderData {
  providerId: string
  uid: string
  displayName: string
  email: string
  phoneNumber?: string | number
  photoURL?: string | number
}

export interface StsTokenManager {
  "refreshToken": string
  "accessToken": string
  "expirationTime": number
}

export interface User {
  "uid": string
  "email": string
  "emailVerified": boolean
  "displayName": string
  "isAnonymous": boolean
  "providerData": ProviderData[],
  "stsTokenManager": StsTokenManager,
  "createdAt": string
  "lastLoginAt": string
  "apiKey": string
  "appName": string
}

