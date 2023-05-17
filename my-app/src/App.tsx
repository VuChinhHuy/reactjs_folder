import React from "react";
import "./App.css";
import { Layout, Space } from "antd";
import { FolderTree } from "./components/FolderTree";
import { GridViewFile } from "./components/GridViewFile";
import { DataNode, DirectoryTreeProps } from "antd/es/tree";
import { FileModel } from "./interfaces/FileManagerModels";
import { serverData } from "./data/data";
import {
  detailFolder,
  formatData,
  getFolderTree,
  searchTreeItem,
} from "./helpers/helperMethods";
import { margin } from "@mui/system";
import { Menu } from "@mui/material";

const { Sider, Content } = Layout;
function App() {
  const [
    selectedTreeItem,
    setSelectedTreeItem,
  ] = React.useState<FileModel | null>(null);
  const [stateData, setStateData] = React.useState<FileModel[]>(
    formatData(serverData)
  );
  const [detailsData, setDetailsData] = React.useState<null | FileModel[]>(
    detailFolder(stateData, selectedTreeItem)
  );
  const onSelectItemTree: DirectoryTreeProps["onSelect"] = (
    keys: any,
    info: any
  ) => {
    const newSelectedItem: FileModel = searchTreeItem(stateData, keys.keys[0]);
    setSelectedTreeItem(newSelectedItem);

    setDetailsData(detailFolder(stateData, newSelectedItem));
  };
  return (
    <Layout hasSider>
      <Space direction="vertical" style={{ width: "300", marginRight: 10}}>
        <Layout>
          <Layout.Sider style={{ background: "#ffffff",  paddingRight: 20 }} width="xl">
            
            <FolderTree
              data={getFolderTree(stateData, selectedTreeItem)}
              onSelectItem={onSelectItemTree}
            />
            
          </Layout.Sider>
        </Layout>
      </Space>
      <Layout className="site-layout">
        <Layout.Content>
          <GridViewFile data={detailsData} />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}

export default App;
