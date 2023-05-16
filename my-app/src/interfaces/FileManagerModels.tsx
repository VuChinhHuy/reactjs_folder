export interface FileMode {
    path?: string;
    expanded?: boolean;
    selected?: boolean;
    size?: number;
    dateCreated?: Date | null;
    dateModified?: Date | null;
    icon?: IconType | null;
    items?: FileMode[];
    edit?: boolean;
    length?: number;
}
export interface IconType {
    iconClass?: string;
    type?: string;
};