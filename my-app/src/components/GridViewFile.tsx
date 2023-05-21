import { List } from "antd";
import { FileInformation } from "./FileInformation";

export const GridViewFile = (props: any) => {
  return( <List style={{margin:'0.5rem'}}
  grid={{
    gutter: 16,
    xs: 1,
    sm: 2,
    md: 4,
    lg: 4,
    xl: 6,
    xxl: 3,
  }}
  dataSource={props.data?? null}
  renderItem={(item) => (
    <List.Item>
      <FileInformation data={item}></FileInformation>
    </List.Item>
  )}
/>);
}