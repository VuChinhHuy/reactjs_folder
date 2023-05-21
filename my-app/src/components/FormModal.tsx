import { Modal } from "antd";
import { ModalFormModel } from "../interfaces/FileManagerModels";

export const FormModal = (props : ModalFormModel) =>{
    return (
        <Modal title={props.title} open={props.open} onOk={props.onOk} onCancel={props.onCancel} closable >
        {props.content}
      </Modal>
    );
}