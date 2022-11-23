import { ReactElement } from "react";

export const Alert = ({ message }: { message: string }): ReactElement => (
  <div className="w-full bg-red-100 p-4 rounded-md mb-5">
    <p className="text-red-500">{message}</p>
  </div>
);
