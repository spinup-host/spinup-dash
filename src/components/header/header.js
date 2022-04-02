import { Row, Col, Tag } from 'antd';

import {
    CopyOutlined,
    SyncOutlined,
  } from '@ant-design/icons';
  import { createNotification } from '../notifications/notify';


const CustomHeader = () => {
    return (
    <>
    <Row style={{ marginTop: '50px' }}>
        <Col xxl={3} xl={3} lg={3} xs={2} md={2} sm={2} />
        <Col xxl={6} xl={6} lg={6} xs={15} md={15} sm={15} style={{display: "flex"}}>
          <h2 style={{ color: 'white' }}>
            <b>Spinup</b>
          </h2>
          <Tag style={{ height: '60%', marginTop: "1.2%", marginLeft: "1%" }} color="#f4f5f7">
            <b style={{ color: 'black' }}>Not Connected</b>
          </Tag>
          <h3
            style={{
              color: '#3fd8d7',
              marginTop: '1%',
              marginLeft: '1%',
              alignContent: "left",
              cursor: 'pointer'
            }}
          >
            <SyncOutlined /> Refresh
          </h3>
        </Col>
        <Col xxl={8} xl={8} lg={8} xs={7} md={0} sm={7} />
        <Col xxl={0} xl={0} lg={0} xs={2} md={0} sm={2} />
        <Col xxl={4} xl={4} lg={4} xs={5} md={5} sm={5}>
          <Tag
            color="#2c383c"
            style={{ borderRadius: '5px' }}
            onClick={() => {
              createNotification('success', 'Copied Link!');
            }}
          >
            <h2 style={{ color: '#dcdce5', marginTop: '0.3%', cursor: 'pointer' }}>
              <CopyOutlined /> Copy Host Link
            </h2>
          </Tag>
        </Col>
        <Col xxl={0} xl={0} lg={0} xs={15} md={0} sm={15} />
        <Col xxl={3} xl={3} lg={3} xs={2} md={2} sm={2} />
      </Row>
     </> 
    )
}

export default CustomHeader;