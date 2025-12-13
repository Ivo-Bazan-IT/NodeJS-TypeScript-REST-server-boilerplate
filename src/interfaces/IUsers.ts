export interface IUser {
  name: String;
  email: String;
  password?: String;
  img?: String;
  rol: "ADMIN_ROLE" | "USER_ROLE";
  estado: Boolean;
  google?: Boolean;
}
