import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: IProps) => {
  return (
    <div className="max-w-[1440px] mx-auto w-full px-10">
      {className ? <div className={className}>{children}</div> : children}
    </div>
  );
};

export default Container;
