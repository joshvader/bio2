'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple login simulation
    localStorage.setItem('isLoggedIn', 'true')
    router.push('/dashboard')
  }

  return (
    <>
      <Navbar />
      <main>
        <div className="login-container">
          <h2>Iniciar sesión</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="btn primary" style={{textAlign: 'center'}}>
              Ingresar
            </button>
          </form>
          <p>¿Aún no tienes cuenta? <Link href="/registro">Regístrate aquí</Link></p>
        </div>
      </main>
      <Footer />
      
      <style jsx>{`
        .login-container {
          max-width: 400px;
          margin: 4rem auto;
          background: white;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.08);
        }
        .login-container h2 {
          margin-bottom: 1rem;
          text-align: center;
        }
        .login-container form {
          display: flex;
          flex-direction: column;
        }
        .login-container label {
          margin-top: 1rem;
          margin-bottom: 0.3rem;
          font-weight: 500;
        }
        .login-container input {
          padding: 0.6rem;
          border: 1px solid #ccc;
          border-radius: 10px;
        }
        .login-container .btn {
          margin-top: 1.5rem;
        }
        .login-container p {
          margin-top: 1rem;
          text-align: center;
        }
      `}</style>
    </>
  )
}