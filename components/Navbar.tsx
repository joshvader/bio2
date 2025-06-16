'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Check if user is logged in (you can implement your auth logic here)
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true'
    setIsLoggedIn(loggedIn)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-logo">🌱 Biodiversidad.cl</div>
      <ul className="nav-links">
        <li><Link href="/">Inicio</Link></li>
        <li><Link href="/marketplace">Marketplace</Link></li>
        <li><Link href="/consultores">Consultores</Link></li>
        <li><Link href="/educacion">Educación</Link></li>
        <li><Link href="/campanas">Campañas</Link></li>
        <li><Link href="/membresias">Membresías</Link></li>
        <li><Link href="/contacto">Contacto</Link></li>
        <li className="flex gap-4">
          {!isLoggedIn ? (
            <Link href="/login" className="btn-login">Ingresar</Link>
          ) : (
            <button onClick={handleLogout} className="btn-logout">Cerrar Sesión</button>
          )}
        </li>
      </ul>
    </nav>
  )
}