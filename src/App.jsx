
import { Link } from 'react-router-dom'
import './App.css'
import AllRoutes from './AllRoutes'

function App() {
  console.log("working")

  return (
    <div>
     
     <div className='navbar'>
      <Link to="/home">Home</Link>
      <Link to="/">Login</Link>
     </div>
     <AllRoutes/>
    </div>
  )
}

export default App
