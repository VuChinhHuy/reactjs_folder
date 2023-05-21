import React from "react";
import "./App.css";
import { Button, Dropdown, Form, Input, Layout, Modal, Space } from "antd";
import { FolderTree } from "./components/FolderTree";
import { GridViewFile } from "./components/GridViewFile";
import { DirectoryTreeProps } from "antd/es/tree";
import { FileModel, ModalFormModel } from "./interfaces/FileManagerModels";
import { serverData } from "./data/data";
import type { MenuProps } from "antd";
import {
  detailFolder,
  formatData,
  getFolderTree,
  getName,
  searchTreeItem,
} from "./helpers/helperMethods";
import {
  DeleteOutlined,
  EditOutlined,
  FolderAddOutlined,
} from "@ant-design/icons";
import { ModalForm } from "./components/ModalForm";
function App() {
  const [selectedTreeItem, setSelectedTreeItem] =
    React.useState<FileModel | null>(null);
  const [contextMenuView, setContextMenuView] = React.useState<boolean>(false);
  // const [menuOffSet, setMenuOffSet] = React.useState<Offset>({ left: 0, top: 0 });
  const [stateData, setStateData] = React.useState<FileModel[]>(
    formatData(serverData)
  );
  const [detailsData, setDetailsData] = React.useState<null | FileModel[]>(
    detailFolder(stateData, selectedTreeItem)
  );

  // const [modal, contextDialog] = Modal.useModal();
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [titleModal, setTitleModal] = React.useState<string>('');
  const [contentModal, setContentModal] = React.useState<JSX.Element>(<></>);
  
  const [form] = Form.useForm();
  const onSelectItemTree: DirectoryTreeProps["onSelect"] = (
    keys: any,
    info: any
  ) => {
    const newSelectedItem: FileModel = searchTreeItem(stateData, keys.keys[0]);
    setSelectedTreeItem(newSelectedItem);

    setDetailsData(detailFolder(stateData, newSelectedItem));
  };
  const onOk = async() => {
    switch (titleModal){
      case 'Edit':
        try{
          const values = await form.validateFields();
          console.log('Success:', values);
          setOpenModal(false);
        }
        catch(error)
        {
          console.log('Error',error);
    
        }
      break;
    }
    

  };
  const onCancleModel = ()=>{
    setOpenModal(false);
  }
  const onClickContextMenu: MenuProps["onClick"] = (e: any) => {
    // setopenModal(true);
    switch (e.key) {
      // case 'new_folder':
     
      case "edit":
        form.setFieldsValue({
          name: getName(selectedTreeItem?.path)
        });
        setOpenModal(true);
        setTitleModal("Edit");
        setContentModal(
                <Form form={form} name="edit">
                  <Form.Item
                    name="name"
                    rules={[{ required: true, message: "Please input your name" }]}
                  >
                    <Input />
                  </Form.Item>
                </Form>
              );
        break;
      case "delete":
        setOpenModal(true);
        setTitleModal("Delete");
        setContentModal(
                <><DeleteOutlined/> Are you sure delete {getName(selectedTreeItem?.path)}</>
              );
        break;
    }
  };
  const items: MenuProps["items"] = [
    // {
    //   key: 'new_folder',
    //   label:'New Folder',
    //   icon: < FolderAddOutlined />
    // },
    {
      key: "edit",
      label: "Edit",
      icon: <EditOutlined />,
    },
    {
      key: "delete",
      label: "Delete",
      icon: <DeleteOutlined />,
      danger: true,
    },
  ];

  document.addEventListener("click", () => {
    setContextMenuView(false);
  });

  const onRightClick = (event: any) => {
    setContextMenuView(true);
    const keys: any = {
      keys: [event.node.path],
    };
    onSelectItemTree(keys, event.event);
  };

  return (
    <Layout hasSider>
      <Space direction="vertical" style={{ width: "300" }}>
        <Layout style={{ height: 300, justifyContent: "center", flex: "true" }}>
          <Layout.Sider style={{ background: "#b9c0da" }} width="xl">
            <Dropdown
              menu={{ items, onClick: onClickContextMenu }}
              open={contextMenuView}
              trigger={["contextMenu"]}
            >
              <div style={{ width: 350 }}>
                <FolderTree
                  data={getFolderTree(stateData, selectedTreeItem)}
                  onSelectItem={onSelectItemTree}
                  onRightClick={onRightClick}
                  item={selectedTreeItem}
                />
              </div>
            </Dropdown>
          </Layout.Sider>
        </Layout>
      </Space>
      <Layout className="site-layout">
        <Layout.Content>
          <GridViewFile data={detailsData} />
        </Layout.Content>
      </Layout>
      {/* {contextDialog} */}
      <ModalForm open={openModal} title={titleModal} content={contentModal} onCancel={onCancleModel} onOk={onOk} />
    </Layout>
  );
}

export default App;
