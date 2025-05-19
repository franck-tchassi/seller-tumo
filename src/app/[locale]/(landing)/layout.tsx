"use client"

import ModalSignUp from '@/components/auth/ModalSignUp'
import ModalSignIn from '@/components/auth/ModalSignIn'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import React, { useState } from 'react'


const LandingLayout = ({children}: {children: React.ReactNode}) => {
  const [activeModal, setActiveModal] = useState<"signin" | "signup" | null>(null)

  const openSignIn = () => setActiveModal("signin")
  const openSignUp = () => setActiveModal("signup")
  const closeModal = () => setActiveModal(null)

  const switchToSignIn = () => setActiveModal("signin")
  const switchToSignUp = () => setActiveModal("signup")

  return (
    <div className="relative">
      <Header openSignIn={openSignIn} openSignUp={openSignUp} />
      {children}
      <Footer />

      {activeModal === "signin" && (
        <ModalSignIn 
          handleShowModal={closeModal}
          switchToSignUp={switchToSignUp}
        />
      )}

      {activeModal === "signup" && (
        <ModalSignUp 
          handleShowModal={closeModal}
          switchToSignIn={switchToSignIn}
        />
      )}
    </div>
  )
}

export default LandingLayout