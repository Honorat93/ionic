export interface RegisterApiInterface {
  email: string;
  password: string;
}

export interface RegisterApiResponseInterface {
  user: UserDataRegisterApiResponseInterface;
  access_token: string;
  refresh_token: string;
}

export interface UserDataRegisterApiResponseInterface {
  email: string;
  id: number;
  created_at: string;
  password: string;
}
