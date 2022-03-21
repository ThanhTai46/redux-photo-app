// const { createSlice } = require("@reduxjs/toolkit");

const { createSlice } = require("@reduxjs/toolkit");
const initialPhoto = [
  {
    id: 91176,
    categoryId: 1,
    photo: "https://picsum.photos/id/77/1080/1080",
    title:
      "Dolor Lorem aliqua ea consectetur in tempor reprehenderit consequat officia.",
  },
  {
    id: 82605,
    categoryId: 2,
    photo: "https://picsum.photos/id/622/1080/1080",
    title:
      "Non aliqua proident magna pariatur eu deserunt eu ipsum velit aliquip.",
  },
  {
    id: 74760,
    categoryId: 4,
    photo: "https://picsum.photos/id/477/1080/1080",
    title:
      "Aliquip elit laboris eu aute irure enim reprehenderit voluptate consectetur minim minim adipisicing commodo.",
  },
  {
    id: 39588,
    categoryId: 3,
    photo: "https://picsum.photos/id/625/1080/1080",
    title: "Nostrud velit veniam esse officia.",
  },
  {
    id: 72133,
    categoryId: 3,
    photo: "https://picsum.photos/id/20/1080/1080",
    title:
      "Anim Lorem consectetur reprehenderit ea nulla est consectetur ullamco minim proident.",
  },
  {
    id: 95333,
    categoryId: 1,
    photo: "https://picsum.photos/id/433/1080/1080",
    title: "Laboris quis et ex exercitation do tempor in.",
  },
  {
    id: 62419,
    categoryId: 4,
    photo: "https://picsum.photos/id/769/1080/1080",
    title: "Est sunt dolor cillum duis exercitation.",
  },
  {
    id: 12569,
    categoryId: 2,
    photo: "https://picsum.photos/id/292/1080/1080",
    title:
      "Culpa adipisicing occaecat culpa laborum Lorem amet consectetur fugiat laborum do Lorem excepteur ea dolor.",
  },
  {
    id: 47434,
    categoryId: 3,
    photo: "https://picsum.photos/id/397/1080/1080",
    title:
      "Aliqua ad qui occaecat do velit elit deserunt ipsum culpa magna adipisicing.",
  },
  {
    id: 52685,
    categoryId: 2,
    photo: "https://picsum.photos/id/756/1080/1080",
    title: "Aliquip elit ullamco magna in dolore aliqua do.",
  },
  {
    id: 69928,
    categoryId: 3,
    photo: "https://picsum.photos/id/790/1080/1080",
    title: "Irure labore ut qui in.",
  },
];

const photoSlice = createSlice({
  name: "photo",
  initialState: initialPhoto,
  reducers: {
    addPhoto: (state, action) => {
      const newPhoto = action.payload;
      state.push(newPhoto);
    },
    removePhoto: (state, action) => {
      console.log(action.payload);
      const removePhotoId = action.payload;
      state = state.filter((photo) => photo.id !== removePhotoId);
      return state;
    },
    editPhoto: (state, action) => {
      const newPhoto = action.payload;
      const photoIndex = state.findIndex((photo) => photo.id === newPhoto.id);
      if (photoIndex >= 0) {
        state[photoIndex] = newPhoto;
      }
    },
  },
});
const { actions, reducer } = photoSlice;
export const { addPhoto, removePhoto, editPhoto } = actions;
export default reducer;
