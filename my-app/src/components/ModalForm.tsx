import { Modal } from "antd";
import { ModalFormModel } from "../interfaces/FileManagerModels";

export const ModalForm = (props: ModalFormModel) => {
  return <Modal title={props.title} centered open={props.open} onOk ={props.onOk} onCancel={props.onCancel} closable= {false}>
      {props.content}
  </Modal>;
};
