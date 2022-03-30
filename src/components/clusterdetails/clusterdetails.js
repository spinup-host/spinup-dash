import React, { useState } from 'react';

import { Row, Col, Tag, Divider, Input, Card, Button } from 'antd';
import { useHistory } from 'react-router-dom';

import {
  CopyOutlined,
  DatabaseOutlined,
  SettingOutlined,
  LineChartOutlined,
  SyncOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  CloseCircleOutlined
} from '@ant-design/icons';
import NotificationContainer from '../notifications/container';
import { createNotification } from '../notifications/notify';

//some css for selected and unselected buttons (config , databses and monitoring)
const selectedElement = {
  marginLeft: '40px',
  color: '#738095',
  borderBottom: '3px solid #ff9580',
  color: '#ffffff',
  fontWeight: '500'
};

const ClusterDetails = () => {
  let history = useHistory();
  const [host, setHost] = useState(localStorage.getItem('hostname'));
  const [database, setDatabase] = useState('postgres');
  const [port, setPort] = useState(localStorage.getItem('port'));
  const [username, setUsername] = useState(localStorage.getItem('username'));
  const [passwordChanging, setPasswordChanging] = useState('');
  const [realPassword, setRealPassword] = useState(localStorage.getItem('password'));
  const [confirm, setConfirm] = useState('');
  const [changePasswordMode, setChangePasswordMode] = useState(false);
  const [isBackup, setIsBackup] = useState(true);
  const handleBackup = () => {
    history.push('/backup');
  };
  return (
    <>
      <Row style={{ marginTop: '50px' }}>
        <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={2} />
        <Col xxl={6} xl={6} lg={6} xs={8} md={8} sm={8} style={{ display: 'flex' }}>
          <h2 style={{ color: 'white' }}>
            <b>Spinup</b>
          </h2>
          <Tag style={{ height: '23px', marginTop: '7px', marginLeft: '20px' }} color="#f4f5f7">
            <b style={{ color: 'black' }}>Not Connected</b>
          </Tag>
          <p
            style={{
              color: '#3fd8d7',
              marginTop: '9px',
              marginLeft: '15px',
              cursor: 'pointer'
            }}
          >
            <SyncOutlined /> Refresh
          </p>
        </Col>
        <Col xxl={11} xl={11} lg={11} xs={9} md={9} sm={9}>
          <Tag
            color="#2c383c"
            style={{ float: 'right', borderRadius: '5px' }}
            onClick={() => {
              createNotification('success', 'Copied Link!');
            }}
          >
            <h2 style={{ color: '#dcdce5', marginTop: '9px', cursor: 'pointer' }}>
              <CopyOutlined /> Copy Host Link
            </h2>
          </Tag>
        </Col>
        <Col xxl={4} xl={4} lg={4} md={1} />
      </Row>
      <Row style={{ marginTop: '20px' }}>
        <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={2} />
        <Col xxl={17} xl={17} lg={17} xs={20} md={20} sm={20} style={{ display: 'flex' }}>
          <Button
            style={{
              border: '0px solid transparent',
              background: 'transparent'
            }}
            onClick={() => {
              createNotification('working', 'Working on it!!');
            }}
          >
            <h3 style={{ color: '#738095' }}>
              <b>
                <LineChartOutlined /> Monitoring
              </b>
            </h3>
          </Button>
          <Button
            style={{
              border: '0px solid transparent',
              background: 'transparent'
            }}
            onClick={() => {
              createNotification('working', 'Working on it!!');
            }}
          >
            <h3 style={{ marginLeft: '40px', color: '#738095' }}>
              <b>
                <DatabaseOutlined /> Databases
              </b>
            </h3>
          </Button>
          <button
            style={{
              border: '0px solid transparent',
              background: 'transparent'
            }}
          >
            <h3>
              <b style={selectedElement}>
                <SettingOutlined /> Configurations
              </b>
            </h3>
          </button>
          <button
            style={{
              border: '0px solid transparent',
              background: 'transparent'
            }}
            onClick={handleBackup}
          >
            <h3>
              <b style={{ color: 'white', marginLeft: '20px' }}>
                <SettingOutlined /> Backup
              </b>
            </h3>
          </button>
        </Col>
        <Col xxl={4} xl={4} lg={4} xs={2} md={1} sm={2} />
      </Row>
      <Divider style={{ backgroundColor: '#313b4d' }} />
      <Row>
      <Col xxl={1} xl={1} lg={1} xs={1} md={1} sm={1} />
      <Col xxl={16} xl={16} lg={16} xs={22} md={22} sm={22}>
      
      <Row>
        <Col xxl={3} xl={3} lg={3} xs={1} md={1} sm={1} />
        <Col xxl={18} xl={18} lg={18} xs={22} md={22} sm={22}>
          <p style={{ color: '#738095' }}>Host</p>
          <Input
            bordered={false}
            style={{
              backgroundColor: '#394150',
              color: 'white',
              height: '60px',
              borderRadius: '5px'
            }}
            disabled
            value={host}
          />
        </Col>
        <Col xxl={3} xl={3} lg={3} xs={2} md={2} sm={2} />
      </Row>
      <Row style={{marginTop: "2%"}}>
        <Col xxl={3} xl={3} lg={3} xs={1} md={1} sm={1} />
        <Col xxl={8} xl={8} lg={8} xs={22} md={22} sm={22}>
          <p style={{ color: '#738095' }}>Database Name</p>
          <Input
            bordered={false}
            style={{
              backgroundColor: '#394150',
              color: 'white',
              height: '40px',
              borderRadius: '5px'
            }}
            disabled
            value={database}
          />
        </Col>
        <Col xxl={2} xl={2} lg={2} xs={1} md={1} sm={1} />
        <Col xxl={0} xl={0} lg={0} xs={1} md={1} sm={1} />
        <Col xxl={8} xl={8} lg={8} xs={22} md={22} sm={22}>
          <p style={{ color: '#738095' }}>Port</p>
          <Input
            bordered={false}
            style={{
              backgroundColor: '#394150',
              color: 'white',
              height: '40px',
              borderRadius: '5px'
            }}
            disabled
            value={port}
          />
        </Col>
        <Col xxl={3} xl={3} lg={3} xs={1} md={1} sm={1} />
      </Row>
      <Row>
        <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={2} />
        <Col xxl={9} xl={9} lg={9} xs={20} md={10} sm={20}>
          <Divider style={{ backgroundColor: '#313b4d', marginTop: '50px' }} />
        </Col>
        <Col xxl={9} xl={9} lg={9} md={8} />
        <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={2} />
      </Row>
      <Row>
      <Col xxl={3} xl={3} lg={3} xs={1} md={1} sm={1} />
      <Col xxl={8} xl={8} lg={8} xs={22} md={22} sm={22}>
          <p style={{ color: '#738095' }}>Username</p>
          <Input
            bordered={false}
            style={{
              backgroundColor: '#394150',
              color: 'white',
              height: '40px',
              borderRadius: '5px'
            }}
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: '25px' }}>
        <Col xxl={3} xl={3} lg={3} xs={1} md={1} sm={1} />
        <Col xxl={8} xl={8} lg={8} xs={22} md={22} sm={22}>
          <p style={{ color: '#738095' }}>
            {!changePasswordMode ? 'Password' : 'Enter new password'}
          </p>
          <Input.Password
            bordered={false}
            style={{
              backgroundColor: '#394150',
              color: 'white',
              height: '40px',
              borderRadius: '5px'
            }}
            iconRender={(visible) =>
              visible ? (
                <EyeTwoTone style={{ color: 'white' }} />
              ) : (
                <EyeInvisibleOutlined style={{ color: 'white' }} />
              )
            }
            value={changePasswordMode ? passwordChanging : realPassword}
            onChange={(e) => {
              if (changePasswordMode) {
                setPasswordChanging(e.target.value);
              }
            }}
          />
        </Col>
        {changePasswordMode ? (
          <div>
            <Col xxl={1} xl={1} lg={1} xs={2} md={3} sm={2} />
            <Card
              bordered={false}
              style={{
                backgroundColor: '#212936',
                color: 'white',
                lineHeight: '1',
                borderLeft: '1px solid #283141'
              }}
            >
              <p>Must be atleast :</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;10-16 alpha-numeric characters</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;1 uppercase letter (A,B,..Z)</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;1 lowercase letter (a,b,..z)</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;1 number (0-9)</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;1 special character(-,_,$,#,!)</p>
            </Card>
          </div>
        ) : null}
      </Row>
      <Row style={{ marginTop: '-120px' }}>
      <Col xxl={3} xl={3} lg={3} xs={1} md={1} sm={1} />
      <Col xxl={8} xl={8} lg={8} xs={22} md={22} sm={22}>
          {changePasswordMode ? (
            <div>
              <p style={{ color: '#738095' }}>Confirm password</p>
              <Input.Password
                bordered={false}
                style={{
                  backgroundColor: '#394150',
                  color: 'white',
                  height: '40px',
                  borderRadius: '5px',
                  border: passwordChanging !== confirm ? '#e84c42 3px solid' : null
                }}
                iconRender={(visible) =>
                  visible ? (
                    <EyeTwoTone style={{ color: 'white' }} />
                  ) : (
                    <EyeInvisibleOutlined style={{ color: 'white' }} />
                  )
                }
                value={confirm}
                onChange={(e) => {
                  setConfirm(e.target.value);
                }}
              />
            </div>
          ) : null}
        </Col>
        <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={2} />
      </Row>

      {confirm !== passwordChanging ? (
        <div>
          <Row style={{ marginTop: '0.5em' }}>
            <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={2} />
            <p style={{ color: '#e84c42', fontFamily: 'SFProText-Regular' }}>
              {' '}
              <CloseCircleOutlined style={{ color: '#e84c42', marginRight: '0.3em' }} />
              Passwords don't match
            </p>
          </Row>
        </div>
      ) : null}

      <Row style={!changePasswordMode ? { marginTop: '155px' } : { marginTop: '25px' }}>
      <Col xxl={3} xl={3} lg={3} xs={1} md={1} sm={1} />
        <Button
          type="text"
          style={{
            color: 'black',
            backgroundColor: '#42e8e0',
            opacity: confirm !== passwordChanging ? 0.5 : 1.0
          }}
          disabled={confirm !== passwordChanging}
          onClick={() => {
            if (changePasswordMode) {
              setRealPassword(passwordChanging);
              //api call and notifiaction create here

              setChangePasswordMode(false);
            } else {
              setChangePasswordMode(true);
            }
          }}
        >
          <b>{changePasswordMode ? 'Save Changes' : 'Change Password'}</b>
        </Button>
        {changePasswordMode ? (
          <div>
            <Button
              type="text"
              style={{
                color: 'black',
                backgroundColor: '#212936'
              }}
              onClick={() => {
                setPasswordChanging('');
                setConfirm('');
                setChangePasswordMode(false);
              }}
            >
              <b style={{ color: '#42e8e0' }}>Cancel</b>
            </Button>
          </div>
        ) : null}
      </Row>
      <Row>
      <Col xxl={3} xl={3} lg={3} xs={1} md={1} sm={1} />
      <Col xxl={8} xl={8} lg={8} xs={22} md={22} sm={22}>
          <Divider style={{ backgroundColor: '#313b4d', marginTop: '30px' }} />
        </Col>
      </Row>
      <NotificationContainer />
      </Col>
      <Col xxl={0} xl={0} lg={0} xs={1} md={1} sm={1} />
        <Col xxl={0} xl={0} lg={0} xs={2} md={2} sm={2} />
        <Col style={{ marginTop: '1%' }} xxl={6} xl={6} lg={6} xs={21} md={21} sm={21}>
          <Card
            style={{
              backgroundColor: '#283141',
              border: 'none'
            }}
            headStyle={{
              borderBottom: 'none'
            }}
          >
            <p style={{ color: '#6abfaf', fontSize: '18px' }}>
              Connect to your cluster from anywhere
            </p>
            <p style={{ color: '#a0aec8' }}>Open Terminal on your device</p>
            <p style={{ color: '#a0aec8' }}>Copy paste your host link & press enter</p>
            <p style={{ color: '#a0aec8' }}>Enter your password. voila!</p>
            <p style={{ color: '#a0aec8' }}>Create as much as dbs you want!</p>
          </Card>
        </Col>
        <Col xxl={1} xl={1} lg={1} xs={1} md={1} sm={1} />
      </Row>
    </>
  );
};

export default ClusterDetails;
