import User from './User';

export interface LoginResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
  zendeskToken: string;
  sessionStartedOn: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}
