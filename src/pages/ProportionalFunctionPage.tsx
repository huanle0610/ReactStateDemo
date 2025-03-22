import React, { useState } from 'react';
import { Slider, InputNumber, Row, Col, Tag, Flex } from 'antd';
import ProportionalFunction from '../components/ProportionalFunction';

const ProportionalFunctionPage: React.FC = () => {
  const [k, setK] = useState(2); // Initial slope
  const [b, setB] = useState(4); // Initial intercept

  return (
    <div style={{ padding: '16px' }}>
      <h1>Proportional Function</h1>
      <Flex>
        {[
          [1, 0],
          [1, 1],
          [1, 5],
          [1, -1],
          [1, -5],
          [1, -10],
          [-1, 0],
          [2, 0],
          [4, 0],
          [80, 0],
        ].map((item, index) => (
          <Tag
            onClick={() => {
              setK(item[0]);
              setB(item[1]);
            }}
            style={{ cursor: 'pointer' }}
            key={index}
          >
            y = {item[0] < 0 ? `-` : ''}
            {Math.abs(item[0]) !== 1 ? `${item[0]}` : ''}x{' '}
            {item[1] !== 0
              ? `${item[1] < 0 ? `-` : '+'} ${Math.abs(item[1])}`
              : ''}
          </Tag>
        ))}
      </Flex>
      <Row gutter={16} style={{ marginBottom: '16px' }}>
        <Col span={12}>
          <label>Slope (k):</label>
          <Slider
            min={-100}
            max={100}
            step={0.1}
            value={k}
            onChange={(value) => setK(value)}
            marks={{
              [-100]: '-100',
              0: '0', // Add zero as a marker
              100: '100',
            }}
          />
          <InputNumber
            min={-100}
            max={100}
            step={0.1}
            value={k}
            onChange={(value) => setK(value || 0)}
            style={{ marginLeft: '16px' }}
          />
        </Col>
        <Col span={12}>
          <label>Intercept (b):</label>
          <Slider
            min={-100}
            max={100}
            step={0.1}
            value={b}
            onChange={(value) => setB(value)}
            marks={{
              [-100]: '-100',
              0: '0', // Add zero as a marker
              100: '100',
            }}
          />
          <InputNumber
            min={-100}
            max={100}
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
