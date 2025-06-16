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
    <div className="relative w-full">
      <div className="hero-content">
        <h1>
          <span className="text-primary">Conectamos personas</span> con la biodiversidad
        </h1>
        <p className="text-white">Una plataforma sustentable, abierta y humana para el ecosistema verde.</p>
        <div className="hero-cta">
          <Link href="/marketplace" className="btn btn-primary">Explorar</Link>
          <Link href="/login" className="btn btn-secondary">Ingresar</Link>
        </div>
      </div>
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`${index === currentSlide ? 'block' : 'hidden'} fade`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              width={1200}
              height={610}
              className="slide img"
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
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-20"></div>
      </div>
    </div>
  )
}