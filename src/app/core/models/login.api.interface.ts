export interface LoginApiInterface {
  email: string;
  password: string;
}

export interface LoginApiResponseInterface {
  access_token: string
  token_type: string
  user: UserDataLoginApiResponseInterface
  refresh_token: string
}

export interface UserDataLoginApiResponseInterface {
  email: string
  id: number
  created_at: string
  password: string
}
