import './App.css'
import Header from './components/header/Header'
import { Route, Routes } from 'react-router-dom'
import Body from './components/body/Body'
import { useState } from 'react'
import SignUp from './components/signUp/SignUp'
import UserOrder from './components/userOrder/UserOrder'

function App() {
  const [openPopup, setOpenPopup] = useState(false)

  const handleOverlayClick = () => {
    setOpenPopup(false);
  }

  const handlePopupClick = (e) => {
    // Stop the event propagation to prevent closing the overlay when clicking inside the popup
    e.stopPropagation();
  }

  return (
    <div className='App'>
      <div style={{ display: openPopup ? "block" : "none" }} onClick={handleOverlayClick} className="signUpActive">
        <div className='pop-up' onClick={handlePopupClick}>
          <SignUp />
        </div>
      </div>


      <Header setOpenPopup={setOpenPopup} />
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/my-order' element={<UserOrder />} />
      </Routes>
    </div>
  )
}

export default App
