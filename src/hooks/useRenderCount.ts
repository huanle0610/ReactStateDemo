import { useRef } from 'react';

const useRenderCount = () => {
  const renderCount = useRef(0);
  renderCount.current += 1;
  return renderCount.current;
};

export default useRenderCount;
