import './App.css'
import { UserView } from './features/user/userView'
import { CakeView } from './features/cakeSlice.js/cake'

function App() {
  return (
    <>
      <UserView />
      <CakeView />
    </>
  )
}

export default App
