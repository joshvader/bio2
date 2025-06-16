import Image from 'next/image'

const sections = [
  {
    image: '/assets/category/market.png',
    alt: 'Marketplace Verde',
    title: 'Marketplace Verde',
    description: 'Compra y vende productos ecológicos en un solo lugar.'
  },
  {
    image: '/assets/category/red_consultores.png',
    alt: 'Red de Consultores',
    title: 'Red de Consultores',
    description: 'Encuentra profesionales del área ambiental y publica tus proyectos.'
  },
  {
    image: '/assets/category/educacion.png',
    alt: 'Educación Ambiental',
    title: 'Educación Ambiental',
    description: 'Aprende, enseña y comparte conocimientos sobre sostenibilidad.'
  },
  {
    image: '/assets/category/campaña.png',
    alt: 'Campañas de Apoyo',
    title: 'Campañas de Apoyo',
    description: 'Contribuye con proyectos verdes y causas ambientales.'
  }
]

export default function InfoGrid() {
  return (
    <>
      {sections.map((section, index) => (
        <section key={index} className="info-section">
          <div className="image-container">
            <Image
              src={section.image}
              alt={section.alt}
              className="section-image"
              width={400}
              height={300}
            />
            <div className="image-text">
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}