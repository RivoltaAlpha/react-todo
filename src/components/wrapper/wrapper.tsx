import { WrapperProps } from '../../types/types';

const Wrapper= ({ children }: WrapperProps) => {
  return (
  <div className="wrapper">{children}</div>
  )
};

export default Wrapper;
