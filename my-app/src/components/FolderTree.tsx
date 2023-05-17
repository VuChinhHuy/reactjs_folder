import React from 'react';
import type { DataNode, DirectoryTreeProps } from 'antd/es/tree';
import { DownOutlined ,FolderTwoTone,FolderOpenTwoTone} from '@ant-design/icons';
import DirectoryTree from 'antd/es/tree/DirectoryTree';


export const FolderTree = (props: any) => {
 const onSelect: DirectoryTreeProps['onSelect'] = (keys, info) => {
  props.onSelectItem({
   keys, info
  });
 }
 const onRightClick = (event: any) => {
 }
 return (
  <DirectoryTree
   onSelect={onSelect}
   treeData={props.data}
   draggable
   icon ={<FolderTwoTone />}
   fieldNames={{ title: 'name', key: 'path',children:'items'}}
   onRightClick={onRightClick}
   showLine
   switcherIcon={<DownOutlined />}
  />
 );
};





// const treeData: DataNode[] = [
//   {
//     title: 'parent 0',
//     key: '0-0',
//     children: [
//       { title: 'leaf 0-0', key: '0-0-0', isLeaf: true },
//       { title: 'leaf 0-1', key: '0-0-1', isLeaf: true },
//     ],
//   },
//   {
//     title: 'parent 1',
//     key: '0-1',
//     children: [
//       { title: 'leaf 1-0', key: '0-1-0', isLeaf: true },
//       { title: 'leaf 1-1', key: '0-1-1', isLeaf: true },
//     ],
//   },
// ];

// const App: React.FC = () => {
//   const onSelect: DirectoryTreeProps['onSelect'] = (keys, info) => {
//     console.log('Trigger Select', keys, info);
//   };

//   const onExpand: DirectoryTreeProps['onExpand'] = (keys, info) => {
//     console.log('Trigger Expand', keys, info);
//   };
//   const rightClick = (event: any) => {
//     console.log(event)
//   }

//  

// export default App;