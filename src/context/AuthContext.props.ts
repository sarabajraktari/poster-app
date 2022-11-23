import { UserProps } from "@interfaces";

export type Nullable<T> = T | null;
export interface AuthContextProps {
  user: Nullable<UserProps>;
  error: Nullable<string>;
  signup: (data: UserProps) => void;
  logout: () => void;
  login: (data: UserProps) => void;
}
