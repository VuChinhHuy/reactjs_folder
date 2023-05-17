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
// export interface ContextMenuEvent {
//  event: React.MouseEvent<HTMLDivElement | HTMLSpanElement, MouseEvent>;
//  dataItem: FileModel;
//  itemId?: string;
//  tree?: boolean;
// };

// export interface ContextMenuProps {
//  onContextMenuCLick: (e:any) => void;
//  offset?: Offset;
// };
