'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const slides = [
  {
    src: '/assets/slider/biodiversidad1.jpg',
    alt: 'Biodiversidad Chilena'
  },
  {
    src: '/assets/slider/biodiversidad2.jpg',
    alt: 'Flora Nativa'
  },
  {
    src: '/assets/slider/biodiversidad3.jpg',
    alt: 'Fauna Chilena'
  }
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="hero-slider">
      <div className="hero-content">
        <h1><span>Conectamos personas</span> con la biodiversidad</h1>
        <p style={{color: 'white'}}>Una plataforma sustentable, abierta y humana para el ecosistema verde.</p>
        <div className="hero-cta">
          <Link href="/marketplace" className="btn primary">Explorar</Link>
          <Link href="/login" className="btn secondary">Ingresar</Link>
        </div>
      </div>
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`slide fade ${index === currentSlide ? '' : ''}`}
            style={{ display: index === currentSlide ? 'block' : 'none' }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              width={1200}
              height={610}
              style={{ width: '100%', height: '610px', objectFit: 'cover' }}
            />
          </div>
        ))}
        
        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}