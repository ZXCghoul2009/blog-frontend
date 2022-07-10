import React from 'react';

import './Loader.css';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const antIcon = (
    <LoadingOutlined
        style={{
            fontSize: 36,
            display: "flex",
            justifyContent: "center"
        }}
        spin
    />
);

const Loader = () => <Spin indicator={antIcon} />;

export default Loader;