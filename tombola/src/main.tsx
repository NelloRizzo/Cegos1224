import { createRoot } from 'react-dom/client'
import './index.css'

import Table from './Table/Table.tsx'
import { Provider } from 'react-redux'
import store from './State/Store.ts'

createRoot(document.getElementById('root')!).render(
  
    <Provider store={store}>
      <Table />
    </Provider>

)
