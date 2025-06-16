import Image from 'next/image'
import Link from 'next/link'

const newsArticles = [
  {
    image: '/assets/news-1.jpg',
    title: 'Conservación de Especies Nativas',
    description: 'Nuevos proyectos para proteger la flora endémica de Chile.'
  },
  {
    image: '/assets/news-2.jpg',
    title: 'Iniciativas Sustentables',
    description: 'Comunidades locales implementan proyectos verdes.'
  }
]

const blogArticles = [
  {
    image: '/assets/blog-1.png',
    title: 'Guía de Compostaje',
    description: 'Aprende a crear tu propio compost en casa.'
  },
  {
    image: '/assets/blog-2.jpg',
    title: 'Biodiversidad Urbana',
    description: 'Cómo crear espacios verdes en la ciudad.'
  }
]

export default function NewsBlogSection() {
  return (
    <section className="news-blog-section">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">Últimas Noticias y Artículos</h2>
        <div className="content-grid">
          <div className="space-y-6">
            {newsArticles.map((article, index) => (
              <article key={index} className="content-card">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="card-content">
                  <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.description}</p>
                  <Link href="#" className="read-more">Leer más</Link>
                </div>
              </article>
            ))}
          </div>

          <div className="space-y-6">
            {blogArticles.map((article, index) => (
              <article key={index} className="content-card">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="card-content">
                  <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.description}</p>
                  <Link href="#" className="read-more">Leer más</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}