import React, { useState } from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';
import ProportionalFunction from '../components/ProportionalFunction';

const ProportionalFunctionPage: React.FC = () => {
  const [k, setK] = useState(2); // Initial slope
  const [b, setB] = useState(4); // Initial intercept

  return (
    <div style={{ padding: '16px' }}>
      <h1>Proportional Function</h1>
      <Row gutter={16} style={{ marginBottom: '16px' }}>
        <Col span={12}>
          <label>Slope (k):</label>
          <Slider
            min={-10}
            max={10}
            step={0.1}
            value={k}
            onChange={(value) => setK(value)}
          />
          <InputNumber
            min={-10}
            max={10}
            step={0.1}
            value={k}
            onChange={(value) => setK(value || 0)}
            style={{ marginLeft: '16px' }}
          />
        </Col>
        <Col span={12}>
          <label>Intercept (b):</label>
          <Slider
            min={-10}
            max={10}
            step={0.1}
            value={b}
            onChange={(value) => setB(value)}
          />
          <InputNumber
            min={-10}
            max={10}
            step={0.1}
            value={b}
            onChange={(value) => setB(value || 0)}
            style={{ marginLeft: '16px' }}
          />
        </Col>
      </Row>
      <ProportionalFunction k={k} b={b} />
    </div>
  );
};

export default ProportionalFunctionPage;
