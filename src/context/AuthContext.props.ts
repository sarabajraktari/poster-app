import { UserProps } from "interfaces/User.props";

export type Nullable<T> = T | null;
export interface AuthContextProps {
    user: Nullable<UserProps>;
    logout: () => void;
    login: (data: UserProps) => void;
}