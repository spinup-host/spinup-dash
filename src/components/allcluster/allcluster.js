import React, { useEffect } from 'react';
import axios from 'axios';
import { Col, Row, Modal, Input, Button, Divider } from 'antd';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DatabaseForDashboard from '../databases/dbsForDashboard';
import DatabaseVersion from '../dbVersions/dbversions';
import { handleOk } from '../../api/createService';
import { getClusters } from '../../api/listCluster';
import NotificationContainer from '../notifications/container';
import PacmanLoader from 'react-spinners/PacmanLoader';
import shortid from 'shortid';
import './allcluster.css';
import { createNotification } from '../notifications/notify';

const MemoedDatabases = React.memo(DatabaseForDashboard);

const AllCluster = () => {
  let history = useHistory();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [database, setDatabase] = useState('postgres');
  const [version, setVersion] = useState('13');
  const allDbs = ['postgres', 'mysql', 'ectd'];
  const allVersions = [13, 12, 11, 10];
  const [myClusters, setMyClusters] = useState([]);
  const [loadingClusters, setLoadingClusters] = useState(true);
  const [creatingCluster, setCreatingCluster] = useState(false);
  //useEffects here------------

  useEffect(() => {
    async function fetchMyClusters() {
      var res = await getClusters();
      //console.log(res.data);
      setMyClusters(res.data);
      setLoadingClusters(false);
    }
    fetchMyClusters();
  }, []);

  //useEffects ending here -------------

  //functions here-----------
  const getclusterid = async (clustername) => {
    let response = await axios.get(`${process.env.REACT_APP_SERVER_URI}/listcluster`);
    return response.data.filter((clusterobj) => clusterobj.name === clustername)[0].cluster_id;
  };

  const handleCluster = async (clustername) => {
    let clusterid = await getclusterid(clustername);
    localStorage.setItem('currdbname', clustername);
    history.push(`/dashboard/${clusterid}`);
  };

  const listMyclusters = () => {
    //idk y i did this but i did it and its gonna stay this way for a while
    if (myClusters && myClusters.length > 0) {
      return myClusters.map((cluster) => {
        return (
          <Col style={{ margin: '1em' }} onClick={() => handleCluster(cluster.name)}>
            <div
              // onClick={showModal}
              style={{
                borderRadius: '5px',
                width: '200px',
                height: '100px',
                backgroundColor: '#394150',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer'
              }}
            >
              <h2 style={{ color: 'white' }}>{cluster.name}</h2>
            </div>
          </Col>
        );
      });
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleFinish = async () => {
    // console.log(name, database, version);
    createNotification('success', 'Redirecting!');
    setCreatingCluster(true);
    var answer = await handleOk(name, database, version, username, password);
    setCreatingCluster(false);
    setIsModalVisible(false);
    setName('');
    setVersion('13');
    setDatabase('postgresql');
    // console.log(answer.data);
    localStorage.setItem('hostname', answer.data.HostName);
    localStorage.setItem('port', answer.data.Port);
    localStorage.setItem('containerid', answer.data.ContainerID);
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    // window.location.href = `https://app.spinup.host/dashboard/${answer.data.ContainerID}`;
    history.push(`/dashboard/${answer.data.ContainerID}`);
  };

  const handleCancel = () => {
    setName('');
    setVersion('13');
    setDatabase('postgresql');
    setIsModalVisible(false);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleVersion = (e) => {
    setVersion(e.target.value);
  };
  //functions ending here-----------

  return (
    <>
      <Row style={{ marginTop: '3%', color: 'white' }}>
        <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={2} />
        <Col xxl={20} xl={18} lg={18} xs={22} md={20} sm={22}>
          <div>
            <h2 style={{ color: 'white' }}>
              <b>Clusters</b>
            </h2>
            <p>All your clusters will be listed here.</p>
          </div>
          {/* Listing Clusters here! */}
          <Row>
            <Col style={{ margin: '1em' }}>
              <div
                onClick={showModal}
                style={{
                  borderRadius: '5px',
                  width: '200px',
                  height: '100px',
                  backgroundColor: '#394150',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
              >
                <h2 style={{ color: 'white' }}>Add new</h2>
              </div>
            </Col>
            {/* ----Loading clusters animation---- */}
            {loadingClusters ? (
              <Col style={{ margin: '1em' }}>
                <div
                  style={{
                    borderRadius: '5px',
                    width: '200px',
                    height: '100px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
                  }}
                >
                  <PacmanLoader color="white" loading={loadingClusters} size={25} />
                  <p style={{ color: 'white', marginTop: '2.5em' }}>Loading Clusters</p>
                </div>
              </Col>
            ) : null}
            {/* Now we list the user clusters*/}
            {listMyclusters()}
          </Row>
          <Modal
            bodyStyle={{ backgroundColor: '#212936' }}
            visible={isModalVisible}
            title="Add New Cluster"
            onOk={handleFinish}
            onCancel={handleCancel}
            footer={[
              <Button
                style={{
                  backgroundColor: '#42e8e0',
                  color: 'black',
                  border: 'none'
                }}
                key="back"
                onClick={handleCancel}
              >
                Cancel
              </Button>,
              <Button
                style={{
                  backgroundColor: '#42e8e0',
                  color: 'black',
                  border: 'none'
                }}
                key="submit"
                onClick={handleFinish}
              >
                Spin up
              </Button>
            ]}
          >
            <p style={{ color: '#738095' }}>Name your Cluster</p>
            <Input
              defaultValue={name}
              bordered={false}
              className="cluster-name"
              size="large"
              placeholder="Cluster Name"
              onChange={handleName}
              style={{
                outline: 'none',
                backgroundColor: '#212936',
                color: 'white',
                margin: '0',
                padding: '0',
                borderTop: '0px',
                borderLeft: '0px',
                borderRight: '0px',
                borderBottomColor: '#5cfff3'
              }}
            />
            <br />
            <br />
            <p style={{ color: '#738095' }}>Choose database</p>
            <Row>
              {allDbs.map((dbName) => {
                return (
                  <Col span={8}>
                    <button
                      onClick={() => setDatabase(dbName)}
                      style={{
                        border: '0px solid transparent',
                        background: 'transparent',
                        cursor: 'pointer'
                      }}
                      key={shortid.generate()}
                    >
                      {/* <DatabaseForDashboard
                      databaseSelected={database}
                      databaseRendering={dbName}
                    /> */}
                      <MemoedDatabases databaseSelected={database} databaseRendering={dbName} />
                    </button>
                  </Col>
                );
              })}
            </Row>
            <br />
            <p style={{ color: '#738095' }}>Choose Version</p>
            <Row justify="start">
              <select value={version} onChange={handleVersion}>
                <option value="10">10</option>
                <option value="10.20">10.20</option>
                <option value="11">11</option>
                <option value="11.15">11.15</option>
                <option value="12">12</option>
                <option value="12.10">12.10</option>
                <option value="13">13</option>
                <option value="13.6">13.6</option>
                <option value="14">14</option>
                <option value="14.2">14.2</option>
              </select>
            </Row>
            <br />
            <br />
            <p style={{ color: '#738095' }}>Enter Username:</p>
            <Input
              bordered={false}
              className="cluster-username"
              size="large"
              placeholder="Database Username"
              onChange={(e) => setUsername(e.target.value)}
              style={{
                outline: 'none',
                backgroundColor: '#212936',
                color: 'white',
                margin: '0',
                padding: '0',
                borderTop: '0px',
                borderLeft: '0px',
                borderRight: '0px',
                borderBottomColor: '#5cfff3'
              }}
            />
            <br />
            <br />
            <p style={{ color: '#738095' }}>Enter Password:</p>
            <Input
              bordered={false}
              type="password"
              className="cluster-password"
              size="large"
              placeholder="Database Password"
              onChange={(e) => setPassword(e.target.value)}
              style={{
                outline: 'none',
                backgroundColor: '#212936',
                color: 'white',
                margin: '0',
                padding: '0',
                borderTop: '0px',
                borderLeft: '0px',
                borderRight: '0px',
                borderBottomColor: '#5cfff3'
              }}
            />
            {creatingCluster ? (
              <Col style={{ margin: '1em', marginLeft: '110px' }}>
                <div
                  style={{
                    borderRadius: '5px',
                    width: '200px',
                    height: '100px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
                  }}
                >
                  <PacmanLoader color="white" loading={creatingCluster} size={25} />
                  <p style={{ color: 'white', marginTop: '2.5em' }}>Creating Cluster</p>
                </div>
              </Col>
            ) : null}
            <Divider />
          </Modal>
        </Col>
        <Col xxl={1} xl={1} lg={1} md={1} />
      </Row>
      <NotificationContainer />
    </>
  );
};

export default AllCluster;
//original code for all databases before map---(below)
{
  /* <Col span={8}>
              <button
                onClick={() => setDatabase("postgresql")}
                style={{
                  border: "0px solid transparent",
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                <DatabaseForDashboard
                  databaseSelected={database}
                  databaseRendering={"postgresql"}
                />
              </button>
            </Col>
            <Col span={8}>
              <button
                onClick={() => setDatabase("mysql")}
                style={{
                  border: "0px solid transparent",
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                <DatabaseForDashboard
                  databaseSelected={database}
                  databaseRendering={"mysql"}
                />
              </button>
            </Col>
            <Col span={8}>
              <button
                onClick={() => setDatabase("ectd")}
                style={{
                  border: "0px solid transparent",
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                <DatabaseForDashboard
                  databaseSelected={database}
                  databaseRendering={"ectd"}
                />
              </button>
            </Col> */
}
