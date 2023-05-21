import { FileModel } from "../interfaces/FileManagerModels";


export const convertExtensionToIcon = (item: string | null | undefined) => {
  if (!item) {
    return null;
  }
  // const extension: string | null = item.split('.').length > 1 ? item.split('.')[1] : null;

  // switch (extension ? extension.toLowerCase() : null) {
  //  // case 'pdf':
  //  //   return {
  //  //     iconClass: 'k-i-file-pdf k-i-pdf',
  //  //     type: 'Data'
  //  //   };
  //  // case 'ppt': case 'pptx':
  //  //   return {
  //  //     iconClass: 'k-i-file-ppt k-i-ppt',
  //  //     type: 'Data'
  //  //   };
  //  // case 'xlsx': case 'xls':
  //  //   return {
  //  //     iconClass: 'k-i-file-data',
  //  //     type: 'Data'
  //  //   };
  //  case 'jpg': case 'png':
  //   return {

  //   };
  //  // case 'txt': case 'doc': case 'docx':
  //  //   return {
  //  //     iconClass: 'k-i-file-txt',
  //  //     type: 'Text'
  //  //   };
  //  case 'mp3': case 'mp4': case 'mp':
  //   return {

  //   };
  //  case null:
  //   return {

  //   };
  //  default:
  //   return {

  //   };
  // };
};

export const getName = (path: string | undefined) => {
  if (!path) {
    return path;
  }
  return path.split("/").pop();
};

export const getFolderPath = (path: string | undefined) => {
  if (!path) {
    return path;
  }
  const pathArr = path.split("/");
  pathArr.pop();
  return pathArr.join("/");
};

export const getFolderTree = (
  data: FileModel[],
  selectedItem: FileModel | null = null
) => {
  if (!data) {
    return data;
  }
  const newItems: FileModel[] = [];

  for (let index = 0; index < data.length; index++) {
    const currentItem = { ...data[index] };
    if (
      currentItem.path &&
      !currentItem.path.includes(".mp3") &&
      !currentItem.path.includes(".mp4") &&
      !currentItem.path.includes(".mp") &&
      !currentItem.path.includes(".png") &&
      !currentItem.path.includes(".jpg") &&
      !currentItem.path.includes(".jpeg")
    ) {
      if (currentItem.items && currentItem.items.length) {
        currentItem.items = getFolderTree(currentItem.items, selectedItem);
      }

      newItems.push({
        ...currentItem,
        selected: selectedItem ? selectedItem.path === currentItem.path : false,
      });
    }
  }
  return newItems;
};
const mapData = (data: [] | any) => {
  if (!data) {
    return [];
  }
  return data.map(
    (item: { path: string | undefined; size: any; items: string | any[] }) => {
      return {
        name: getName(item.path),
        path: item.path,
        size: item.size,
        icon: convertExtensionToIcon(getName(item.path)),
        items: item.items && item.items.length ? mapData(item.items) : [],
      };
    }
  );
};
export const formatData = (data: FileModel[]) => {
  return mapData(data);
};

export const searchTreeItem = (data: any, selectedItem: any | null) => {
  if (!selectedItem) {
    return data;
  }

  for (let index = 0; index < data.length; index++) {
    const currentItem = data[index];
    if (currentItem.path === selectedItem) {
      return currentItem;
    }
    if (currentItem.items && currentItem.items.length) {
      const foundItem: any = searchTreeItem(currentItem.items, selectedItem);
      if (foundItem) {
        return foundItem;
      }
    }
  }
};

export const detailFolder = (
  data: FileModel[],
  selectedItem: FileModel | null = null
) => {
  if (!data) {
    return data;
  }
  const newItems: FileModel[] = [];
  if (selectedItem == null) {
  for (let index = 0; index < data.length; index++) {
    const currentItem = { ...data[index] };
    
      if (currentItem.path) {
        const name = getName(currentItem.path);
        if (checkFileIsImage(name!) || checkFileIsMp(name!)) {
          newItems.push({
            ...currentItem,
          });
        }
      }}
    } else {
        var item = searchTreeItem(data, selectedItem.path);
        // console.log("item select"+item);
        for (let index = 0; index < item.items.length; index++) {
            const currentItem = { ...item.items[index] };
            
              if (currentItem.path) {
                const name = getName(currentItem.path);
                if (checkFileIsImage(name!) || checkFileIsMp(name!)) {
                  newItems.push({
                    ...currentItem,
                  });
                }
              }}
    }
  
//   console.log(newItems);
  return newItems;
};
const checkFileIsImage = (nameFile: string) => {
  const extension: string | null =
    nameFile.split(".").length > 1 ? nameFile.split(".")[1] : null;
  switch (extension ? extension.toLowerCase() : null) {
    case "png":
    case "jpeg":
    case "jpg":
      return true;
      
    default:
      return false;
  }
};

export const checkFileIsMp = (nameFile: string) => {
    const extension: string | null =
      nameFile.split(".").length > 1 ? nameFile.split(".")[1] : null;
    switch (extension ? extension.toLowerCase() : null) {
      case "mp":
      case "mp3":
      case "mp4":
        return true;
        
      default:
        return false;
    }
  };

  export const editDataItem = (data:any, selectedItem: FileModel, newPath: string) => {
    if (!data) { return data; }
    const newItems: FileModel[] = [];
  
    for (let index = 0; index < data.length; index++) {
      const currentItem = { ...data[index] };
      if (currentItem.path === selectedItem.path) {
        currentItem.path = newPath;
        currentItem.dateModified = new Date();
      }
  
      if (currentItem.items) {
        currentItem.items = editDataItem(currentItem.items, selectedItem, newPath);
      }
      newItems.push(currentItem);
    }
    return newItems;
  };