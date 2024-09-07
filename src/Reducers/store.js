import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { persistStore } from 'redux-persist';

import userSlice from './slices/userSlice';
import postSlice from './slices/postSlice';
import commentSlice from './slices/commentSlice';
import likeSlice from './slices/likeSlice';
import saveSlice from './slices/saveSlice';


const authPersistConfig = {
    key: "social_bridge",
    storage,
    blacklist: ["somethingTemporary"],
};
const reducers = persistReducer(authPersistConfig, combineReducers({
    user: userSlice,
    post: postSlice,
    comment: commentSlice,
    like: likeSlice,
    save: saveSlice,
}));
export const makeStore = configureStore({
    reducer: {
        reducers,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export const persistor = persistStore(makeStore);