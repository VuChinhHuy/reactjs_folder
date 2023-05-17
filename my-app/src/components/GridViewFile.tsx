import React from 'react';
import { Card, List } from "antd";
// import { VideoCameraTwoTone } from "@ant-design/icon";
// import {
//   getName
// } from "/Users/vuhuy/Project/reactjs_folder/my-app/src/helpers/helperMethods";

export const GridViewFile = (props: any) => {
  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 6,
        xxl: 3,
      }}
      dataSource={props.data}
      renderItem={(item) => (
        <List.Item>
          <Card>
          
            </Card>
        </List.Item>
      )}
    />
  );
};
