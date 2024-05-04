import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import SetTransform from "./contactsSlice";

const contactPersistConfig = {
  key: "contacts",
  storage,
  transforms: [SetTransform],
};

const pContactReducer = persistReducer(contactPersistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: pContactReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
