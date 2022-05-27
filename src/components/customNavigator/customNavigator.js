import { Row, Col, Button } from 'antd';
import { DatabaseOutlined, SettingOutlined, LineChartOutlined } from '@ant-design/icons';
import { createNotification } from '../notifications/notify';

import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CustomNavigation = () => {
  let history = useHistory();
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(window.location.pathname);
  }, []);

  const handleBackup = () => {
    history.push('/backup');
  };
  const handleConfig = () => {
    let uuid = localStorage.getItem('containerid');
    history.push(`/dashboard/${uuid}`);
  };
  return (
    <>
      <Row style={{ marginTop: '1%' }}>
        <Col xxl={3} xl={3} lg={3} xs={2} md={2} sm={2} />
        <Col xxl={2} xl={2} lg={3} xs={10} md={10} sm={10}>
          <Button
            style={{
              border: '0px solid transparent',
              background: 'transparent'
            }}
            onClick={() => {
              createNotification('working', 'Working on it!!');
            }}>
            <h3 style={{ color: '#738095' }}>
              <b>
                <LineChartOutlined /> Monitoring
              </b>
            </h3>
          </Button>
        </Col>
        <Col xxl={2} xl={2} lg={3} xs={10} md={10} sm={10}>
          <Button
            style={{
              border: '0px solid transparent',
              background: 'transparent'
            }}
            onClick={() => {
              createNotification('working', 'Working on it!!');
            }}>
            <h3 style={{ color: '#738095' }}>
              <b>
                <DatabaseOutlined /> Databases
              </b>
            </h3>
          </Button>
        </Col>
        <Col xxl={0} xl={0} lg={0} xs={2} md={2} sm={2} />
        <Col xxl={0} xl={0} lg={0} xs={2} md={2} sm={2} />
        <Col xxl={2} xl={2} lg={3} xs={10} md={10} sm={10}>
          <Button
            style={{
              border: '0px solid transparent',
              background: 'transparent'
            }}
            onClick={handleConfig}>
            <h3>
              <b
                style={
                  currentUrl.includes('dashboard')
                    ? { borderBottom: '3px solid #ff9580', color: '#ffffff', fontWeight: '500' }
                    : { color: 'white' }
                }>
                <SettingOutlined /> Configurations
              </b>
            </h3>
          </Button>
        </Col>
        <Col xxl={2} xl={2} lg={3} xs={10} md={10} sm={10}>
          <Button
            style={{
              border: '0px solid transparent',
              background: 'transparent'
            }}
            onClick={handleBackup}>
            <h3>
              <b
                style={
                  currentUrl.includes('backup')
                    ? { borderBottom: '3px solid #ff9580', color: '#ffffff', fontWeight: '500' }
                    : { color: 'white' }
                }>
                <SettingOutlined /> Backup
              </b>
            </h3>
          </Button>
        </Col>
      </Row>
      ;
    </>
  );
};

export default CustomNavigation;
