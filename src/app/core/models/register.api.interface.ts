export interface RegisterApiInterface {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
}

export interface RegisterApiResponseInterface {
  user: UserDataRegisterApiResponseInterface;
  access_token: string;
  refresh_token: string;
}

export interface UserDataRegisterApiResponseInterface {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  created_at: string;
  password: string;
}
