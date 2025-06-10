import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "state";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "state/api";
import { authApi } from "state/authApi";
import { authSlice } from "state/authSlice";
import { apiSpring } from "state/apiSpring";
import springReducer from "state/springSlice";
import { categoryApi } from "state/categoryApi";
const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    global: globalReducer,
    [api.reducerPath]: api.reducer,
    auth: authSlice.reducer,
    [apiSpring.reducerPath]: apiSpring.reducer,
    spring: springReducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    category: categoryApi,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(api.middleware)
      .concat(apiSpring.middleware)
      .concat(categoryApi.middleware),
});

setupListeners(store.dispatch);

export default store;
