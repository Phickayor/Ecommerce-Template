import Footer from '@/app/components/Footer'
import ForgotPassword from '@/app/components/ForgotPassword'
import Login from '@/app/components/Login'
import NavBar from '@/app/components/NavBar'
import React from 'react'

function ForgotPswd() {
  return (
    
    <div className='flex flex-col min-h-screen '>
      <NavBar />
      <div className="py-10 flex-1 self-center flex flex-col justify-center">
        <ForgotPassword />
      </div>
      <Footer/>
    </div>
  )
}

export default ForgotPswd