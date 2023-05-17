import { FileModel } from "../interfaces/FileManagerModels";


export const serverData: FileModel[] = [
  {
    path: "Home/Picture.jpg",
    size: 4555,
    dateCreated: new Date(),
    dateModified: new Date(),
    items: []
  },  {
    path: "Home/Pictures",
    size: 30,
    dateCreated: new Date(),
    dateModified: new Date(),
    items: [
      {
        path: "Home/Pictures/Vacation",
        size: 200,
        dateCreated: new Date(),
        dateModified: null
      },
      {
        path: "Home/Pictures/Bulgaria",
        size: 202665,
        dateCreated: new Date(),
        dateModified: null,
        items: [
          {
            path: "Home/Pictures/Bulgaria/sea.jpg",
            size: 20,
            dateCreated: new Date(),
            dateModified: null
          }, {
            path: "Home/Pictures/Bulgaria/beach.jpg",
            size: 20,
            dateCreated: new Date(),
            dateModified: null
          }
        ],
      },
      {
        path: "Home/Pictures/view.jpg",
        size: 50,
        dateCreated: new Date(),
        dateModified: null
      }
    ]
  },
  {
    path: "Home/Music",
    size: 10554,
    dateCreated: new Date(),
    dateModified: new Date(),
    items: [
      {
        path: "Home/Music/music.mp3",
        size: 200,
        dateCreated: new Date(),
        dateModified: null
      },
      {
        path: "Home/Music/new",
        size: 202665,
        dateCreated: new Date(),
        dateModified: null,
        items: [
          {
            path: "Home/Music/new/real.mp3",
            size: 20,
            dateCreated: new Date(),
            dateModified: null
          },
          {
            path: "Home/Music/new/shakira.mp3",
            size: 20,
            dateCreated: new Date(),
            dateModified: null
          }
        ],
      },
      {
        path: "Home/Music/home.jpg",
        size: 50,
        dateCreated: new Date(),
        dateModified: null
      }
    ]
  }
];
