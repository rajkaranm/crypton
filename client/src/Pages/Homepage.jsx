import React from 'react'
import {
  Navbar,
  Footer,
  Services,
  Welcome,
} from "../components"

export default function Homepage() {
  return (
    <div>
      <div className='App'>
        <div className="min-h-screen">
          <div className="gradient-bg-welcome">
            <Navbar />
            <Welcome />
          </div>
          <Services />
          <Footer />
        </div>
      </div>
    </div>
  )
}
