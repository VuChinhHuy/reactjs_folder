import { Form, FormProps } from "antd";

export interface FileModel {
 path?: string;
 expanded?: boolean;
 selected?: boolean;
 size?: number;
 dateCreated?: Date | null;
 dateModified?: Date | null;
 icon?: IconType | null;
 items?: FileModel[];
 edit?: boolean;
 length?: number;
}
export interface IconType {
 iconClass?: string;
 type?: string;
};

export interface Offset {
 top: number;
 left: number;
}

export interface ModalFormModel {
    open: boolean,
    title : string,
    content:JSX.Element,
    onOk?: () =>void,
    onCancel? : () => void

}