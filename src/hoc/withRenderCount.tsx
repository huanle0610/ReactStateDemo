import React, { useRef } from 'react';
import { Badge } from 'antd';

const withRenderCount = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const ComponentWithRenderCount: React.FC<P> = (props) => {
    const renderCount = useRef(0);
    renderCount.current += 1;

    return (
      <div
        style={{
          position: 'relative',
          padding: '16px',
          border: '1px solid #ddd',
        }}
      >
        <Badge
          count={renderCount.current}
          style={{
            backgroundColor: '#52c41a',
            position: 'absolute',
            top: 0,
            right: 0,
            transform: 'translate(50%, -50%)',
          }}
          title="Render Count"
        />
        <WrappedComponent {...props} />
      </div>
    );
  };

  return ComponentWithRenderCount;
};

export default withRenderCount;
