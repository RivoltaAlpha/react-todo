import { WrapperProps } from '../../types/types';
import "./wrapper.scss"
const Wrapper= ({ children }: WrapperProps) => {
  return (
  <div className="wrapper">{children}</div>
  )
};

export default Wrapper;
