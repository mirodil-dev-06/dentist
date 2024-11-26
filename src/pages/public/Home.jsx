import React, { useState } from 'react';
import Gallery from '../../components/gallery/Gallery';
import { ArrowUpOutlined } from '@ant-design/icons';
import { Col, Row, Button, Typography, Space, Statistic } from 'antd';
import { Container } from '../../utils/Container';
import '../../assets/styles/Home.scss';

const { Title, Text } = Typography;

const Home = () => {
  const [size, setSize] = useState('large'); // default is 'middle'

  return (
    <Container>
      <div className='home'>
        <Row gutter={16}>
          <Col span={12}>
            <Button shape="round" size={size}>KEEP SMILING</Button>
            <Title className='home__title'>Your Smile, Our Top Priority!</Title>
            <Text className='home__subtitle'>Comprehensive Dental Care for All Ages in a Comfortable, Friendly Environment</Text>
            <br /><br /><br />
            <Space size={[12, 16]} wrap>
              <Button type="primary" shape="round" size={size}>
                Book Now <ArrowUpOutlined />
              </Button>
              <Button shape="round" size="large"> Explore Our Services <ArrowUpOutlined /> </Button>

            </Space>
            <br /><br /><br /><br />
            <Row gutter={16}>
              <Col span={12}>
              <Statistic className="custom-statistic" value={15} title="Market experience" />
              </Col>
              <Col span={12}>
                <Statistic title="Emergency service" value={24} suffix="/7" />
              </Col>
            </Row>


          </Col>
          <Col span={12}>
            <Gallery />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Home;
