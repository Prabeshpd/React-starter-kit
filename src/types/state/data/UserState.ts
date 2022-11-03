interface User {
  readonly accessToken: string;
  readonly refreshToken: string;
  readonly isLoggedIn: boolean;
  readonly error: {
    readonly code: string;
    readonly message: string;
  };
  user: {
    readonly id: number;
    readonly email: string;
    readonly lastName: string;
    readonly username: string;
    readonly firstName: string;
    readonly createdAt: string;
    readonly isActive: boolean;
    readonly updatedAt: string;
  };
}

export default User;
