import { ReactElement, ReactNode } from "react";

export const If = ({
  condition,
  children,
}: {
  condition: boolean;
  children: ReactNode;
}): ReactElement => (condition ? <>{children}</> : <></>);
