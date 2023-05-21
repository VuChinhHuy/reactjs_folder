import { Card } from "antd";
import { checkFileIsMp, getName } from "../helpers/helperMethods";
import {FileImageOutlined, VideoCameraOutlined } from "@ant-design/icons";
export const FileInformation = (props: any) => {
 const name = getName(props.data.path);
 const icon = checkFileIsMp(name?? '') ? <VideoCameraOutlined /> :<FileImageOutlined />;
 return (<>
  <Card hoverable
    >
   {icon}
   <p>{name}</p>
  </Card>
 </>);
}