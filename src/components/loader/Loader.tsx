import React from 'react';
import {Spin} from "antd";
import {LoadingOutlined} from "@ant-design/icons";

const Loader = () => {
    return (
        <Spin indicator={<LoadingOutlined spin style={{fontSize: 64, color: "black"}}/>}
              style={{
                  width: '100vw',
                  height: '90%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
              }}>
        </Spin>
    );
};

export default Loader;