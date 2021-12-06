import { useState } from 'react';

import Button from './components/Button';
import Input from './components/Input';
import Heading from './components/Heading/Heading';
import Box from './components/Box/Box';
import Row from './components/Row';
import Col from './components/Col';
import Checkbox from './components/Checkbox';
import Text from './components/Text';

import './App.css';
import { IconClose, IconSettings } from './components/icons';

const INPUT_ROW = [
  {
    label: 'Ticks',
    profit: 75,
    loss: 25,
  },
  {
    label: 'Price',
    profit: 48700.75,
    loss: 48699.75,
  },
  {
    label: '$',
    profit: 0.00,
    loss: 0.00,
  },
  {
    label: '%',
    profit: 0.00,
    loss: 0.00,
  }
];

function App() {
  const [type, setType] = useState('brand');

  return (
    <div className="root">
      <Box className="modal">
        <Row
          size={300}
          grid
          gridColumns="1fr 1fr"
        >
          <Col>
            <Heading>BTCUSD</Heading>
          </Col>
          <Col justifyContent="flex-end">
            <IconSettings />
            <IconClose />
          </Col>
        </Row>

        <Row
          size={300}
          grid
          gridColumns="1fr 60px 1fr"
          gridTemplate="'col1 col2 col3'"
        >
          <Col gridArea="col1">
            <Button
              colors="gray"
              full
              onClick={() => setType(type === 'brand' ? 'gray' : 'brand')}
            >
              Sell
            </Button>
          </Col>
          <Col gridArea="col2" justifyContent="center">
            <Text element="span">0.1</Text>
          </Col>
          <Col gridArea="col3">
            <Button colors={type} full>
              Buy
            </Button>
          </Col>
        </Row>

        <Row size={100}>
          <Heading size="m">
            Quantity
          </Heading>
        </Row>

        <Row size={400}>
          <Input placeholder={75} />
        </Row>

        <Row
          size={200}
          grid
          gridColumns="1fr 60px 1fr"
          gridTemplate="'col1 col2 col3'"
        >
          <Col gridArea="col1">
            <Checkbox id="takeProfit" label="Take profit" />
          </Col>
          <Col gridArea="col3">
            <Checkbox id="stopLoss" label="Stop loss" />
          </Col>
        </Row>

        {
          INPUT_ROW.map((item, index) => (
            <Row
              size={index === (INPUT_ROW.length - 1) ? 400 : 200}
              grid
              gridColumns="1fr 60px 1fr"
              gridTemplate="'col1 col2 col3'"
            >
              <Col gridArea="col1">
                <Input placeholder={item.profit} />
              </Col>
              <Col gridArea="col2" justifyContent="center">
                {item.label}
              </Col>
              <Col gridArea="col3">
                <Input placeholder={item.loss} />
              </Col>
            </Row>
          ))
        }

        <Row>
          <Button colors={type} full>
            Buy BTCUSD
          </Button>
        </Row>
      </Box>

    </div>
  );
}

export default App;
