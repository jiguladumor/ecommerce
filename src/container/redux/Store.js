import { createStore, applyMiddleware } from "redux"
// import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from "./reducer"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { rootSaga } from "./sagas/rootSagas"

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware, thunk]

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart' , 'product','auth']
  }
   
  const persistedReducer = persistReducer(persistConfig, rootReducer)
 
const configureStore = () => {
    let store = createStore(persistedReducer, applyMiddleware(...middlewares))

    sagaMiddleware.run(rootSaga)

    return  store
}

export const store = configureStore()

export let persistor = persistStore(store)