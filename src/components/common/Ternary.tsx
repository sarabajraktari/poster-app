import { ReactElement, ReactNode } from "react";

interface TernaryProps {
  condition: boolean;
  children: ReactNode;
  fallback: ReactNode;
}

export const Ternary = ({
  condition,
  children,
  fallback,
}: TernaryProps): ReactElement =>
  condition ? <>{children}</> : <>{fallback}</>;
