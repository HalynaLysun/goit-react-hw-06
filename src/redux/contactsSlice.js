import { createSlice, nanoid } from "@reduxjs/toolkit";
// import { createTransform } from "redux-persist";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: {
            id: nanoid(),
            ...contact,
          },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        const index = state.items.findIndex(
          (contact) => contact.id === action.payload
        );
        state.items.splice(index, 1);
      },
    },
  },
});

// const SetTransform = createTransform(
//   (outboundState, key) => {
//     return { ...outboundState, mySet: new Set(outboundState.mySet) };
//   },
//   { whitelist: ["contactsReducer"] }
// );

// export default SetTransform;

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
