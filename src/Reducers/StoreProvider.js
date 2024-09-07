import { Provider } from 'react-redux'
import { persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import { makeStore } from './store'

export default function StoreProvider({ children }) {

  return <Provider store={makeStore}>
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
}