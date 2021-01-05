export interface UserI {
  _id: string
  name: string
  email: string
  isAdmin?: boolean
  token?: string
}
export interface UserInfo {
  userInfo: UserI
}
type UserRegister = {
  userInfo: UserI
}
