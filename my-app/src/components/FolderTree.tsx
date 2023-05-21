
import type {  DirectoryTreeProps } from 'antd/es/tree';
import { DownOutlined, FolderTwoTone} from '@ant-design/icons';
import DirectoryTree from 'antd/es/tree/DirectoryTree';
import { getName } from '../helpers/helperMethods';
import path from 'path';


export const FolderTree = (props: any) => {
 const onSelect: DirectoryTreeProps['onSelect'] = (keys, info) => {
  props.onSelectItem({
   keys, info
  });
 }
 const onRightClick = (e: any) => {
  // const positionInfo = e.event.currentTarget.getBoundingClientRect();
  //   const x = positionInfo.right;
  //   const y = positionInfo.bottom; 
  props.onRightClick(e);
 }
 
 const onDrop =(e:any)=>{
  console.log(e)
 }
 return (
  
  <DirectoryTree
  style={{background: "#b9c0da",}}
   multiple
   onSelect={onSelect}
   treeData={props.data}
   draggable
   blockNode
   selectable
   icon={<FolderTwoTone />}
   fieldNames={{ title: 'name', key: 'path', children: 'items' }}
   onRightClick={onRightClick}
   showLine
   onDrop={onDrop}
   switcherIcon={<DownOutlined />}
   selectedKeys={[props.item?.path]}
  />

 );
};




