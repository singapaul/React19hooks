import { forwardRef } from "react";

export const ForwardRefInput = forwardRef(({...props }, ref) => (
  <div>
    <input ref={ref} {...props} />
  </div>
));


ForwardRefInput.displayName = 'ForwardRefInput';


// @post React 19

export const NewInput = (props, ref) => {
  return (
    <div>
    <input ref={ref} {...props} />
  </div>
  )
}