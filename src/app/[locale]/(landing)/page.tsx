"use client"

import ModalSignIn from "@/components/auth/ModalSignIn"
import ModalSignUp from "@/components/auth/ModalSignUp"
import CTA from "@/components/layout/CTA"
import FAQSection from "@/components/layout/FAQSection"
import HeroWithVideo from "@/components/layout/HeroWithVideo"
import WhySellWithUs from "@/components/layout/WhySellWithUs"
import { useState } from "react"



export default function Home() {
  const [activeModal, setActiveModal] = useState<"signin" | "signup" | null>(null)
  
  
  const closeModal = () => setActiveModal(null)
  const openSignUp = () => setActiveModal("signup")
  const switchToSignIn = () => setActiveModal("signin")
  const switchToSignUp = () => setActiveModal("signup")
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroWithVideo openSignUp={openSignUp} />
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

      {/* Section Avantages */}
      <WhySellWithUs />

      {/* Section FAQ */}
      <FAQSection />

      {/* CTA Final */}
      <CTA openSignUp={openSignUp}/>
    </main>
  )
}
